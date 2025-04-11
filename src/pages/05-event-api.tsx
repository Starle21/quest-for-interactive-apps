import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";

import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizOutsideResourcesVertical } from "../shared/viz-outside-resources-vertical";
import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";

import { Text } from "../05-event-api/text";
import markup from "!!raw-loader!../05-event-api/client-code/index";
import style from "!!raw-loader!../05-event-api/client-code/style";
import script from "!!raw-loader!../05-event-api/client-code/script";
import { Client } from "../05-event-api/client-app";

export const EventApi = ({ container }) => {
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
    windowTitle: "SQUARE APP",
    windowAddress: "www.quest.fyi/square-app",
    backgroundColor: "#b2b7b5",
    showRender: true,
    showRAF: true,
    showLoop: true,
    showFeatures: true,
    active: "JS",
  };

  return [
    use(HTML, {
      container,
      children: <VizLayout {...vizData} />,
    }),
    use(Client, { html, css }),
  ];
};
