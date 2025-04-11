import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";

import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizOutsideResourcesVertical } from "../shared/viz-outside-resources-vertical";
import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";

import markup from "!!raw-loader!../03-interactivity-loop/client-code/index";
import style from "!!raw-loader!../03-interactivity-loop/client-code/style.css";
import { Text } from "../03-interactivity-loop/text";
import { Client } from "../03-interactivity-loop/client-app";

export const InteractivityLoop = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  const html = markup;
  const css = style;

  const vizData = {
    route,
    linkTo,
    timelineSteps: [],
    textSection: <Text />,
    browserViz: <VizBrowserDynamicElements html={html} css={css} />,
    resourcesViz: <VizOutsideResourcesVertical />,
    lines: null,
    windowTitle: "Interactivity",
    windowAddress: "www.quest.fyi/square-app",
    // backgroundColor: "#b2b7b5",
    backgroundColor: "#ccc",
    showRender: true,
    showRAF: false,
    showLoop: true,
    active: "html&css",
    highlight: "loop",
    // highlightColor: "#1e6068",
    // highlightColor: "#315c61ce",
    highlightColor: "#275e64ce",
  };

  return [
    use(HTML, {
      container,
      children: <VizLayout {...vizData} />,
    }),
    use(Client, { html, css }),
  ];
};
