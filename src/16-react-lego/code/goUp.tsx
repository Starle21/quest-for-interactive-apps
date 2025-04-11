import { useFiber, useResource, yeet } from "@use-gpu/live";
import {
  createHostNode,
  createHostTextNode,
  appendChildToContainer,
  shouldNotMarkForCommitUpdate,
} from "./renderer";
import { useMountContext } from "./render";
import { useCurrentStateContext } from "./fiberRoot";

export const GoUp = ({ wip }) => {
  const { id } = useFiber();
  console.warn("GoUp", id);
  console.log(wip.id, wip);
  const { pingViz } = useMountContext();
  const currentState = useCurrentStateContext();
  const { current } = currentState;
  console.log("currentState", current.wipRoot);

  console.log("GoUp calculate");
  goUp(wip);
  // const nextCompleted = useResource(() => {
  //   console.log("GoUp calculate");
  //   return goUp(wip);
  // }, [wip]);
  console.log("currentState", current.wipRoot);

  // pingViz({ fiber: wip, accessor: wip.accessor, text: "goUp" });

  return yeet(id);
};

function goUp(completedWork) {
  let current = completedWork.alternate;
  let returnFiber = completedWork.return;

  switch (completedWork.type) {
    case "root": {
      console.log("goUp completed", completedWork);
      break;
    }
    case "component": {
      // noop
      break;
    }
    case "htmlNode":
    case "svgNode": {
      if (current !== null && completedWork.accessor != null) {
        console.log("props old new", current.props, completedWork.props);
        console.log("equal", current.props === completedWork.props);
        if (shouldNotMarkForCommitUpdate(current.props, completedWork.props)) {
          break;
        }
        markUpdate(completedWork);
      } else {
        let node = createHostNode(
          completedWork.type,
          completedWork.domType,
          completedWork.props
        );
        completedWork.accessor = node;
        appendAllChildren(completedWork);
      }
      break;
    }
    case "textNode": {
      if (current !== null && completedWork.accessor != null) {
        if (current.props === completedWork.props) {
          break;
        }
        markUpdate(completedWork);
      } else {
        let node = createHostTextNode(completedWork.props);
        completedWork.accessor = node;
      }
      break;
    }
  }

  const siblingFiber = completedWork.sibling;
  if (siblingFiber !== null) {
    return { go: "down", fiber: siblingFiber };
  }

  return { go: "up", fiber: returnFiber };
}

function markUpdate(fiber) {
  fiber.flag = fiber.flag === "DELETECHILD" ? "DELETEANDUPDATE" : "UPDATE";
}

function appendAllChildren(completedWork) {
  let toAppend = completedWork.child;
  while (toAppend !== null) {
    if (
      toAppend.type === "htmlNode" ||
      toAppend.type === "textNode" ||
      toAppend.type === "svgNode"
    ) {
      appendChildToContainer(completedWork.accessor, toAppend.accessor);
    } else if (toAppend.type === "component" && toAppend.child !== null) {
      toAppend = toAppend.child;
      continue;
    }
    if (toAppend === completedWork) {
      return;
    }
    while (toAppend.sibling === null) {
      if (toAppend.return === null || toAppend.return === completedWork) {
        return;
      }
      toAppend = toAppend.return;
    }
    toAppend = toAppend.sibling;
  }
}
