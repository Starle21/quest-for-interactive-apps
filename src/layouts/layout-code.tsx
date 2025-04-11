import React, { useState } from "react";

export const LayoutCode = ({ htmlSection, cssSection }) => {
  return (
    <div
      id="viz"
      style={{
        position: "absolute",
        top: "19.1rem",
        left: "1.7rem",
        width: "59.5rem",
        height: "29.5rem",
        // background: "#e6e6e6",
        display: "grid",
        gridTemplateColumns: "2rem 3fr 2rem 0.7rem 0.8fr",
        gridTemplateRows: "2fr 1fr",
        gap: "0.25rem 0",
      }}
    >
      {/* HTML section */}
      <div
        style={{
          gridArea: "1 / 2 / 2 / 3",
          overflow: "hidden",
          // background: "#76d3a3",
        }}
      >
        {htmlSection}
      </div>

      <div style={{ gridArea: "1 / 3 / 2 / 4", background: "#758e81" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              writingMode: "sideways-lr",
            }}
          >
            HTML PARSER
          </p>
        </div>
      </div>

      {/* DOM */}
      <div style={{ gridArea: "1 / 5 / 2 / 6", background: "#758e81" }}>
        <p>DOM</p>
      </div>

      {/* CSS section */}
      <div style={{ gridArea: "2 / 2 / 3 / 3", overflow: "hidden" }}>
        {cssSection}
      </div>

      <div style={{ gridArea: "2 / 3 / 3 / 4", background: "#758e81" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              writingMode: "sideways-lr",
            }}
          >
            CSS PARSER
          </p>
        </div>
      </div>
      <div style={{ gridArea: "2 / 5 / 3 / 6", background: "#758e81" }}>
        <p>CSSOM</p>
      </div>
    </div>
  );
};

// #6f9682
