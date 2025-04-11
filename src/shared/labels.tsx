import React from "react";

export const SectionLabel = ({ text, highlight }) => {
  return (
    <>
      <div>.................................</div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          fontFamily: "Oxanium",
          fontWeight: "400",
          textTransform: "uppercase",
          lineHeight: "0.8rem",
          color: `${highlight === "JS" ? "white" : "black"}`,
        }}
      >
        <p style={{ margin: "1rem 0", fontSize: "0.7rem" }}>{text}</p>
      </div>
    </>
  );
};

export const TitleLabel = ({ title }) => {
  return (
    <div
      style={{
        background: "#1e6068",
        color: "white",
        width: "6rem",
        height: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.2rem",
        marginTop: "0.5rem",
        zIndex: "100",
        position: "relative",
        fontFamily: "Menlo",
      }}
    >
      {title}
    </div>
  );
};

export const Fields = ({ children, left, right }) => {
  return (
    <div
      style={{
        border: "1pt solid gray",
        fontSize: "0.7rem",
        padding: "0.4rem",
        borderRadius: "0.2rem",
        display: "flex",
        flexDirection: "column",
        transform: `translateY(-0.5rem) ${left ? "translateX(3rem)" : ""} ${
          right ? "translateX(-3rem)" : ""
        }`,
        width: "10rem",
        fontFamily: "Menlo",
      }}
    >
      {children}
    </div>
  );
};
