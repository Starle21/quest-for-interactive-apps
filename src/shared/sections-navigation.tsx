import React from "react";

export const SectionsNavigation = ({
  previousSectionPath,
  previousSectionNumber,
  nextSectionNumber,
  nextSectionPath,
}) => {
  return (
    <div
      style={{
        marginRight: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "3rem",
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
          {...previousSectionPath()}
        >
          <svg
            height={"50%"}
            width={"0.5rem"}
            style={{
              zIndex: 100,
            }}
          >
            <path d="M 3 0 v 170" stroke="#22b573" strokeWidth={7} />
          </svg>
          <p style={{ margin: "0 0.3rem", fontWeight: "bold" }}>
            {previousSectionNumber}
          </p>
          <svg
            height={"0.5rem"}
            width={"4rem"}
            style={{
              zIndex: 100,
            }}
          >
            <path d="M 3 0 h 50" stroke="black" strokeWidth={7} />
          </svg>
        </a>
      </div>
      <div
        style={{
          height: "3rem",
        }}
      >
        <a
          style={{
            height: "100%",
            color: "black",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            textDecoration: "none",
          }}
          {...nextSectionPath()}
        >
          <svg
            height={"0.5rem"}
            width={"4rem"}
            style={{
              zIndex: 100,
            }}
          >
            <path d="M 3 0 h 50" stroke="black" strokeWidth={7} />
          </svg>
          <p
            style={{
              margin: "0 0.3rem",
              fontWeight: "bold",
            }}
          >
            {nextSectionNumber}
          </p>
          <svg
            height={"50%"}
            width={"0.5rem"}
            style={{
              zIndex: 100,
            }}
          >
            <path d="M 3 0 v 170" stroke="#22b573" strokeWidth={7} />
          </svg>
        </a>
      </div>
    </div>
  );
};
