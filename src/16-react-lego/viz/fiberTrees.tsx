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
import { useVizStateContext, useVizStateTracker } from "./vizStateProvider";
import { Row } from "../../../layout";
import { Fields, SectionLabel, TitleLabel } from "../../shared/labels";

const FiberRoot = ({ node }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TitleLabel title={"fiberRoot"} />
      <Fields>
        <div>type: {node.fiber.type}</div>
        <div>accessor: {node.fiber["accessor"]["nodeName"]}</div>
        <div>current: ◉</div>
      </Fields>
    </div>
  );
};

export const FiberTrees = () => {
  console.log("FiberRoot Viz");
  const { fibers } = useVizStateContext();
  const node = fibers.get("fiberRoot");

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
  console.log("fiber", node.fiber);

  return (
    <div style={{ margin: "0 1rem", position: "relative" }}>
      <SectionLabel text={"fiber trees"} />
      <div
        style={{
          fontSize: "0.8rem",
          fontFamily: "Menlo",
          margin: "0 1rem",
        }}
      >
        <FiberRoot node={node} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            // justifyItems: "center",
          }}
        >
          <HostRoot
            // tree={toggle ? "currentRoot" : "wipRoot"}
            tree={toggle ? "currentRoot" : "wipRoot"}
            node={
              toggle ? node?.fiber?.current : node?.fiber?.current?.alternate
            }
            left={true}
          />
          <HostRoot
            // tree={toggle ? "wipRoot" : "currentRoot"}
            tree={toggle ? "wipRoot" : "currentRoot"}
            node={
              toggle ? node?.fiber?.current?.alternate : node?.fiber?.current
            }
            right={true}
          />
        </div>
      </div>
    </div>
  );
};

const HostRoot = ({ tree, node, left, right }) => {
  console.warn("Host root", tree);
  // const { fibers } = useVizStateContext();
  // const node = fibers.get(tree);
  console.log("node", node);

  // useVizStateTracker(tree, node);

  if (!node) return null;

  const child = node.child ? (
    <Fiber fiber={node.child} right={right} left={left} />
  ) : null;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: `${right && "flex-end"}`,
        }}
      >
        <div>{tree}</div>
        <TitleLabel title={"hostRoot"} />
        <Fields left={left} right={right}>
          <div>type: {node.type}</div>
          <div>props: {node.props ?? "null"}</div>
          <div>child: {node.child ? "◉" : "null"}</div>
        </Fields>
      </div>
      {child}
    </div>
  );
};

const Fiber = memo(({ fiber, right, left }) => {
  console.log("Fiber");
  const { fibers } = useVizStateContext();
  const node = fibers.get(fiber.id);
  console.warn("node", node);

  useVizStateTracker(fiber.id, node);

  if (!node) return null;
  const child = node.fiber.child ? (
    <Fiber fiber={node.fiber.child} left={left} right={right} />
  ) : null;
  const sibling = node.fiber.sibling ? (
    <Fiber fiber={node.fiber.sibling} left={left} right={right} />
  ) : null;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: `${right && "flex-end"}`,
          // width: "10rem",
          marginLeft: "2rem",
        }}
      >
        <TitleLabel
          title={
            node.fiber.type === "component"
              ? node.fiber.fName
              : node.fiber.domType
          }
        />
        <Fields left={left} right={right}>
          <div>type: {node.fiber.type}</div>
          <div>accessor: {node.fiber.accessor ? "◉" : "null"}</div>
          {/* <div>props: {node.props ?? "null"}</div>
          <div>child: {node.child ? "◉" : "null"}</div> */}
        </Fields>
      </div>
      {child}
      {sibling}
    </>
  );
});
