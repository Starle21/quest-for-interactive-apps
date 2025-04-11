import React, {
  memo,
  useResource,
  gather,
  makeReconciler,
  useState,
  useFiber,
  useRef,
} from "@use-gpu/live";
import { Step } from "../step/step";
import { useMountContext, usePerFrame } from "./render";
import { useCurrentStateContext } from "./fiberRoot";
import { Commit } from "./commit";
import { Fiber } from "./fiber";
import { discardState } from "@use-gpu/live/src/hooks";
import { revise, diff, patch } from "@use-gpu/state";

// step 3
export const WipRoot = ({ children, sharedContext }) => {
  console.warn("WipRoot");

  const { topEffect, pingViz, frame } = useMountContext();
  const currentState = useCurrentStateContext();
  const { current } = currentState;
  const fiber = useFiber();
  console.warn(fiber.id);

  // state update
  // before "reduced" - start of fiber - {fiberRoot: {...}, currentRoot: {...}, wipRoot: null}
  // update 2 - {wipRoot: {...}, currentRoot.alternate = wipRoot}
  // reverse 2 - {wipRoot: null, currentRoot.alternate = null}
  // after "reduced" - end of fiber - {fiberRoot: {...}, currentRoot: {...}, wipRoot: {...}}

  // goBack to fiberRoot
  // - clicking on button linked to id to fiberRoot and its step
  // - step change visible false
  // - figuring how much to reverse
  // - reversing update 2 and update 1

  // goBack to wipRoot
  // - change state - take update 1 and update 2 and reduce those

  const local = useRef();

  const wipRoot = useResource(
    (dispose) => {
      console.log("create new wipRoot");
      console.log("state", current);
      // console.log("before", currentState);
      local.current = {
        wipRoot: { ...current.wipRoot },
        currentRoot: { ...current.currentRoot },
      };
      // console.log("local before", local.current);
      const newWipRoot = createWipRoot(current.currentRoot, topEffect);
      current.wipRoot = newWipRoot;
      // console.log("after", current);
      // console.log("local after", local.current);
      // console.log("reverse", diff(current.wipRoot, local.current.wipRoot));
      // console.log(
      //   "reverse",
      //   diff(current.currentRoot, local.current.currentRoot)
      // );

      // const reverseCurrentRoot = patch(
      //   current.currentRoot,
      //   diff(current.currentRoot, local.current.currentRoot)
      // );
      // console.log("patch", reverseCurrentRoot);

      // dispose(() => {
      //   const reverseCurrentRoot = patch(
      //     current.currentRoot,
      //     diff(current.currentRoot, local.current.currentRoot)
      //   );
      //   const reverseWipRoot = patch(
      //     current.wipRoot,
      //     diff(current.wipRoot, local.current.wipRoot)
      //   );
      //   current.currentRoot = reverseCurrentRoot;
      //   current.wipRoot = reverseWipRoot;
      // });

      console.log("state", current);

      pingViz({ fiber: current.fiberRoot, text: "wipRoot" });
      pingViz({ point: fiber, text: "wipRoot" });

      return newWipRoot;
    },
    [current.currentRoot, topEffect, frame.current.pass]
  );

  return gather(
    <Step>
      <Fiber wip={wipRoot} />
    </Step>,
    (yeeted) => {
      console.warn("WipRoot Resume", yeeted);
      if (yeeted.length === 0) return null;
      console.log("ready for Commit", current.wipRoot);
      return (
        <Step>
          <Commit finishedTree={current} />
          <FinishPass
            wipRoot={current.wipRoot}
            fiberRoot={current.fiberRoot}
            roots={currentState}
            current={current}
            sharedContext={sharedContext}
          />
        </Step>
      );
    }
  );
};

function createWipRoot(currentRoot, childEffect) {
  let wipRoot = currentRoot.alternate;
  if (wipRoot === null) {
    console.log("no alternate, first mount pass");

    wipRoot = {
      ...currentRoot,
      alternate: currentRoot,
      childEffect,
      id: "wipRoot",
    };
    currentRoot.alternate = wipRoot;
  } else {
    console.log("wip root exists, second pass");
    wipRoot.accessor = currentRoot.accessor;
    wipRoot.childEffect = currentRoot.childEffect;
    wipRoot.child = currentRoot.child;
    wipRoot.props = currentRoot.props;
    wipRoot.return = null;
    wipRoot.sibling = null;
    wipRoot.type = currentRoot.type;
    wipRoot.update = currentRoot.update;
    wipRoot.childUpdate = currentRoot.childUpdate;
    wipRoot.host = currentRoot.host;
    wipRoot.id = "wipRoot";
  }
  return wipRoot;
}

const FinishPass = ({ wipRoot, fiberRoot, roots, current, sharedContext }) => {
  console.warn("FinishPass");
  const { pingViz, triggerReact } = useMountContext();

  current.wipRoot.id = "currentRoot";
  current.fiberRoot.current.id = "wipRoot";
  current.fiberRoot.current = current.wipRoot;
  current.currentRoot = current.wipRoot;

  // console.log("roots", roots);

  // roots.current = { ...roots.current, currentRoot: wipRoot };
  // pingViz({ fiber: fiberRoot.current, text: "FinishPass" });
  pingViz({ fiber: current.fiberRoot, text: "fiberRoot" });
  triggerReact("navigation");
  sharedContext.current.disable = true;

  const windowAccessor = document.querySelector("#info");
  console.log("windowAccessor", windowAccessor);
  windowAccessor?.remove();

  // ping fiberRoot,
  current.wipRoot = null;
  console.log("state", current);
  // wipRoot = null;
  console.log("DONE");
  return null;
};
