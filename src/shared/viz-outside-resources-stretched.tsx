import React from "react";

export const VizOutsideResourcesStretched = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "1.3rem",
        left: "20.2rem",
        width: "18.2rem",
        height: "6.2rem",
        background: "#d3d2d2",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25rem",
        fontSize: "0.8rem",
        fontFamily: "Oxanium",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 2,
          flexDirection: "column",
          height: "100%",
          gap: "0.25rem",
        }}
      >
        <div
          style={{
            // width: "13.5rem",
            // height: "3.6rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1pt solid black",
            width: "100%",
          }}
        >
          <p
            style={{
              margin: 0,
              textTransform: "uppercase",

              fontWeight: "700",
              fontSize: "0.7rem",
            }}
          >
            network / file system
          </p>
        </div>
        <div
          style={{
            background: "#e6e6e6",
            // width: "13.5rem",
            // height: "3.6rem",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            border: "1pt solid black",
            flexGrow: 2,
            width: "100%",
            position: "relative",
          }}
        >
          <p
            style={{
              margin: "0.5rem 0 0 0.5rem",
              textTransform: "uppercase",
              fontWeight: "bold",
              position: "absolute",
              left: "0",
              right: "0",
            }}
          >
            <div style={{ fontSize: "0.7rem", lineHeight: "0.7rem" }}>
              user's interaction
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                textTransform: "lowercase",
                fontWeight: "400",
                lineHeight: "0.7rem",
              }}
            >
              through peripherals
            </div>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1pt solid black",
          height: "100%",
        }}
      >
        <p
          style={{
            margin: 0,
            textTransform: "uppercase",
            writingMode: "sideways-lr",

            display: "flex",
            flexDirection: "column",

            fontWeight: "700",
            fontSize: "0.7rem",
            alignItems: "center",

            lineHeight: "0.9rem",

            padding: "1rem 0.7rem",
          }}
        >
          <div>operating</div>
          <div>system</div>
        </p>
      </div>
    </div>
  );
};
