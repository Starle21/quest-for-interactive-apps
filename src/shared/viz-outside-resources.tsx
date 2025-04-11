import React from "react";

export const VizOutsideResources = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "3rem",
        left: "2rem",
        width: "14rem",
        height: "13rem",
        background: "#d3d2d2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.9rem",
        fontSize: "0.7rem",
        fontWeight: "700",
        fontFamily: "Oxanium",
      }}
    >
      <div
        style={{
          // background: "#998675",
          width: "12rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1pt solid black",
        }}
      >
        <p
          style={{
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          network / file system
        </p>
      </div>
      <div
        style={{
          // background: "#998675",
          width: "12rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1pt solid black",
        }}
      >
        <p
          style={{
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          operating system
        </p>
      </div>
    </div>
  );
};
