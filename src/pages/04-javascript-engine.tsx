import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";

import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizOutsideResourcesVertical } from "../shared/viz-outside-resources-vertical";
import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";

import { Text } from "../04-javascript-engine/text";
import markup from "!!raw-loader!../04-javascript-engine/client-code/index";
import style from "!!raw-loader!../04-javascript-engine/client-code/style";
import script from "!!raw-loader!../04-javascript-engine/client-code/script";
import { Client } from "../04-javascript-engine/client-app";

export const JavascriptEngine = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  const html = markup;
  const css = style;
  const js = script;
  console.log("JS", js);

  const vizData = {
    route,
    linkTo,
    timelineSteps: [],
    textSection: <Text />,
    browserViz: <VizBrowserDynamicElements html={html} css={css} js={js} />,
    resourcesViz: <VizOutsideResourcesVertical />,
    lines: null,
    windowTitle: "JS engine",
    windowAddress: "www.quest.fyi/square-app",
    // backgroundColor: "#b2b7b5",
    backgroundColor: "#ccc",
    showRender: true,
    showRAF: true,
    showLoop: true,
    showFeatures: true,
    active: "JS",
    highlight: "JS",
    // highlightColor: "#1e6068",
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
