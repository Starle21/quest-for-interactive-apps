import React from "react";
import { makeSections, makeFilteredSections } from "../routes";
import { styled } from "@stitches/react";

export const NavigationExpanded = ({ linkTo, currentRoute }) => {
  console.log("currentRoute", currentRoute);
  //   const parentPath = currentRoute.match(/^\/(\d\d.+)\//);
  //   console.log("parentPath", parentPath[1]);

  // const sections = makeSections();
  const sections = makeFilteredSections();
  console.log("SECTIONS", sections);

  return (
    <NavigationStyles>
      <h3>
        <a {...linkTo("/")}>
          <div
            style={{ display: "flex", alignItems: "center", height: "5rem" }}
          >
            <div
              style={{
                height: "6.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "1.5rem",
              }}
            >
              <svg height={"80%"} viewBox="0 0 3 20">
                <path
                  d="M 1.5 0 v 20"
                  stroke={"var(--highlight-color)"}
                  strokeWidth={1.5}
                />
              </svg>
            </div>
            <div
              style={{
                marginBottom: 0,
                display: "flex",
                flexDirection: "column",
                width: "10rem",
              }}
            >
              <div
                style={{
                  fontFamily: "PP Editorial New",
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  fontWeight: "800",
                }}
              >
                Quest
              </div>
              <div
                style={{
                  // transform: "translateY(-2rem) translateX(8.5rem)",
                  transform: "translateY(-0.4rem) translateX(1.9rem)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                    fontWeight: "400",
                  }}
                >
                  for interactive apps
                </div>
                <div
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "1rem",
                    lineHeight: "1rem",
                    fontWeight: "400",
                  }}
                >
                  in the browser
                </div>
              </div>
            </div>
          </div>
        </a>
      </h3>
      <div style={{ margin: "2.5rem 0 0.3rem 0" }}>Contents</div>
      <ul
        style={{
          width: "20rem",
          listStyle: "none",
          margin: "0 0 0 1.5rem",
          padding: 0,
        }}
      >
        {/* {sections.slice(0, -1).map(({ path, title, subsections }) => { */}
        {sections.map(({ path, title, subsections }) => {
          const pageNumber = path.match(/^\/(\d\d)/);
          const filteredTitle = title.match(/-\s(.+)/)[1];
          let current = false;
          if (path.includes(currentRoute)) current = true;

          return (
            <a {...linkTo(path)}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",

                  lineHeight: `${current ? "1.7rem" : "1.7rem"}`,
                  margin: `${current ? "0.7rem 0" : "0.1rem 0"}`,
                }}
              >
                <div
                  style={{
                    width: "0.6rem",
                    height: `${current ? "5rem" : "1.5rem"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <svg
                    height={"100%"}
                    style={{
                      zIndex: 100,
                    }}
                    viewBox={`${current ? "0 0 3 30" : "0 0 3 15"}`}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={`${current ? "M 1.5 0 v 30" : "M 1.5 0 v 15"}`}
                      stroke={"var(--highlight-color)"}
                      strokeWidth={current ? 2 : 4}
                    />
                  </svg>
                </div>

                <div
                  style={{
                    width: "2.5rem",
                    fontSize: `${current ? "1.5rem" : "0.9rem"}`,
                  }}
                >
                  {pageNumber[1]}
                </div>
                <div
                  style={{
                    width: "17rem",
                    fontSize: `${current ? "1.5rem" : "0.9rem"}`,
                  }}
                >
                  {filteredTitle}
                </div>

                {/* {subsections && (
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {subsections.map(({ title, path }) => {
                    let highlight = false;
                    // if (
                    //   currentRoute.includes("viz") ||
                    //   currentRoute.includes("intro")
                    // )
                    //   highlight = true;
                    return (
                      <a
                        {...linkTo(path)}
                        style={{
                          background: `${highlight ? "orange" : "black"}`,
                        }}
                      >
                        {title}
                      </a>
                    );
                  })}
                </div>
              )} */}
              </li>
            </a>
          );
        })}
      </ul>
    </NavigationStyles>
  );
};

const NavigationStyles = styled("div", {
  "--highlight-color": "#22b573",
  fontFamily: "Oxanium",
  margin: "1rem",

  "& a": {
    color: "black",

    "&:hover": {
      "--highlight-color": "#b57522",
      fontWeight: "700",
    },
  },
});
