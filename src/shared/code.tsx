import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { styled as _styled } from "@stitches/react";
// TODO: TS nightly issue?
const styled: any = _styled;
// import "./viz.css";
import { Background } from "./background";

export const Code = ({ children, language, highlight }) => {
  return (
    <div className="Code" style={{ height: "100%" }}>
      <Highlight theme={themes.github} code={children} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <StyledBlock
            className="scrollbar"
            style={{
              color: `${
                highlight === "pipeline" || highlight === "JS"
                  ? "white"
                  : "black"
              }`,
            }}
          >
            <div style={{}}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  style={{ fontFamily: "Menlo" }}
                >
                  <span style={{ marginRight: "0.6rem" }}>{i + 1}</span>
                  {line.map((token, key) => {
                    const { children, className } = getTokenProps({
                      token,
                      key,
                    });
                    const [, tokenType] = className.split(" ");
                    return (
                      <span
                        key={key}
                        style={{
                          color: `${
                            highlight === "JS"
                              ? "white"
                              : `var(--token-color-${tokenType})`
                          }`,
                          fontStyle: `var(--token-style-${tokenType})`,
                          fontWeight: `var(--token-weight-${tokenType})`,
                        }}
                      >
                        {children}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
            {/* <div style={{ height: "30rem", width: "100%" }}></div> */}
          </StyledBlock>
        )}
      </Highlight>
    </div>
  );
};

const Line = styled("div", {
  background: "hsla(0, 0%, 100%, var(--bg-opacity, 0))",
  fontSize: "0.8rem",
});
const StyledBlock = styled("pre", {
  // background: "var(--code-background)",
  // border: "1pt solid black",
  color: "var(--code-text-color)",
  padding: "var(--space, 1rem)",
  // borderRadius: "0.5rem",
  margin: 0,
  height: "100%",
  overflow: "auto",
  fontfamily: "Menlo",
  fontSize: "0.7rem",
});

{
  /* <pre
  style={{
    margin: 0,
    fontSize: "12px",
    padding: "0.5rem",
  }}
>
  {code}
</pre>; */
}
