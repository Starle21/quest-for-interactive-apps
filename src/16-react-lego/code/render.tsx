import React, {
  LC,
  yeet,
  gather,
  provide,
  useResource,
  useState,
  useRef,
  useOne,
  useMemo,
  useContext,
  makeContext,
  makeReconciler,
  memo,
  suspend,
  multiGather,
  fence,
  useFiber,
  incrementVersion,
  useCapture,
} from "@use-gpu/live";
import { useStepApiContext } from "../step/Stepping";

import { Step } from "../step/step";
import { FiberRoot } from "./fiberRoot";
import { WipRoot } from "./wipRoot";

export const MountContext = makeContext(
  {
    topEffect: () => {},
    domRoot: {},
  },
  "MountContext"
);
export const useMountContext = () => useContext(MountContext);

export const FrameContext = makeContext(0, "FrameContext");
export const usePerFrame = () => useContext(FrameContext);

export let triggerLiveRender;
// --------
// step 1
export const Render = (props) => {
  console.warn("Render", props);
  const {
    topEffect: initialTopEffect,
    domRoot: initialDomRoot,
    children,
    sharedContext,
  } = props;

  // const [frame, setFrame] = useState({ current: 0 });
  const frame = useRef({ pass: 0 });
  const [topEffect, setTopEffect] = useState(() => initialTopEffect);
  const [domRoot, setDomRoot] = useState(initialDomRoot);
  const fiber = useFiber();

  // TODO: better memoization if outside initial argument changes
  const context = useMemo(() => {
    return {
      topEffect,
      domRoot,
      pingViz: sharedContext.current.pingViz,
      triggerReact: sharedContext.current.triggerReact,
      frame,
    };
  }, [initialTopEffect, initialDomRoot]);

  const { clearStep } = useStepApiContext();

  context.pingViz({ effect: topEffect, text: "topEffect" });

  const rerender = (currentFrame) => {
    let current = incrementVersion(currentFrame);
    frame.current.pass = current;
    // setFrame((state) => ({ ...state, current }));
    // console.log("setFiber", fiber);
    fiber.host.schedule(fiber);
    fiber.host.flush();
  };

  triggerLiveRender = createTriggerRender((fiber) => {
    clearStep();
    rerender(frame.current.pass);
  });
  // const rerender = (current, fiber) => {
  //   current = incrementVersion(current);
  //   setFrame((state) => ({ ...state, current }));
  //   console.log("setFiber", fiber);
  // };

  // triggerLiveRender = createTriggerRender((fiber) => {
  //   clearStep();
  //   rerender(frame.current, fiber);
  // });

  // return provide(FrameContext, frame, provide(MountContext, context, children));
  // return provide(MountContext, context, children);
  return provide(
    MountContext,
    context,
    <Step>
      <FiberRoot>
        <Step>
          <WipRoot sharedContext={sharedContext} />
        </Step>
      </FiberRoot>
    </Step>
  );
};

const createTriggerRender = (task) => (fiber) => {
  console.log("-----");
  console.log("trigger", fiber);
  task(fiber);
};

// setTimeout(() => {
//   triggerLiveRender();
// }, 2000);

// setInterval(() => {
//   triggerLiveRender();
// }, 2000);
