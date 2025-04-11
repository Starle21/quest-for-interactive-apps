import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";

import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { sharedData } from "../01-static-documents/shared-data";
import markup1 from "!!raw-loader!../01-static-documents/client/index";
import markup2 from "!!raw-loader!../01-static-documents/client/different";
import { Client } from "../01-static-documents/client-app";
import { Text } from "../01-static-documents/text";
import { VizBrowserDynamicElements } from "../01-static-documents/viz/viz-browser-dynamic-elements";
import { VizOutsideResources } from "../shared/viz-outside-resources";
import { Lines } from "../01-static-documents/viz/lines";

export const StaticDocuments = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  // use code1 or code2
  const html = markup1;
  const { timelineSteps } = sharedData;

  const vizData = {
    route,
    linkTo,
    timelineSteps,
    textSection: <Text />,
    browserViz: <VizBrowserDynamicElements code={html} />,
    resourcesViz: <VizOutsideResources />,
    lines: <Lines />,
    windowTitle: "First Static Doc",
    windowAddress: "www.quest.fyi/first",
    // backgroundColor: "#758e81",
    // backgroundColor: "#315c61ce",
    // backgroundColor: "#1e5f66ce",
    // backgroundColor: "#446c70cc",
    backgroundColor: "#41767a",
    showRender: false,
    showRAF: false,
  };

  return [
    use(HTML, {
      container,
      children: <VizLayout {...vizData} />,
    }),
    use(Client, { html }),
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
      <NavigationExpanded
        linkTo={linkTo}
        currentRoute={currentPath}
      />
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
        <Background color={"#758e81"} />

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
