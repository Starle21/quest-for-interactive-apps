import { memo, useResource } from "@use-gpu/live";
import {
  appendChildToContainer,
  removeChild,
  commitHostTextUpdate,
  commitHostNodeUpdate,
  commitCanvasNodeUpdate,
} from "./renderer";
import { useMountContext } from "./render";

export const Commit = ({ finishedTree }) => {
  console.warn("Commit");
  const { wipRoot } = finishedTree;
  console.log("finishedTree", wipRoot);
  const { pingViz } = useMountContext();
  pingViz({ fiber: wipRoot, text: "commit" });

  const tree = useResource(() => {
    return traverseAndCommitEffects(wipRoot);
  }, [wipRoot]);

  return null;
};

function traverseAndCommitEffects(finishedTree) {
  let commitChild = finishedTree.child;
  let parent;
  let next;
  // depth first recursion on linked list
  while (commitChild !== null) {
    next = commitEffect(commitChild);
    if (next !== null) {
      commitChild = next;
    } else {
      parent = commitChild.return;
      commitChild = null;
      do {
        if (parent.sibling !== null) {
          commitChild = parent.sibling;
          break;
        } else {
          parent = parent.return;
        }
      } while (parent !== null);
    }
  }
  finishedTree.alternate.childUpdate = false;
  finishedTree.childUpdate = false;
  console.log("commit reached back the top");
}

function commitEffect(effect) {
  if (effect.flag === "DELETECHILD" || effect.flag === "DELETEANDUPDATE") {
    console.error("DELETE", effect);
    effect.deletions.forEach((child) => {
      if (child.type === "component") {
        // relying on fce component having one direct host component child
        return commitDelete(
          child.child.accessor,
          effect.accessor,
          child.child.type,
          child.child.props
        );
      }
      commitDelete(child.accessor, effect.accessor, child.type, child.props);
    });
    effect.deletions = null;
    effect.flag = effect.flag === "DELETEANDUPDATE" ? "UPDATE" : null;
  }
  if (effect.flag === "CREATE") {
    console.error("CREATE", effect);
    const topAccessor = searchForHostParentAccessor(effect);
    const node = findAccessor(effect);
    commitPlacement(node, topAccessor);
    effect.flag = null;
  }
  if (effect.flag === "UPDATE") {
    console.error("UPDATE", effect);
    commitUpdate(effect);
    effect.flag = null;
  }
  effect.childUpdate = false;
  if (effect.alternate) effect.alternate.childUpdate = false;
  let child = effect.child;
  if (child !== null) {
    return child;
  } else {
    return effect.sibling;
  }
}

function commitPlacement(child, parent) {
  appendChildToContainer(parent, child);
}

function commitDelete(child, parent, childType, childProps) {
  removeChild(parent, child, childType, childProps);
}

function commitUpdate(effect) {
  switch (effect.type) {
    case "htmlNode":
    case "svgNode": {
      commitHostNodeUpdate(
        effect.type,
        effect.accessor,
        effect.props,
        effect.alternate.props
      );
      return;
    }
    case "textNode": {
      commitHostTextUpdate(effect.accessor, effect.props);
      return;
    }
    case "canvasNode": {
      commitCanvasNodeUpdate(
        effect.return.accessor,
        effect.props,
        effect.alternate.props
      );
    }
  }
}

function searchForHostParentAccessor(effect) {
  const parent = effect.return;
  const parentAccessor = parent.accessor;

  if (parent.type === "root") {
    return parentAccessor.accessor;
  }

  if (!parentAccessor) {
    return searchForHostParentAccessor(parent);
  }
  return parentAccessor;
}

function findAccessor(effect) {
  console.log("effect", effect);

  if (effect.accessor) {
    return effect.accessor;
  }
  if (effect.type === "canvasNode") {
    return effect;
  }
  // assumes that component effect has only one direct child
  let childEffect = effect.child.accessor;
  if (!childEffect) {
    return findAccessor(effect.child);
  } else {
    return childEffect;
  }
}
