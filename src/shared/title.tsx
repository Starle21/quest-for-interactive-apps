import React from "react";

export const Title = ({ isText, linkTo, path, sectionTitle }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "1rem",
        height: "100%",
        fontFamily: "Oxanium",
      }}
    >
      <a
        style={{
          height: "100%",
          color: "black",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          textDecoration: "none",
        }}
        {...linkTo(path)}
      >
        <svg
          height={"50%"}
          width={"0.5rem"}
          style={{
            zIndex: 100,
          }}
        >
          <path
            d="M 3 0 v 170"
            stroke="var(--highlight-color)"
            strokeWidth={7}
          />
        </svg>
        <p style={{ marginLeft: "0.3rem" }}>
          Quest for Interactive Apps
          {/* {isText ? null : ` - ${sectionTitle}`} */}
        </p>
      </a>
    </div>
  );
};
