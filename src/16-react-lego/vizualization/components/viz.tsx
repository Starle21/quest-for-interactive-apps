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
import { Center, Column, Row, Split } from "../../../../layout";
import { VizStateProvider } from "./vizStateProvider";
import { FiberRoot } from "./fiberTrees";
import { AccessorRoot } from "./accessorTree";
import { DomRoot } from "./dom";
import { JsxTreeRoot } from "./jsxTree";
import { Navigation } from "./navigation";

export const Viz: React.FC = ({ sharedContext, children }) => {
  console.log("Viz React");

  return (
    <VizStateProvider sharedContext={sharedContext}>
      <Split>
        <NodeTree />
        <Navigation sharedContext={sharedContext.current} />
      </Split>
    </VizStateProvider>
  );
};

const NodeTree = () => {
  // trigger all tree roots - dom, component, fiber - current / wip, accessor
  return (
    <Row>
      {/* <JsxTreeRoot /> */}
      <FiberRoot />
      {/* <AccessorRoot /> */}
      {/* <DomRoot /> */}
    </Row>
  );
};

// Code --> pingViz( fiber ), schedule setTimeout --> saves fiber into VizState map, queue fiber.id
// finish going through Code
// setTimeout --> flush, calls batchedUpdates --> calls associated handlers on fibers --> setState --> enques react render
// go through react tree from the root

// FIRST PASS
// outside React - render --> start from root
// Code --> pingViz( fiber ) - not set up yet
// finish going through Code
// start going through Viz - call render on HTML - schedules render pass
// go through Inspector - call render on HTML - schedules render pass
// setTimeout --> flush, calls batchedUpdates --> calls associated handlers on fibers --> setState --> enques react render
// go through react tree from the root

// Viz top component in React
//  Node - initially null, but subscribe its set state handlers
//  - accessors - read fiber from context (initially null), subscribe with id of first accessor and set state fce, on ping --> place fiber into map --> schedule flush --> process queue of placed fibers --> React render
//  - fiber root
//  - current tree
//  - wip tree
//  - jsx components
//  - dom

// First pass
// Node tree
// - { fibers } = useVizStateContext();
// - read all tree roots - dom, component, fiber - current / wip, accessor
// -
// memo Node (fibers, fiber)
// - root fiber - initially null, subscribe
// -

// state input form Live

// types of nodes
// COMPONENT NODE - jsx

// FIBER NODE
// fiber root
// current tree root - current tree
// wip tree root - wip tree

// DOM ACCESSOR
// host root passed in

// DOM NODE
// - visible
// - not visible

// pass through Code
// queue the passed through fiber
// when HTML, run react - the static part - render - queues microtask to run
// run rest of Live code
// right after - microtask queue
// run queued fiber to vizualize - the dynamic part

// passes through goDown (pingFiber - saves)
// if it is HTML, it runs react right away

// ----------------
// id - create increasing id for every new fiber
