import React, {
  memo,
  useResource,
  gather,
  yeet,
  fence,
  Yeet,
  multiGather,
  useRef,
  useOne,
  useMemo,
  useCallback,
  useFiber,
} from "@use-gpu/live";
import { Step } from "../step/step";
import { GoUp } from "./goUp";
import { useMountContext } from "./render";
import { useCurrentStateContext } from "./fiberRoot";

export const hookGlobals = {
  currentlyProcessedFiber: null,
  wipHookArray: null,
  pointer: 0,
};

// mount
// before - {fiberRoot:{}, currentRoot:{}, wipRoot: {..., child:null}}

// wipRoot fiber
// update: {wipRoot: {..., child: {}}}
// reverse: {wipRoot:{..., child:null}}

// if there is hook - component fiber
// update: {wip:{ child:{}, hook: []}}
// after - {fiberRoot:{}, currentRoot:{}, wipRoot: {..., child:{}} }

export const Fiber = memo(({ wip }) => {
  console.warn("goDown", wip.id, wip.type, wip.domType);
  const fiber = useFiber();
  console.warn("Live fiber", fiber.id);
  const { pingViz } = useMountContext();
  const currentState = useCurrentStateContext();
  const { current } = currentState;
  console.log("currentState", current.wipRoot);

  const nextWipRef = useRef(undefined);
  const nextWip = useResource(() => {
    console.log("call goDown");
    let wipBefore = { ...wip };
    console.log("wip before", wipBefore);
    const newNextWip = goDown(wip);
    console.log("wip after", wip);
    // console.log("update", diff(wipBefore, wip));
    console.log("next wip equals?", nextWipRef.current === newNextWip);
    if (nextWipRef.current === newNextWip) {
      console.error("BAIL OUT");
    }
    nextWipRef.current = newNextWip;
    return newNextWip;
  }, [wip]);
  console.log("currentState", current.wipRoot);
  if (wip.type === "root") {
    pingViz({ fiber: wip.host, text: `fiberRoot` });
  }
  pingViz({ fiber: wip, text: `${wip.type} ${wip.domType}` });

  //   let siblingArray = [];
  //   let sibling = nextWip;
  //   while (sibling) {
  //     siblingArray.push(sibling);
  //     sibling = sibling.sibling;
  //   }
  //   console.log("siblingArray", siblingArray);

  const fiberUp = (yeeted) => {
    console.warn("Fiber Resume", wip.type, yeeted);
    if (yeeted.length === 0) return null;
    console.warn("after fiber goUp", wip.type, wip.domType, yeeted);

    return (
      <Step>
        <GoUp wip={wip} />
      </Step>
    );
  };
  // yeet([...yeeted, id]),

  if (nextWip === null) {
    console.log("child null");
    pingViz({ point: fiber, text: `${wip.domType}` });
    return fence(yeet(fiber.id), fiberUp);
  }
  if (nextWip.sibling === null) {
    console.log("sibling none, child one");

    return fence(
      <Step>
        <Fiber wip={nextWip} />
      </Step>,

      fiberUp
    );
  } else {
    console.log("child array");
    pingViz({ point: fiber, text: `${wip.domType}` });
    return fence(
      <Step>
        <SubTree next={nextWip.sibling}>
          <Fiber wip={nextWip} />
        </SubTree>
      </Step>,

      fiberUp
    );
  }
}, "Fiber");

const SubTree = ({ children, next }) => {
  return gather(children, (yeeted) => {
    console.warn("Subtree", next, yeeted);
    if (yeeted.length === 0) return null;

    if (next !== null) {
      return (
        <Step>
          <SubTree next={next.sibling}>
            <Fiber wip={next} />
          </SubTree>
        </Step>
      );
    } else {
      console.log("finished tree");
      return yeet("end");
    }
  });
};

function goDown(wip) {
  //   console.warn("wip", wip);
  const current = wip.alternate;
  // diff fiber
  if (current !== null) {
    // passed in props that match
    const oldProps = current.props;
    const newProps = wip.props;
    console.log("equal props?", oldProps === newProps);

    if (newProps === oldProps) {
      // if there is no update on this fiber
      // no recalculation
      if (current.update === false) {
        // check if there are updates scheduled for children
        if (wip.childUpdate === false) {
          // bail from the whole subtree
          console.log("bail out from begin for the whole subtree");
          let child = wip.child;
          while (child !== null) {
            child.return = wip;
            child = child.sibling;
          }
          return wip.child;
        } else {
          // copy over current pointers into new wip child fiber
          // child has scheduled updates, go to it
          const clonedChild = cloneFiber(current.child, wip);

          wip.child = clonedChild;
          console.log("child fiber needs to be recalculated", wip.child);
          return wip.child;
        }
      }
      console.log("this fiber needs to be recalculated");
      current.update = false;
    }
  }
  // reset update
  wip.update = false;

  let childEffect;
  switch (wip.type) {
    case "root": {
      if (wip.childEffect === null) {
        wip.child = null;
        return null;
      }
      childEffect = wip.childEffect(null);
      if (childEffect instanceof Array) {
        childEffect = childEffect.filter((effect) => effect);
      }

      break;
    }
    case "htmlNode":
    case "svgNode": {
      if (wip.props.children === null) {
        wip.child = null;
        return null;
      }
      if (wip.props.children instanceof Array) {
        childEffect = wip.props.children.filter((effect) => effect);
      } else {
        childEffect = wip.props.children;
      }
      break;
    }
    case "canvasNode": {
      wip.child = null;
      return null;
    }
    case "textNode": {
      wip.child = null;
      return null;
    }
    case "component": {
      hookGlobals.currentlyProcessedFiber = wip;
      hookGlobals.pointer = 0;
      hookGlobals.wipHookArray = null;
      wip.hook = null;
      const props = wip.props;

      childEffect = wip.function(props);

      hookGlobals.currentlyProcessedFiber = null;
      hookGlobals.wipHookArray = null;

      if (childEffect === null) {
        wip.child = null;
        return null;
      }
      if (childEffect instanceof Array) {
        childEffect = childEffect.filter((effect) => effect);
      }

      break;
    }
  }

  console.error("childEffect", childEffect);

  // reconcile child effect with the previous version
  // old child fiber exists
  if (current === null) {
    // no CREATE flags when it is just a child of subroot
    wip.child = reconcileChildFibers(childEffect, null, wip, false);
  } else {
    // place CREATE flags on subroot fibers
    wip.child = reconcileChildFibers(childEffect, current.child, wip, true);
  }
  return wip.child;
}

function reconcileChildFibers(newEffect, oldFiber, returnFiber, subroot) {
  if (newEffect instanceof Array) {
    return reconcileChildArray(oldFiber, newEffect, returnFiber, subroot);
  } else {
    return reconcileSingleChild(oldFiber, newEffect, returnFiber, subroot);
  }
}

function reconcileSingleChild(currentFiber, childEffect, returnFiber, subroot) {
  console.log("reconcile single", childEffect);
  const oldFiber = currentFiber;
  if (oldFiber !== null) {
    if (
      oldFiber.type === childEffect.type &&
      oldFiber.domType === childEffect.domType
    ) {
      // delete remaining children - check for currentFiber.sibling
      markChildrenToDelete(oldFiber.sibling, returnFiber);
      const updatedFiber = updateFiber(currentFiber, childEffect, returnFiber);
      markChildPlacement(updatedFiber, subroot);

      return updatedFiber;
    } else {
      // didn't match, so delete and create below
      markChildrenToDelete(oldFiber, returnFiber);
    }
  }
  // create new fiber, there is no old fiber
  const newFiber = createNewFiber(childEffect, returnFiber);
  markChildPlacement(newFiber, subroot);
  return newFiber;
}

function reconcileChildArray(currentFiber, childEffect, returnFiber, subroot) {
  console.log("reconcile array", childEffect);
  let oldFiber = currentFiber;
  let newChildFiber = null;
  let previousNewChildFiber = null;
  let newFirstChildFiber = null;
  let idx = 0;

  while (oldFiber !== null && idx < childEffect.length) {
    // update - compare
    if (
      oldFiber.type === childEffect[idx].type &&
      oldFiber.domType === childEffect[idx].domType
    ) {
      // reuse existing fiber fields
      newChildFiber = updateFiber(oldFiber, childEffect[idx], returnFiber);
      oldFiber.alternate = newChildFiber;
      markChildPlacement(newChildFiber, subroot);
    } else {
      // or delete and create
      markChildToDelete(oldFiber, returnFiber);
      newChildFiber = createNewFiber(childEffect[idx], returnFiber);
      oldFiber.alternate = newChildFiber;
      markChildPlacement(newChildFiber, subroot);
    }
    if (newFirstChildFiber === null) {
      newFirstChildFiber = newChildFiber;
    } else {
      previousNewChildFiber.sibling = newChildFiber;
    }
    previousNewChildFiber = newChildFiber;
    oldFiber = oldFiber.sibling;
    idx++;
  }
  // delete rest of old fibers
  if (oldFiber !== null && idx === childEffect.length) {
    markChildrenToDelete(oldFiber, returnFiber);
    return newFirstChildFiber;
  }
  // create new fibers
  if (oldFiber === null) {
    for (; idx < childEffect.length; idx++) {
      newChildFiber = createNewFiber(childEffect[idx], returnFiber);
      markChildPlacement(newChildFiber, subroot);
      if (newFirstChildFiber === null) {
        newFirstChildFiber = newChildFiber;
      } else {
        previousNewChildFiber.sibling = newChildFiber;
      }
      previousNewChildFiber = newChildFiber;
    }
  }
  return newFirstChildFiber;
}

function markChildPlacement(newFiber, subroot) {
  if (subroot && newFiber.alternate === null) {
    newFiber.flag = "CREATE";
  }
}

function markChildrenToDelete(childToDelete, parent) {
  while (childToDelete) {
    markChildToDelete(childToDelete, parent);
    childToDelete = childToDelete.sibling;
  }
}
function markChildToDelete(childToDelete, parent) {
  const deletions = parent.deletions;
  if (deletions == null) {
    parent.deletions = [childToDelete];
    parent.flag = "DELETECHILD";
  } else {
    deletions.push(childToDelete);
  }
}

function createNewFiber(effect, parentFiber) {
  return {
    ...effect,
    alternate: null,
    child: null,
    sibling: null,
    return: parentFiber,
    accessor: null,
    deletions: null,
    update: false,
    childUpdate: false,
    hook: null,
    host: parentFiber.host,
    id: parentFiber.host.makeId(),
  };
}

function updateFiber(currentFiber, childEffect, returnFiber) {
  let wip = currentFiber.alternate;
  if (wip === null) {
    wip = {
      ...childEffect,
      type: currentFiber.type,
      domType: currentFiber.domType,
      accessor: currentFiber.accessor,
      alternate: currentFiber,
      child: currentFiber.child,
      sibling: null,
      return: returnFiber,
      hook: currentFiber.hook,
      deletions: currentFiber.deletions,
      update: currentFiber.update,
      childUpdate: currentFiber.childUpdate,
      id: currentFiber.id,
      host: currentFiber.host,
    };
    currentFiber.alternate = wip;
  } else {
    wip.props = childEffect.props;
    wip.childEffect = childEffect.childEffect;
    wip.type = currentFiber.type;
    wip.domType = currentFiber.domType;
    wip.accessor = currentFiber.accessor;
    wip.child = currentFiber.child;
    wip.sibling = null;
    wip.hook = currentFiber.hook;
    wip.deletions = currentFiber.deletions;
    wip.update = currentFiber.update;
    wip.childUpdate = currentFiber.childUpdate;
    wip.return = returnFiber;
    wip.id = currentFiber.id;
    wip.host = currentFiber.host;
  }
  return wip;
}

function cloneFiber(fiber, returnFiber) {
  let child = fiber;
  let clonedFirstChildFiber = null;
  let clonedChildFiber = null;
  let clonedPreviousChildFiber = null;
  while (child !== null) {
    clonedChildFiber = updateFiber(child, child, returnFiber);
    if (clonedFirstChildFiber === null) {
      clonedFirstChildFiber = clonedChildFiber;
    } else {
      clonedPreviousChildFiber.sibling = clonedChildFiber;
    }
    clonedPreviousChildFiber = clonedChildFiber;
    child = child.sibling;
  }
  return clonedFirstChildFiber;
}
