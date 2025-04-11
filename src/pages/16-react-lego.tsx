import React from "react";
import { use, useRef } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";
import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizOutsideResourcesStretched } from "../shared/viz-outside-resources-stretched";
import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";

import { Text } from "../16-react-lego/text";
import style from "!!raw-loader!../16-react-lego/client-code/style";
import markup from "!!raw-loader!../16-react-lego/client-code/index";
import core from "!!raw-loader!../16-react-lego/client-code/core";
import domRenderer from "!!raw-loader!../16-react-lego/client-code/dom-renderer";
import squareApp from "!!raw-loader!../16-react-lego/client-code/square-app";
import { Client } from "../16-react-lego/clientApp";
import { VizStateProvider } from "../16-react-lego/viz/vizStateProvider";

export const ReactLego = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  const html = markup;
  const css = style;
  const js = core;

  const sharedContext = useRef({
    pingViz: () => {
      console.log("ping not initialized");
    },
    triggerReact: () => {
      console.log("triggerReact not initialized");
    },
    playPause: () => {
      console.error("playPause not initialized");
      // in live - play/pause state - stop passing through code --> stops pinging react viz
      // in react - calling the live fce that changes live play/pause state
    },
    isPlaying: undefined,
    disable: false,
    html,
    css,
  });

  console.log("LEGO", sharedContext.current.playPause);

  const vizData = {
    route,
    linkTo,
    textSection: <Text />,
    browserViz: <VizBrowserDynamicElements html={html} css={css} js={js} />,
    resourcesViz: <VizOutsideResourcesStretched />,
    lines: null,
    windowTitle: "Whole Lego",
    windowAddress: "www.quest.fyi/square-app",
    // backgroundColor: "#b2b7b5",
    backgroundColor: "#ccc",
    showRender: true,
    showRAF: true,
    showLoop: true,
    showFeatures: true,
    sharedVizData: sharedContext.current,
    timelineSteps: [],
    active: "JS",
  };

  return [
    use(HTML, {
      container,
      children: (
        <VizStateProvider sharedContext={sharedContext}>
          <VizLayout {...vizData} />
        </VizStateProvider>
      ),
    }),
    use(Client, { sharedContext }),
  ];
};
