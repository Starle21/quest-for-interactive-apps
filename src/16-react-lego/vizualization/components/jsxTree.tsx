import { useVizStateContext, useVizStateTracker } from "./vizStateProvider";
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

export const JsxTreeRoot = () => {
  console.log("JsxTreeRoot");
  const { effects } = useVizStateContext();
  const node = effects.get("effect");

  useVizStateTracker("effect", undefined);

  console.log("node", node);
  if (!node) return;

  console.log("effects", node.effect());

  return (
    <div>
      <div>jsxTree</div>
      <JsxElement effect={node.effect()} />
    </div>
  );
};

const JsxElement = ({ effect }) => {
  console.warn("element", effect);
  //   console.warn("element", effect.function);

  let childEffect = null;
  let childElement = null;
  let currentEffect = null;
  let effectFunction = null;
  let props = null;

  //   console.log("fce", effect.props);
  //   console.log("fce", effect.function());

  if (effect.type === "component") {
    currentEffect = (
      <>
        <div>
          {effect.type} {effect.name}
        </div>
        <div>{effect.fName}</div>
      </>
    );

    //   childEffect = effect.function();
    //   console.log("childEffect", childEffect);
  }

  //   if (child?.type === "component") {
  //     console.log("CALL", child.function(child.props));
  //     child = child.function(child.props);
  //     childElement = <JsxElement effect={child} />;
  //   }
  //   if (child instanceof Array) {
  //     console.log("map over array");
  //   }

  return (
    <div>
      {currentEffect}
      {/* {childElement} */}
    </div>
  );
};
