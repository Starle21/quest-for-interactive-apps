import React, {
  useResource,
  memo,
  useMemo,
  useState,
  useOne,
  useFiber,
  useCapture,
  detach,
  use,
  tagFunction,
  wrap,
  yeet,
  useRef,
  useNoRef,
  useCallback,
  SUSPEND,
  useNoCapture,
} from "@use-gpu/live";
import { useStepContext, useStepApiContext, SteppingCapture } from "./Stepping";

export const Step = ({ children }) => {
  const { getVisibleState } = useStepApiContext();
  const fiber = useFiber();
  const show = getVisibleState(fiber.id);
  console.warn("STEP", children);
  console.log("fiber", fiber);

  // const { state } = useStepContext();
  // console.log("step", state);

  // console.log("id", id);

  // save child into global state
  // read child from global state
  const lastValue = useRef<any>({ pending: null });
  // const memoValue = useOne(() => {
  //   return (lastValue.current = children);
  // }, children);

  // const savedChildren = useMemo(() => {
  //   return children;
  // }, []);

  // const ref = useRef(null);
  // return children;
  // if (show && id <= 15) {
  if (show) {
    console.log("showed", fiber.id);
    useNoCapture(SteppingCapture);
    return useOne(() => {
      console.log("update lastValue", children);
      console.log("old", lastValue.current);
      console.log("new", children);
      return (lastValue.current.wip = lastValue.current.pending);
    }, children);
    // return lastValue.current;
  } else {
    console.log("hidden", fiber.id);
    console.log("lastValue", lastValue.current);
    console.log("equal?", lastValue.current === children);
    lastValue.current.pending = children;
    useCapture(SteppingCapture, { id: fiber.id, fiber, step: 1 });
    if (lastValue.current) {
      return lastValue.current;
    } else {
      return null;
    }
    // return lastValue.current ? lastValue.current : null;
  }

  // second and further passes
  // if show false --> show lastValue which should be the same as last time --> bail out
  // if show true --> show children and save children to last value

  // const Run = useCallback(
  //   tagFunction(() => {
  //     return children;
  //   }, "Run")
  // );

  // const child = useCallback(() => {
  //   return children;
  // }, children);

  // return detach(use(child), (render, fiber) => {
  //   console.error("DETACHED");
  //   console.error("show", show);
  //   console.error("fiber", fiber);
  //   // ref.current = render;
  //   if (show) {
  //     render();
  //   }
  // });

  // return useMemo(() => {
  //   if (show) {
  //     if (typeof children === "function") {
  //       return children(...Object.values(other));
  //     } else {
  //       return children;
  //     }
  //   } else return null;
  // }, [show]);
};
