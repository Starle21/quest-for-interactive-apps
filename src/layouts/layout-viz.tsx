import React, { useState, cloneElement } from "react";

import { styled as _styled } from "@stitches/react";
const styled: any = _styled;

import { navigations } from "../navigation/navigate";
import { NavigationBar } from "../navigation/navigation-bar";
import { NavigationExpanded } from "../navigation/navigation-expanded";

import { Title } from "../shared/title";
import { SectionsNavigation } from "../shared/sections-navigation";
import { Background } from "../shared/background";
import { WindowHeader } from "../shared/window-header";
import { WindowContent } from "../shared/window-content";
import { PlayAnimationButton } from "../shared/playAnimationButton";
import { Timeline } from "../shared/timeline";
import { BackgroundExpanded } from "../shared/background-expanded";
import { Label } from "../shared/label";
import { WindowContentExpanded } from "../shared/window-content-expanded";

import "../shared/viz.css";
import { Overflow } from "@use-gpu/layout";

export const VizLayout = ({
  route,
  linkTo,
  timelineSteps,
  textSection,
  browserViz,
  resourcesViz,
  lines,
  windowTitle,
  windowAddress,
  backgroundColor,
  showRender,
  showRAF,
  showLoop,
  showFeatures = false,
  sharedVizData,
  active,
  highlight,
  highlightColor,
}) => {
  const {
    pageNumber,
    isSubsection,
    currentPath,
    currentTitle,
    currentSubsections,
    previousSectionNumber,
    previousSectionPath,
    nextSectionNumber,
    nextSectionPath,
  } = navigations(route);
  console.log("pageNumber", pageNumber);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isText, setIsText] = useState(false);

  console.log("sharedVizData", sharedVizData);
  const extendedBrowserViz = cloneElement(browserViz, {
    ...browserViz.props,
    isText,
    pageNumber,
    active,
    highlight,
    highlightColor,
  });

  const extendedResourcesViz = cloneElement(resourcesViz, {
    ...resourcesViz.props,
    highlight,
    highlightColor,
  });

  return (
    <Layout>
      <div
        style={{
          // background: "#fff",
          background: "#eeeeee",
          border: "1pt solid black",
        }}
      >
        <NavigationBar
          expandNavigation={setIsExpanded}
          expandText={setIsText}
          pageNumber={pageNumber}
          sections={currentSubsections}
          isSection={isSubsection}
          nextSectionNumber={nextSectionNumber}
          nextSectionPath={nextSectionPath}
          previousSectionNumber={previousSectionNumber}
          previousSectionPath={previousSectionPath}
          linkTo={linkTo}
        />
      </div>
      {/* visualization */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "25rem 1fr",
          gridTemplateRows: "2.25rem 1fr min-content",
        }}
      >
        {isExpanded && (
          <div
            style={{
              // background: "teal",
              gridArea: "1 / 1 / 4 / 2",
              justifySelf: "stretch",
              zIndex: 300,
              background: "#eeeeee",
              borderRight: "1pt solid black",
            }}
          >
            <NavigationExpanded linkTo={linkTo} currentRoute={currentPath} />
          </div>
        )}

        {/* title section */}
        <div
          style={{
            gridArea: "1 / 1 / 2 / 3",
            fontWeight: "bold",
            borderRight: `${isText ? "1pt solid black" : ""}`,
            // borderBottom: `${isText ? "1pt solid black" : ""}`,
            borderBottom: `${"1pt solid black"}`,
          }}
        >
          <Title
            isText={isText}
            linkTo={linkTo}
            path={"/index.html"}
            sectionTitle={currentTitle}
          />
        </div>

        {/* text section */}
        {((pageNumber === "16" && isText) || pageNumber !== "16") && (
          <div
            style={{
              gridArea: "2 / 1 / 3 / 2",
              paddingLeft: "1rem",
              borderRight: "1pt solid black",
              overflow: "hidden",
              zIndex: "100",
              background: "#d3d2d2",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div
                style={{
                  overflow: "auto",
                }}
                className="scrollbar"
              >
                <div
                  style={{
                    width: "34ch",
                    textAlign: "left",
                    fontSize: "0.9rem",
                    fontFamily: "Nunito",
                  }}
                >
                  {textSection}
                </div>
              </div>
              {/* <SectionsNavigation
                previousSectionNumber={previousSectionNumber}
                previousSectionPath={() => linkTo(previousSectionPath)}
                nextSectionNumber={nextSectionNumber}
                nextSectionPath={() => linkTo(nextSectionPath)}
              /> */}
            </div>
          </div>
        )}

        {/* viz section */}
        <div
          style={{
            gridArea: `${
              pageNumber !== "16" ? "2 / 2 / 3 / 3" : "2 / 1 / 3 / 3"
            }`,
          }}
        >
          <div
            style={{
              // width: "100%",
              // height: "100%",
              padding: "1rem",
            }}
          >
            <div
              style={{
                // width: "100%",
                // height: "100%",
                position: "relative",
              }}
            >
              {pageNumber !== "16" && (
                <Background
                  color={backgroundColor}
                  showRender={showRender}
                  showRAF={showRAF}
                  showLoop={showLoop}
                  highlight={highlight}
                  highlightColor={highlightColor}
                />
              )}
              {pageNumber === "16" && (
                <BackgroundExpanded
                  color={backgroundColor}
                  showRender={showRender}
                  showRAF={showRAF}
                  showLoop={showLoop}
                />
              )}

              {/* dynamic content for viz */}
              {extendedResourcesViz}
              {extendedBrowserViz}

              {/* window section */}
              <WindowHeader
                title={windowTitle}
                address={windowAddress}
                isExpanded={pageNumber === "16"}
              />
              {pageNumber === "16" && <WindowContentExpanded />}
              {pageNumber !== "16" && <WindowContent isExpanded={!isText} />}

              {/* browser features */}
              {showFeatures && (
                <div
                  style={{
                    position: "absolute",
                    top: "40.5rem",
                    left: `${pageNumber !== "16" ? "61.7rem" : "90.1rem"}`,
                    width: `${pageNumber === "16" ? "23rem" : "22.6rem"}`,
                    height: "7.8rem",
                    fontSize: "0.7rem",
                    // background: "#c9bd97",
                    fontFamily: "Oxanium",

                    border: "1pt solid black",
                    background: "#b3b3b3",
                    display: "flex",
                  }}
                >
                  <Label text={"browser web apis"} left />
                  <div style={{ margin: "1.9rem 1rem", lineHeight: "0.9rem" }}>
                    <div>event</div>
                    <div>window</div>
                    <div>fetch</div>
                    <div>audio</div>
                    <div>more..</div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "60%",
                      height: "100%",
                      marginLeft: "auto",
                      background: "#e6e6e6",
                    }}
                  >
                    <Label text={"console"} subtitle />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* lines to animate over the whole viz */}
        {parseInt(pageNumber) <= 2 && (
          <div
            style={{
              gridArea: "2 / 2 / 3 / 3",
              minWidth: 0,
              zIndex: 100,
              pointerEvents: "none",
            }}
          >
            {lines}
          </div>
        )}

        {/* timeline section */}
        <div
          style={{
            gridArea: "3 / 1 / 4 / 3",
            borderTop: "1pt solid black",
          }}
        >
          <div style={{ display: "flex", margin: "0.1rem" }}>
            <PlayAnimationButton
              context={sharedVizData}
              pageNumber={pageNumber}
            />
            <Timeline pageNumber={pageNumber} timelineSteps={timelineSteps} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Layout = styled("div", {
  // minWidth: "16.25rem",
  width: "100vw",
  height: "100vh",
  background: "#d3d2d2",
  display: "flex",
  overflow: "hidden",

  "--highlight-color": "#22b573",

  "& a": {
    color: "black",

    "&:hover": {
      "--highlight-color": "#b57522",
      fontWeight: "700",
    },
  },

  "& button": {
    "&:hover": {
      "--highlight-color": "#b57522",
    },
  },
});
