import React, { useState } from "react";
import { FiberTrees } from "../16-react-lego/viz/fiberTrees";
import {
  useVizStateContext,
  useVizStateTracker,
} from "../16-react-lego/viz/vizStateProvider";
import { Label } from "../shared/label";
import { Fields, SectionLabel, TitleLabel } from "../shared/labels";

const layoutActive = (active) => {
  switch (active) {
    case "JS":
      return "0.3fr 0.7fr 2rem 2rem";
    case "HTML":
      return "1rem 1rem 1fr 2rem";
    case "CSS":
      return "1rem 1rem 2rem 1fr";
    case "html&css": {
      return "1.1fr 1fr 1fr 1fr";
    }
    default:
      return "0.4fr 0.6fr 1fr 1fr";
  }
};

export const LayoutCodeFull = ({
  htmlSection,
  cssSection,
  jsSection,
  isText,
  pageNumber,
  a,
  highlight,
  highlightColor,
}) => {
  const [active, setActive] = useState(a);
  // const [active, setActive] = useState("JS");

  const { fibers } = useVizStateContext();
  const node = fibers.get("fiberRoot");
  useVizStateTracker("fiberRoot", node);

  const { js } = jsSection.props;

  return (
    <div
      id="viz"
      style={{
        position: "absolute",
        top: "8.6rem",
        left: "1.7rem",
        width: `${pageNumber !== "16" ? "59.5rem" : "88rem"}`,
        height: "39.7rem",
        // background: "#e6e6e6",
        display: "grid",
        gridTemplateColumns: `${
          pageNumber === "16" ? "2rem 3fr 2rem 0.6fr" : "2rem 2fr 2rem 0.6fr"
        }`,
        gridTemplateRows: `${layoutActive(active)}`,
        gap: "0.25rem",
        fontFamily: "Oxanium",
      }}
    >
      {/* buttons */}
      {js && (
        <div
          style={{
            gridArea: `${
              pageNumber === "16" ? "1 / 1 / 5 / 2" : "2 / 1 / 5 / 2"
            }`,
            justifySelf: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // width: "80%",
              // height: "100%",
              gap: "0.5rem",
              // alignItems: "center",
            }}
          >
            <button
              style={{
                writingMode: "sideways-lr",
                padding: "1.2rem 0.3rem",
                // background: "#cebd8d",

                // fontSize: "0.9rem",
                border: "1pt solid black",
                fontFamily: "Oxanium",
                fontWeight: "bold",
              }}
            >
              JS
            </button>
            <button
              style={{
                writingMode: "sideways-lr",
                padding: "1rem 0.2rem",
                // background: "#cebd8d",
                border: "1pt solid black",
                fontFamily: "Oxanium",
                fontWeight: "bold",
              }}
            >
              HTML
            </button>
            <button
              style={{
                writingMode: "sideways-lr",
                padding: "1rem 0.2rem",
                // background: "#cebd8d",
                border: "1pt solid black",
                fontFamily: "Oxanium",
                fontWeight: "bold",
              }}
            >
              CSS
            </button>
          </div>
        </div>
      )}

      {js && (
        <div
          style={{
            gridArea: "1 / 2 / 3 / 3",
            overflow: "hidden",
            // background: "#5e7267",
            display: "grid",
            gridTemplateColumns: `${
              pageNumber !== "16" ? "1.5fr 1fr" : "1fr 1fr"
            }`,
            // 0.1 0.3
            gridTemplateRows: "subgrid",
            gap: "0.25rem",
          }}
        >
          {active === "JS" || active === "" ? (
            <>
              <div
                style={{
                  gridArea: `${
                    pageNumber === "16" ? "1 / 1 / 3 / 2" : "2 / 1 / 3 / 2"
                  }`,
                  overflow: "hidden",
                  fontFamily: "Nunito",
                  position: "relative",
                  border: "1pt solid black",
                  background: `${
                    highlight === "JS" ? highlightColor : "white"
                  }`,
                }}
              >
                <div
                  style={{ color: `${highlight === "JS" ? "white" : "black"}` }}
                >
                  <Label text={"js"} />
                </div>
                {jsSection}
              </div>
              <div
                style={{
                  gridArea: `${
                    pageNumber === "16" ? "1 / 2 / 2 / 3" : "1 / 1 / 2 / 2"
                  }`,
                  overflow: "hidden",
                  // background: "#8b6262",
                }}
              >
                <div
                  style={{
                    width: `${pageNumber === "16" ? "40%" : "45%"}`,
                    border: "1pt solid black",
                    display: "flex",
                    flexDirection: "column-reverse",
                    height: "100%",
                    position: "relative",
                    background: `${
                      highlight === "JS" ? highlightColor : "white"
                    }`,
                    alignItems: "center",
                    paddingBottom: "0.5rem",
                    fontFamily: "Menlo",
                    fontSize: "0.8rem",
                    justifySelf: `${pageNumber === "16" ? "start" : "end"}`,
                    color: `${highlight === "JS" ? "white" : "black"}`,
                  }}
                >
                  <div>
                    <Label text={"callstack"} />
                  </div>
                  <div>global()</div>
                  <div style={{ lineHeight: "0.3rem" }}>-----------------</div>
                </div>
              </div>
              <div
                style={{
                  gridArea: "2 / 2 / 3 / 3",
                  overflow: "hidden",
                  // background: "#586385",
                  background: `${
                    highlight === "JS" ? highlightColor : "white"
                  }`,
                  border: "1pt solid black",
                  position: "relative",
                }}
              >
                <div
                  style={{ color: `${highlight === "JS" ? "white" : "black"}` }}
                >
                  <Label text={"js memory"} />
                </div>
                <div
                  style={{
                    overflow: "auto",
                    height: "100%",
                  }}
                  className="scrollbar"
                >
                  <BrowserApis highlight={highlight} />
                  <FiberTrees />
                </div>
              </div>
            </>
          ) : (
            "script.js"
          )}
        </div>
      )}

      {js && (
        <div
          style={{
            gridArea: "2 / 3 / 3 / 4",
            // background: "#4567af",
            // background: "white",
            border: "1pt solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              background: `${highlight === "JS" ? highlightColor : ""}`,
              color: `${highlight === "JS" ? "white" : "black"}`,
            }}
          >
            <p
              style={{
                margin: 0,
                writingMode: "sideways-lr",
                fontFamily: "Oxanium",
              }}
            >
              {active === "JS" || active === "" ? (
                <>
                  <span
                    style={{
                      fontFamily: "Oxanium",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      fontSize: "0.7rem",
                    }}
                  >
                    JS ENGINE
                  </span>
                  <span style={{ fontSize: "0.9rem" }}>
                    {" "}
                    - parser, interpreter, JIT compiler
                  </span>
                </>
              ) : (
                "J.E."
              )}
            </p>
          </div>
        </div>
      )}

      <div
        style={{
          gridArea: "2 / 2 / 5 / 5",
          display: "grid",
          gridTemplateColumns: "subgrid",
          gridTemplateRows: `${active === "JS" ? "subgrid" : "2fr 1fr"}`,
          // background: "salmon",
          gap: "0.25rem",
        }}
      >
        {/* HTML code */}
        <div
          style={{
            gridArea: `${active === "JS" ? "2 / 1 / 3 / 2" : "1 / 1 / 2 / 2"}`,
            overflow: "hidden",
            // background: "#76d3a3",
            background: "#fff",
            border: "1pt solid black",
            position: "relative",
          }}
        >
          <Label text={"html"} />
          {active === "HTML" || active === "" || active === "html&css" ? (
            htmlSection
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                height: "100%",
              }}
            >
              <div style={{ fontSize: "0.8rem", padding: "0.5rem" }}>
                index.html
              </div>
            </div>
          )}
        </div>

        {/* html parser */}
        <div
          style={{
            gridArea: `${active === "JS" ? "2 / 2 / 3 / 3" : "1 / 2 / 2 / 3"}`,
            // background: "#758e81",
            // background: "#fff",
            border: "1pt solid black",
            background: `${highlight === "pipeline" ? highlightColor : ""}`,
            color: `${highlight === "pipeline" ? "white" : "black"}`,
          }}
        >
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
                fontSize: "0.7rem",
                fontWeight: "700",
              }}
            >
              {active === "HTML" || active === "" || active === "html&css" ? (
                "HTML PARSER"
              ) : (
                <span
                  style={{
                    fontFamily: "Oxanium",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  H.P.
                </span>
              )}
            </p>
          </div>
        </div>

        {/* CSS parser */}
        <div
          style={{
            gridArea: `${active === "JS" ? "3 / 2 / 4 / 3" : "2 / 2 / 3 / 3"}`,
            // background: "#758e81",
            // background: "#fff",
            border: "1pt solid black",
            background: `${highlight === "pipeline" ? highlightColor : ""}`,
            color: `${highlight === "pipeline" ? "white" : "black"}`,
          }}
        >
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
                fontSize: "0.7rem",
                fontWeight: "700",
              }}
            >
              {active === "CSS" || active === "" || active === "html&css" ? (
                "CSS PARSER"
              ) : (
                <span
                  style={{
                    fontFamily: "Oxanium",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  C.P.
                </span>
              )}
            </p>
          </div>
        </div>

        {/* CSS code */}
        <div
          style={{
            gridArea: `${active === "JS" ? "3 / 1 / 4 / 2" : "2 / 1 / 3 / 2"}`,
            overflow: "hidden",
            // background: "#fff",
            border: "1pt solid black",
            position: "relative",
            background: `${highlight === "pipeline" ? highlightColor : "#fff"}`,
          }}
        >
          <div
            style={{ color: `${highlight === "pipeline" ? "white" : "black"}` }}
          >
            <Label text={"css"} />
          </div>
          {active === "CSS" || active === "" || active === "html&css" ? (
            cssSection
          ) : (
            <div style={{ fontSize: "0.8rem", padding: "0.5rem" }}>
              style.css
            </div>
          )}
        </div>

        {/* DOM */}
        <div
          style={{
            gridArea: `${active === "JS" ? "1 / 3 / 3 / 4" : "1 / 3 / 2 / 4"}`,
            // background: "#758e81",
            position: "relative",
            // border: "4pt solid rgb(117, 142, 129, 0.7)",
            border: "1pt solid black",
            // background: "#b3b3b3",

            fontSize: "0.8rem",
            fontFamily: "Menlo",
            overflow: "hidden",
            background: `${
              highlight === "pipeline" ? highlightColor : "#b3b3b3"
            }`,
          }}
        >
          <div
            style={{ color: `${highlight === "pipeline" ? "white" : "black"}` }}
          >
            <Label text={"dom"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              overflow: "auto",
              height: "100%",
            }}
            className="scrollbar"
          >
            <div style={{ margin: "0.5rem" }}>
              {pageNumber === "16" && <DOMTree />}
              {pageNumber !== "16" && <DOMNode el={"div"} />}
              <DOMRow el={"div"} sub={1} />
              <DOMRow el={"input"} sub={2} />
              <DOMRow el={"svg"} sub={2} />
            </div>
          </div>
        </div>

        {/* CSSOM */}
        <div
          style={{
            gridArea: `${active === "JS" ? "3 / 3 / 4 / 4" : "2 / 3 / 3 / 4"}`,
            // background: "#758e81",
            // background: "#b3b3b3",
            border: "1pt solid black",
            position: "relative",
            background: `${
              highlight === "pipeline" ? highlightColor : "#b3b3b3"
            }`,
          }}
        >
          <div
            style={{ color: `${highlight === "pipeline" ? "white" : "black"}` }}
          >
            <Label text={"cssom"} />
          </div>
        </div>
      </div>
    </div>
  );
};

// #6f9682

const DOMTree = () => {
  useVizStateTracker("domRoot", null);
  useVizStateTracker("fiberRoot", null);
  const { doms, fibers } = useVizStateContext();
  const fiberNode = fibers.get("fiberRoot");
  console.warn("DOMS", doms);

  const node = doms?.get("domRoot");
  console.dir(node);
  console.dir(node?.dom.node);

  if (node)
    return (
      <div style={{ margin: "0", position: "relative" }}>
        <DOMRoot
          node={node.dom.node}
          fields={node.dom.fields}
          fiberNode={fiberNode}
        />
      </div>
    );

  return null;
};

const DOMRow = ({ sub, el }) => {
  return (
    <div style={{ display: "flex" }}>
      <DOMConnection sub={sub} />
      <DOMNode el={el} />
    </div>
  );
};

const DOMRoot = ({ node, fields, fiberNode }) => {
  if (fiberNode) console.warn("fiberNode", fiberNode);
  return (
    <div>
      <div
        style={{
          background: "#e6e6e6",
          width: "4rem",
          height: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.2rem",
          marginTop: "0.5rem",
          zIndex: "100",
          position: "relative",
          textTransform: "lowercase",
        }}
      >
        {node.nodeName}
      </div>
      <div
        style={{
          border: "1pt solid gray",
          fontSize: "0.6rem",
          padding: "0.4rem",
          borderRadius: "0.2rem",
          display: "flex",
          flexDirection: "column",
          transform: "translateY(-0.5rem) translateX(1.4rem)",
          width: "6rem",
        }}
      >
        {fields.map((field) => {
          return (
            <div>
              {field}: {node[field]}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const DOMNode = ({ el }) => {
  return (
    <div>
      <div
        style={{
          background: "#e6e6e6",
          width: "4rem",
          height: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.2rem",
          marginTop: "0.5rem",
          zIndex: "100",
          position: "relative",
        }}
      >
        {el}
      </div>
      <div
        style={{
          border: "1pt solid gray",
          fontSize: "0.6rem",
          padding: "0.4rem",
          borderRadius: "0.2rem",
          display: "flex",
          flexDirection: "column",
          transform: "translateY(-0.5rem) translateX(1.4rem)",
          width: "6rem",
        }}
      >
        <div>value: ''</div>
        <div>onclick: f*</div>
      </div>
    </div>
  );
};

const DOMConnection = ({ sub }) => {
  return (
    <svg
      width={"2rem"}
      height={"1.2rem"}
      style={{ marginLeft: `${(sub - 1) * 2}rem` }}
    >
      <path d="M 15 0 v 17 h 17" stroke="black" strokeWidth={2} fill="none" />
    </svg>
  );
};

const BrowserApis = ({ highlight }) => {
  return (
    <div
      style={{
        margin: "1rem 1rem 0.5rem 1rem",
        position: "relative",
      }}
    >
      <SectionLabel
        highlight={highlight}
        text={"automatically accessible objects"}
      />
      <div style={{ marginTop: "1rem" }}>
        <TitleLabel title={"document"} />
        <Fields left={true} right={false}>
          <div>createElement: f*</div>
          <div>querySelector: f*</div>
          <div>body: f*</div>
          <div>----</div>
          <div>link to DOM: pointer</div>
        </Fields>
      </div>
    </div>
  );
};
