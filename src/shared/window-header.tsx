import React from "react";

export const WindowHeader = ({ title, address, isExpanded }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0.3rem",
        left: `${isExpanded ? "97.5rem" : "68.8rem"}`,
        width: "13.6rem",
        height: "4.7rem",
        // background: "#7c7171",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <h3
        style={{
          fontSize: "1.2rem",
          marginTop: "1.3rem",
          marginBottom: "0.5rem",
          textTransform: "uppercase",
          fontFamily: "Oxanium",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          width: "90%",
          height: "1.4rem",
          padding: "0 1rem",
          // background: "#b3a2a2",
          borderRadius: "0.2rem",
          display: "flex",
          alignItems: "center",
          fontFamily: "Oxanium",
          border: "1pt solid black",
        }}
      >
        <p style={{ margin: 0, paddingLeft: "0.5rem", fontSize: "0.7rem" }}>
          {address}
        </p>
      </div>
    </div>
  );
};
