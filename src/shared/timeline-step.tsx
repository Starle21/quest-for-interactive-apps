import React from "react";

export const TimelineStep = ({ inChain, step, passed, text }) => {
  return (
    <div
      style={{
        width: "5.2rem",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        marginLeft: inChain ? "" : "2rem",
        fontFamily: "Oxanium",
      }}
    >
      {inChain ? (
        <svg
          height={"0.5rem"}
          width={"100%"}
          style={{
            position: "absolute",
            top: "1.1rem",
            left: 0,
            zIndex: "10",
            transform: "translateX(-90%)",
          }}
        >
          <path d="M 0 0 h 100" stroke="black" strokeWidth={4} />
        </svg>
      ) : null}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "min-content",
          justifyItems: "center",
          alignItems: "center",
          zIndex: "100",
        }}
      >
        <p
          style={{
            gridArea: "1/1/1/1",
            zIndex: 100,
            fontWeight: "bold",
            color: "white",
            fontSize: "0.7rem",
          }}
        >
          {step}
        </p>
        <svg
          width={"1.7rem"}
          height={"1.7rem"}
          viewBox="-5 -5 10 10"
          style={{ gridArea: "1/1/1/1" }}
        >
          <circle
            cx={0}
            cy={0}
            r={4}
            fill={passed ? "red" : "#c1a4a6"}
          ></circle>
        </svg>
      </div>
      <p
        style={{
          width: "7ch",
          transform: "translateY(0.6rem)",
          lineHeight: "0.8rem",
          fontSize: "0.8rem",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export const TimelineStep16 = ({ step, text }) => {
  return (
    <div
      style={{
        width: "5.2rem",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        fontFamily: "Oxanium",
        // marginLeft: inChain ? "" : "2rem",
      }}
    >
      {/* {inChain ? (
        <svg
          height={"0.5rem"}
          width={"100%"}
          style={{
            position: "absolute",
            top: "1.1rem",
            left: 0,
            zIndex: "10",
            transform: "translateX(-90%)",
          }}
        >
          <path d="M 0 0 h 100" stroke="black" strokeWidth={4} />
        </svg>
      ) : null} */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "min-content",
          justifyItems: "center",
          alignItems: "center",
          zIndex: "100",
        }}
      >
        <p
          style={{
            gridArea: "1/1/1/1",
            zIndex: 100,
            fontWeight: "bold",
            color: "white",
            fontSize: "0.7rem",
          }}
        >
          {step}
        </p>
        <svg
          width={"1.7rem"}
          height={"1.7rem"}
          viewBox="-5 -5 10 10"
          style={{ gridArea: "1/1/1/1" }}
        >
          <circle cx={0} cy={0} r={4} fill={"red"}></circle>
        </svg>
      </div>
      <p
        style={{
          width: "7ch",
          transform: "translateY(0.5rem)",
          lineHeight: "0.8rem",
          fontSize: "0.8rem",
        }}
      >
        {text}
      </p>
    </div>
  );
};
