import { hookGlobals } from "./fiber"
import { triggerLiveRender } from "./render"

export function useState(initial) {
  let newHook;
  let newState;
  let previousHookArray = hookGlobals.currentlyProcessedFiber.alternate?.hook;
  let previousHook = hookGlobals.currentlyProcessedFiber.alternate?.hook[hookGlobals.pointer];

  // if first hook for current fiber
  if (previousHookArray == null && hookGlobals.wipHookArray === null) {
    const newArray = [];
    hookGlobals.currentlyProcessedFiber.hook = hookGlobals.wipHookArray = newArray;
  } else if (hookGlobals.wipHookArray === null && previousHookArray !== null) {
    hookGlobals.wipHookArray = previousHookArray;
    hookGlobals.currentlyProcessedFiber.hook = previousHookArray;
  }
  // if no hook in previous pass
  if (previousHook == null) {
    newState = typeof initial === "function" ? initial() : initial;
    newHook = { state: initial, queued: { pending: false, value: null } };
    hookGlobals.wipHookArray[hookGlobals.pointer] = newHook;
  } else {
    // update hook - take from queue, keep the queue
    newHook = { state: previousHook.state, queued: previousHook.queued };
    if (previousHook.queued.pending === true) {
      let newState = previousHook.queued.value;
      newState =
        typeof newState === "function"
          ? newState(previousHook.state)
          : newState;
      newHook.state = newState;
      previousHook.queued.pending = false;
      previousHook.queued.value = null;
    }
    hookGlobals.wipHookArray[hookGlobals.pointer] = newHook;
  }

  const state = hookGlobals.currentlyProcessedFiber.hook[hookGlobals.pointer].state;

  const createSetState = (fiber, pointer, queued) => (newState) => {
    console.error("set new value", newState);
    queued.pending = true;
    queued.value = newState;
    markUpdateFromFiberToRoot(fiber);

    // TODO: how to dispatch update so live rerenders?
    // render();
    triggerLiveRender(fiber);
  };
  const setState = createSetState(
    hookGlobals.currentlyProcessedFiber,
    hookGlobals.pointer,
    newHook.queued
  );

  hookGlobals.pointer++;
  return [state, setState];
}

function markUpdateFromFiberToRoot(sourceFiber) {
  sourceFiber.update = true;
  let alternate = sourceFiber.alternate;
  if (alternate !== null) {
    alternate.update = true;
  }
  parent = sourceFiber.return;
  alternate = parent.alternate;
  do {
    parent.childUpdate = true;
    if (alternate !== null) {
      alternate.childUpdate = true;
    }
    parent = parent.return;
  } while (parent !== null);
}