import React, {
  LC,
  memo,
  useResource,
  useContext,
  makeContext,
  useOne,
  provide,
  fence,
  useMemo,
  useRef,
  useFiber,
} from "@use-gpu/live";
import { useMountContext } from "./render";
import { diff, useCursor, useUpdateState } from "@use-gpu/state/live";

export const CurrentStateContext = makeContext(
  {
    current: {
      fiberRoot: {},
      currentRoot: {},
      wipRoot: {},
      wip: {},
    },
  },
  "CurrentStateContext"
);
export const useCurrentStateContext = () => useContext(CurrentStateContext);

// timetravel
// {
//   past: Array<T>;
//   present: T;
//   future: Array<T>;
// }

const INITIAL_STATE = {
  fiberRoot: null,
  currentRoot: null,
  wipRoot: null,
  wip: null,
};

// step 2
export const FiberRoot: LC = ({ children }) => {
  console.warn("FiberRoot");
  const { domRoot, pingViz } = useMountContext();
  const fiber = useFiber();
  console.warn(fiber.id);

  // global state lives here
  // shared over the whole tree

  const currentState = useRef(INITIAL_STATE);
  const { current } = currentState;
  const {
    current: { fiberRoot, currentRoot },
  } = currentState;
  console.log("currentState", current);

  // state update
  // before "reduced" - start of fiber - {fiberRoot: null, currentRoot: null}
  // update 1 - {fiberRoot: {...}, currentRoot: {...}}
  // reverse 1 - {fiberRoot: null, currentRoot: null}
  // after "reduced" - end of fiber - {fiberRoot: {...}, currentRoot: {...}}

  // on goBack
  //   - change state - only update 1 is taken and reduced to current state
  //   - current state is kept in fiber root, current root, wip root, wip
  //   - first reset current state - place into initial - which is null everywhere
  //   - then apply the reduced state
  //   - updating state forward effectively happens in useResource functions
  //   - on goBack - reset state to null - to "before", run useResource again
  // on goForward

  // run only on domRoot change
  // useResource saves into shared state
  // calls the functions only on relevant state change
  useResource(
    (dispose) => {
      if (fiberRoot === null && currentRoot === null) {
        console.log("Create new fiber and current root from scratch");
        const fiberRootLocal = createFiberRoot();
        const currentRootLocal = createCurrentRoot(fiberRootLocal);
        connectFiberAndHostRoot(domRoot, fiberRootLocal, currentRootLocal);
        markCurrentRootForUpdate(currentRootLocal);

        pingViz({ fiber: fiberRootLocal, text: "fiberRoot" });
        pingViz({ point: fiber, text: "fiberRoot" });

        // save new fibers into global state
        current.fiberRoot = fiberRootLocal;
        current.currentRoot = currentRootLocal;

        console.log("currentState");
        console.log(currentState.current);

        // dispose of state in currentState which is shared globally
        // dispose(() => {
        //   current.fiberRoot = null;
        //   current.currentRoot = null;
        // });

        // return { fiberRoot: fiberRootLocal, currentRoot: currentRootLocal };
      } else {
        console.log("Rerender current root!");
        console.log("state", current);

        // currentRoot was changed imperatively on last pass in finish pass
        // make sure that state from finishPass is applied
        // and not rerun again from null
        // return {
        //   fiberRoot: currentState.current.fiberRoot,
        //   currentRoot: currentState.current.currentRoot,
        // };
      }
    },
    [domRoot, currentState?.current?.currentRoot]
  );

  // useMemo(() => {
  //   console.log("currentState", currentState.current);
  //   console.log("diff", diff(roots.fiberRoot, currentState.current.fiberRoot));
  //   console.log(
  //     "update",
  //     diff(currentState.current.fiberRoot, roots.fiberRoot)
  //   );

  //   currentState.current.fiberRoot = roots.fiberRoot;
  //   currentState.current.currentRoot = roots.currentRoot;
  // }, [roots]);

  // console.log("context", currentState);
  // console.log("currentRoot", context.current.currentRoot.child);

  // call viz with fiber - place it in queue
  // pingViz({ fiber: context.current.currentRoot, text: "currentRoot" });

  return provide(CurrentStateContext, currentState, children);
};

function createFiberRoot() {
  let id = 0;
  return {
    accessor: null,
    current: null,
    type: "root",
    id: "fiberRoot",
    makeId: () => ++id,
  };
}

function createCurrentRoot(host) {
  return {
    accessor: null,
    alternate: null,
    childEffect: null,
    child: null,
    props: null,
    return: null,
    sibling: null,
    type: "root",
    update: false,
    childUpdate: false,
    host,
    id: "currentRoot",
  };
}

function connectFiberAndHostRoot(hostAccessor, fiberRoot, currentRoot) {
  fiberRoot.accessor = hostAccessor;
  currentRoot.accessor = fiberRoot;
  fiberRoot.current = currentRoot;
}

function markCurrentRootForUpdate(currentRoot) {
  currentRoot.update = true;
}
