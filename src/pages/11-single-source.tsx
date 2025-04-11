import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";

import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";
import { VizOutsideResources } from "../shared/viz-outside-resources";

import { Text } from "../11-single-source/text";
import markup from "!!raw-loader!../11-single-source/client-code/index";
import style from "!!raw-loader!../11-single-source/client-code/style";
import script from "!!raw-loader!../11-single-source/client-code/script";
import { Client } from "../11-single-source/client-app";

export const SingleSource = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  const html = markup;
  const css = style;
  const js = script;

  const vizData = {
    route,
    linkTo,
    timelineSteps: [],
    textSection: <Text />,
    browserViz: <VizBrowserDynamicElements html={html} css={css} js={js} />,
    resourcesViz: <VizOutsideResources />,
    lines: null,
    windowTitle: "SQUARE APP",
    windowAddress: "www.quest.fyi/square-app",
    backgroundColor: "#b2b7b5",
    showRender: true,
    showRAF: true,
    showLoop: true,
    showFeatures: true,
  };

  return [
    use(HTML, {
      container,
      children: <VizLayout {...vizData} />,
    }),
    use(Client, { html, css }),
  ];
};
