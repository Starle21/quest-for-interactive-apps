import React from "react";
import { LayoutCodeFull } from "../layouts/layout-code-full";
import { HTMLSection } from "./htmlSection";
import { CSSSection } from "./cssSection";
import { JSSection } from "./jsSection";
import { LayoutCode } from "../layouts/layout-code";

export const VizBrowserDynamicElements = ({
  html,
  css,
  js,
  isText,
  pageNumber,
  active,
  highlight,
  highlightColor,
}) => {
  const dynamicElementsData = {
    htmlSection: <HTMLSection html={html} />,
    cssSection: <CSSSection css={css} highlight={highlight} />,
    jsSection: <JSSection js={js} highlight={highlight} />,
    isText,
    pageNumber,
    a: active,
    highlight,
    highlightColor,
  };
  // if (js == null) return <LayoutCode {...dynamicElementsData} />;
  return <LayoutCodeFull {...dynamicElementsData} />;
};
