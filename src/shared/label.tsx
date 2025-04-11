import React from "react";

export const Label = ({ text, left, subtitle }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: `${left ? null : 0}`,
        left: `${left ? 0 : null}`,
        fontFamily: "Oxanium",
        fontWeight: `${subtitle ? "500" : "700"}`,
        textTransform: "uppercase",
        fontSize: "0.7rem",
      }}
    >
      <p style={{ margin: `0.5rem 0.6rem 0 ${left ? "0.6rem" : "0"}` }}>
        {text}
      </p>
    </div>
  );
};
