import React, {
  LC,
  provide,
  useState,
  useRef,
  useOne,
  useContext,
  makeContext,
  Gather,
  gather,
  makeReconciler,
  useMemo,
  makeCapture,
  capture,
  Capture,
  Provide,
} from "@use-gpu/live";
import { discardState } from "@use-gpu/live/cjs/hooks.cjs";

export const StepContext = makeContext(
  {
    step: 0,
    length: 0,
  },
  "StepContext"
);
export const useStepContext = () => useContext(StepContext);

export const StepApiContext = makeContext(
  {
    goTo: () => {},
    goForward: () => {},
    goBack: () => {},
  },
  "StepApiContext"
);
export const useStepApiContext = () => useContext(StepApiContext);

export const SteppingCapture = makeCapture("SteppingCapture");

export const Stepping: LC = ({ children, sharedContext }) => {
  console.warn("Stepping");
  const [state, setState] = useState({
    step: 0,
    length: 0,
  });
  const stateRef = useRef(state);
  stateRef.current = state;

  const [map, setMap] = useState(new Map());

  const pendingStep = useRef({ id: undefined });
  let fiberToFlush = null;

  // set isPlaying from shared context at the top
  const { current } = sharedContext;
  useOne(() => {
    sharedContext.current.isPlaying = false;
  });
  // useOne(() => {
  //   console.log("useOne in Stepping");
  //   current.isPlaying = true;
  //   sharedContext.current.triggerReact("navigation");
  //   current.playPause = () => {
  //     console.error("PLAY PAUSe");

  //     if (current.isPlaying) {
  //       // --> if there is pending step --> cancel that setTimeout
  //       clearTimeout(pendingStep.current.id);
  //       pendingStep.current.id = null;
  //       console.log("fiberToFlush", fiberToFlush.id);
  //       current.isPlaying = false;
  //     } else {
  //       // schedule and flush fiber to run
  //       console.log("fiberToFlush", fiberToFlush.id);
  //       api.goForward();
  //       fiberToFlush.host.schedule(fiberToFlush);
  //       fiberToFlush.host.flush();
  //       current.isPlaying = true;
  //     }
  //   };
  // }, fiberToFlush);

  // useOne(() => {
  //   if (state.step !== initialStep)
  //     setState((s) => ({ ...s, step: initialStep }));
  // }, initialStep);

  const api = useOne(() => {
    const goTo = (step: number) =>
      setState((s) => {
        if (s.step === step) return s;
        return { ...s, step };
      });
    const goForward = () => {
      const { current: state } = stateRef;
      if (!state) return;
      goTo(state.step + 1);
    };
    const goBack = () => {
      const { current: state } = stateRef;
      if (!state) return;
      goTo(state.step - 1);
    };

    const getVisibleState = (id) => {
      const savedStep = map.get(id);
      if (!savedStep) return false;
      else return true;
    };
    const clearStep = () => {
      const entry = map.entries();
      const fiber = entry.next().value[1].fiber;
      fiber.host.schedule(fiber);
      // console.log("entry", entry.next().value[1].fiber);

      map.clear();
      console.log("CLEAR Step map", map);
      goTo(0);
    };

    return { goTo, goForward, goBack, getVisibleState, clearStep };
  });

  const contextApi = useMemo(() => {
    return {
      ...api,
    };
  }, [api]);
  const contextStep = useMemo(() => {
    return { state };
  }, [state]);
  // const context = useMemo(() => {
  //   return {
  //     state,
  //     ...api,
  //   };
  // }, [api, state]);

  // console.log("context", context);

  return (
    <Capture
      context={SteppingCapture}
      children={
        <Provide context={StepApiContext} value={contextApi}>
          <Provide context={StepContext} value={contextStep}>
            {children}
          </Provide>
        </Provide>
      }
      then={(steps) => {
        console.error("STEPPING steps", steps);
        // const length = steps.reduce((sum, { step }) => {
        //   sum = sum + step;
        //   return sum;
        // }, 0);
        // console.error("STEPPING length", length);
        console.log("current.isPlaying", sharedContext.current.isPlaying);
        console.log("STEPS", steps);
        for (const step of steps) {
          let fiber = map.get(step.id);
          console.log(fiber);
          if (!fiber) {
            fiberToFlush = step.fiber;
            discardState(fiberToFlush);
            map.set(step.id, step);
            break;
          }
        }

        useOne(() => {
          console.log("useOne in Stepping");
          sharedContext.current.triggerReact("playPause");
          current.playPause = () => {
            console.error("PLAY PAUSE");
            console.log("current.isPlaying", sharedContext.current.isPlaying);

            if (sharedContext.current.isPlaying) {
              // --> if there is pending step --> cancel that setTimeout
              clearTimeout(pendingStep.current.id);
              pendingStep.current.id = null;
              console.log("fiberToFlush", fiberToFlush?.id);
              sharedContext.current.isPlaying = false;
            } else {
              // schedule and flush fiber to run
              console.log("fiberToFlush", fiberToFlush?.id);
              sharedContext.current.isPlaying = true;
              console.log("current.isPlaying", sharedContext.current.isPlaying);
              api.goForward();
              fiberToFlush.host.schedule(fiberToFlush);
              fiberToFlush.host.flush();
            }
          };
        }, fiberToFlush);

        // play - schedule & flush the non flushed fiber to run
        console.log("Stepping Map", map);
        console.log("fiberToFlush", fiberToFlush?.id);
        console.log("current.isPlaying", sharedContext.current.isPlaying);

        if (fiberToFlush != null && sharedContext.current.isPlaying) {
          // if (length - 1 >= stateRef.current.step && fiberToFlush != null) {
          console.log("schedule flushLive", fiberToFlush?.id);
          pendingStep.current.id = setTimeout(() => {
            console.log("----------");
            console.log("timeout");
            console.log("fiberToFlush", fiberToFlush);
            api.goForward();
            fiberToFlush.host.schedule(fiberToFlush);
            fiberToFlush.host.flush();
          }, 100);
        } else {
          console.log("set isPlaying false");

          sharedContext.current.isPlaying = false;
        }
        console.log("pendingStep", pendingStep.current.id);

        return null;
      }}
    />
  );
};

// state at the top
// fiber root - set into state in pass
// current root - set into state in pass
// step - set after pass in stepping, schedule flush
// { fiberRoot, currentRoot, step }

// wip root
// step
// { wipRoot, step }

// fibers
// step
// { comp, step }

// initial state
{
  fiberRoot: null;
  currentRoot: null;
  wipRoot: null;
  wip: null;
}

// update 1
{
  fiberRoot: "{}";
  currentRoot: "{}";
}

// update 2
{
  currentRoot: "{alternate}";
  wipRoot: "{}";
}
