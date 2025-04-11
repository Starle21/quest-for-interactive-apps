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
import { Center, Column, Row } from "../../../../layout";
import { useVizStateContext, useVizStateTracker } from "./vizStateProvider";

export const FiberRoot = () => {
  console.log("FiberRoot Viz");
  const { fibers } = useVizStateContext();
  const node = fibers.get("fiberRoot");
  console.log("fiber", node);

  // subscribe to vizstatecontext
  // state to force to change
  useVizStateTracker("fiberRoot", node);

  // console.log("alternate", node?.fiber?.current?.alternate);

  const toggle = useMemo(() => {
    let toggle = true;
    if (!node || node?.fiber?.current?.alternate == null) return true;
    if (toggle) {
      toggle = false;
      return false;
    } else {
      toggle = true;
      return true;
    }
  }, [node?.fiber?.current]);
  console.log("TOGGLE", toggle);

  console.log("fiber current", node?.fiber?.current);
  console.log("fiber alternate", node?.fiber?.current?.alternate);
  if (!node) return null;

  return (
    <div>
      <Row>
        <Center>fiberRoot</Center>
        <Center>accessorRoot</Center>
      </Row>
      <Row>
        {/* pass in node.version */}
        {/* pass in current and alternate node */}
        <HostRoot
          // tree={toggle ? "currentRoot" : "wipRoot"}
          tree={toggle ? "currentRoot" : "wipRoot"}
          node={toggle ? node?.fiber?.current : node?.fiber?.current?.alternate}
        />
        <HostRoot
          // tree={toggle ? "wipRoot" : "currentRoot"}
          tree={toggle ? "wipRoot" : "currentRoot"}
          node={toggle ? node?.fiber?.current?.alternate : node?.fiber?.current}
        />
      </Row>
    </div>
  );
};

const HostRoot = ({ tree, node }) => {
  console.warn("Host root", tree);
  // const { fibers } = useVizStateContext();
  // const node = fibers.get(tree);
  console.log("node", node);

  // useVizStateTracker(tree, node);

  if (!node) return null;

  const child = node.child ? <Fiber fiber={node.child} /> : <div>{"null"}</div>;

  return (
    <Column>
      <div>{tree}</div>
      {child}
    </Column>
  );
};

const Fiber = memo(({ fiber }) => {
  console.log("Fiber");
  const { fibers } = useVizStateContext();
  const node = fibers.get(fiber.id);
  // console.error("node", node);

  useVizStateTracker(fiber.id, node);

  if (!node) return null;
  const child = node.fiber.child ? <Fiber fiber={node.fiber.child} /> : null;
  const sibling = node.fiber.sibling ? (
    <Fiber fiber={node.fiber.sibling} />
  ) : null;
  const accessor = node.accessor ? <div>{node.accessor.nodeName}</div> : null;

  return (
    <>
      <Row>
        <div>{node.text}</div>
        {accessor}
      </Row>
      {child}
      {sibling}
    </>
  );
});
