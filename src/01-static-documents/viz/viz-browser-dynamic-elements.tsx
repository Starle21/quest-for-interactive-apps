import React from "react";
import { HtmlSection } from "./htmlSection";
import { Internals } from "./internals";

export const VizBrowserDynamicElements = ({ code }) => {
  return (
    <>
      <HtmlSection code={code} />
      <Internals />
    </>
  );
};
