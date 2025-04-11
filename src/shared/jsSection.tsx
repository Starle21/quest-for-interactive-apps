import React from "react";
import { Code } from "./code";

export const JSSection = ({ js, highlight }) => {
  return (
    <div
      style={{
        height: "100%",
        // padding: "0.1rem",
        // background: "#bb8e7d",
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: "0.2rem",
          margin: 0,
        }}
      >
        <Code language={"js"} highlight={highlight}>
          {js}
        </Code>
      </div>
    </div>
  );
};
