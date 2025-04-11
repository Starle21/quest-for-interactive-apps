import React from "react";
import { Code } from "../../shared/code";

export const HtmlSection = ({ code }) => {
  return (
    <div
      id="viz"
      style={{
        position: "absolute",
        top: "22.5rem",
        left: "4.5rem",
        width: "auto",
        height: "auto",
        background: "#e6e6e6",
        border: "1pt solid black",
      }}
    >
      <Code language={"html"}>{code}</Code>
    </div>
  );
};
