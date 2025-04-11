import React from "react";
import { Code } from "./code";

export const HTMLSection = ({ html }) => {
  return (
    <div
      style={{
        height: "100%",
        padding: "0.1rem",
        // background: "#bb8e7d",
      }}
    >
      <div
        style={{
          height: "100%",
          // borderRadius: "0.2rem",
          margin: 0,
        }}
      >
        <Code language={"html"}>{html}</Code>
      </div>
    </div>
  );
};
