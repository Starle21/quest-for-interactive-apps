import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";

import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizOutsideResources } from "../shared/viz-outside-resources";
import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";

import { Text } from "../02-render-pipeline/text";
import { Client } from "../02-render-pipeline/client-app";
import markup1 from "!!raw-loader!../02-render-pipeline/client-code/index";
import style from "!!raw-loader!../02-render-pipeline/client-code/style.css";
import { Lines } from "../02-render-pipeline/viz/lines";

export const RenderPipeline = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  const html = markup1;
  const css = style;

  const vizData = {
    route,
    linkTo,
    timelineSteps: [],
    textSection: <Text />,
    browserViz: <VizBrowserDynamicElements html={html} css={css} />,
    resourcesViz: <VizOutsideResources />,
    lines: <Lines />,
    windowTitle: "Render Pipeline",
    windowAddress: "www.quest.fyi/render",
    // backgroundColor: "#b2b7b5",
    backgroundColor: "#ccc",
    showRender: true,
    showRAF: false,
    active: "html&css",
    highlight: "pipeline",
    // highlightColor: "#1e6068",
    // highlightColor: "#315c61ce",
    // highlightColor: "#275e64ce",
    highlightColor: "#41767a",
  };

  return [
    use(HTML, {
      container,
      children: <VizLayout {...vizData} />,
    }),
    use(Client, { html, css }),
  ];
};

{
  /* <Layout>
<div
  style={{
    background: "#fff",
    border: "1pt solid black",
  }}
>
  <NavigationBar
    expandNavigation={setIsExpanded}
    expandText={setIsText}
    pageNumber={pageNumber}
    sections={currentSubsections}
    isSection={isSubsection}
  />
</div>
visualization
<div
  style={{
    width: "100%",
    display: "grid",
    gridTemplateColumns: "28rem 1fr",
    gridTemplateRows: "2.5rem 1fr min-content",
  }}
>
  {isExpanded && (
    <div
      style={{
        background: "teal",
        gridArea: "1 / 1 / 4 / 2",
        justifySelf: "stretch",
        zIndex: 300,
      }}
    >
      <NavigationExpanded linkTo={linkTo} currentRoute={currentPath} />
    </div>
  )}
  title section
  <div
    style={{
      gridArea: "1 / 1 / 2 / 2",
      fontWeight: "bold",
      borderRight: `${isText ? "1pt solid black" : ""}`,
      borderBottom: `${isText ? "1pt solid black" : ""}`,
    }}
  >
    <Title
      isText={isText}
      linkTo={linkTo}
      path={"/"}
      sectionTitle={currentTitle}
    />
  </div>

  text section
  {isText && (
    <div
      style={{
        gridArea: "2 / 1 / 3 / 2",
        paddingLeft: "1rem",
        borderRight: "1pt solid black",
        overflow: "auto",
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
            width: "38ch",
            textAlign: "left",
            fontSize: "1rem",
          }}
        >
          {textSection()}
        </div>
        <SectionsNavigation
          previousSectionNumber={previousSectionNumber}
          previousSectionPath={() => linkTo(previousSectionPath)}
          nextSectionNumber={nextSectionNumber}
          nextSectionPath={() => linkTo(nextSectionPath)}
        />
      </div>
    </div>
  )}

  viz section
  <div
    style={{
      gridArea: `${isText ? "2 / 2 / 3 / 3" : "2 / 1 / 3 / 3"}`,
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
        <Background color={"#8f9b94"} />

        dynamic content for viz
        <VizOutsideResources />
        <VizBrowserDynamicElements code={code} />

        window section
        <WindowHeader
          title={"FIRST DOCUMENT"}
          address={"www.quest.fyi/first"}
        />
        <WindowContent />
      </div>
    </div>
  </div>

  lines to animate over the whole viz
  <div
    style={{
      gridArea: `${isText ? "2 / 2 / 3 / 3" : "2 / 1 / 3 / 3"}`,
      minWidth: 0,
      zIndex: 100,
    }}
  >
    <Lines />
  </div>

  timeline section
  <div
    style={{
      gridArea: "3 / 1 / 4 / 3",
      borderTop: "1pt solid black",
    }}
  >
    <div style={{ display: "flex", margin: "0.1rem" }}>
      <PlayAnimationButton />
      {timelineSteps.map((i) => {
        return (
          <TimelineStep
            inChain={i.inChain}
            step={i.step}
            passed={i.passed}
            text={i.text}
          />
        );
      })}
    </div>
  </div>
</div>
</Layout> */
}
