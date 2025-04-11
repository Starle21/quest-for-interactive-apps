import React, {
  memo,
  useCallback,
  useLayoutEffect,
  useEffect,
  useMemo,
  useState,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import ReactDOM from "react-dom";

import { incrementVersion } from "@use-gpu/live";

// sharedContext ref state?
// maybe not through context - as Live context is different from React context...
// save ref in sharedContext object as props
const VizStateContext = createContext({
  subscribe: () => {},
  unsubscribe: () => {},
  fibers: new Map(),
  effects: new Map(),
});
export const useVizStateContext = () => useContext(VizStateContext);

// state of Viz
// that is updated from Code
export const VizStateProvider = ({ sharedContext, children }) => {
  const [fibers, api, visible, timeline] = useMemo(() => {
    const visible = new Map();
    const fibers = new Map();
    const timeline = new Map();

    const api = {
      subscribe: (fiberId, handler) => {
        if (!fiberId) return;

        let r = visible.get(fiberId);
        if (!r) visible.set(fiberId, (r = new Set()));
        r.add(handler);
        console.log("rendered", visible);
      },
      unsubscribe: (fiberId, handler) => {
        console.log("unsubscribe viz");

        if (!fiberId) return;
        let r = visible.get(fiberId);
        if (r) {
          r.delete(handler);
          if (r.size === 0) visible.delete(fiberId);
        }
      },

      fibers,
      timeline,
    };

    return [fibers, api, visible, timeline];
  }, []);

  useLayoutEffect(() => {
    let timer = null;
    let queue = [];
    // let version = 0;
    let flush = () => {
      console.log("---");
      console.log("flush Viz");
      timer = null;
      const q = queue.slice();
      queue.length = 0;

      ReactDOM.unstable_batchedUpdates(() => {
        // process pinged fibers
        for (const id of q) {
          console.log("batched fibers", id);
          // check if its react components is subscribed
          // called attached handlers for only those fibers that are rendered in React
          const p = visible.get(id);
          if (!p) continue;
          console.log("trigger React setState");
          const handlers = p.values();
          for (const h of handlers) h();
        }
      });
    };
    // connect pingViz into this closure where fibers Map is
    sharedContext.current.pingViz = ({ accessor, fiber, text, point }) => {
      // which fiber was triggered
      //   console.log("pingViz", fiber.id);
      // version = incrementVersion(version);
      // if (effect) {
      //   console.warn("effect", effect);
      //   queue.push("effect");
      // }
      if (fiber) queue.push(fiber.id);
      if (point) queue.push("timeline");
      console.log(
        "%cpingViz",
        "color: purple; font-weight: 900;background-color: violet",
        text,
        fiber?.id,
        fiber,
        queue
      );
      // schedule react flush
      if (!timer) {
        console.log("schedule flush Viz");
        timer = setTimeout(flush, 0);
      }

      // place fiber in viz fibers Map - change state
      if (fiber && !fibers.get(fiber.id)) fibers.set(fiber.id, { fiber, text });
      if (point && !timeline.get(point.id))
        timeline.set(point.id, { point, text });
      if (accessor) {
        console.log("update fiber due to accessor", accessor);

        const fiberWithAccessor = fibers.get(fiber.id);
        fibers.delete(fiber.id);
        fibers.set(fiber.id, { fiber, text: fiberWithAccessor.text, accessor });
      }
      // if (effect && !effects.get(effect.id))
      //   effects.set("effect", { effect, text });
    };

    sharedContext.current.triggerReact = (id) => {
      console.log("schedule react pass");
      queue.push(id);
      if (!timer) {
        console.log("schedule flush Viz");
        timer = setTimeout(flush, 0);
      }
      console.log("queue", queue);
    };
  }, []);

  return (
    <VizStateContext.Provider value={api}>{children}</VizStateContext.Provider>
  );
};

export const useForceUpdate = (): [number, () => void] => {
  const [version, setVersion] = useState<number>(0);
  const forceUpdate = useCallback(() => {
    console.log("schedule state update Viz");
    setVersion(incrementVersion);
  }, []);
  return [version, forceUpdate];
};

export const useVizStateTracker = (id, node) => {
  const { subscribe, unsubscribe } = useVizStateContext();
  const [, forceUpdate] = useForceUpdate();

  useLayoutEffect(() => {
    console.log("subscribe viz", id);

    const handler = () => {
      forceUpdate();
    };
    subscribe(id, handler);
    return () => unsubscribe(id, handler);
  }, [node]);
};
