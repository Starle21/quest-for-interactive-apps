import React from "@use-gpu/live";

import { StartPage } from "./pages/00-startpage";
import { StaticDocuments } from "./pages/01-static-documents";
import { RenderPipeline } from "./pages/02-render-pipeline";
import { ReactLego } from "./pages/16-react-lego";
import { ExponentialCodeIncreaseIntro } from "./pages/08-exponential-code-increase-intro";
import { ExponentialCodeIncreaseViz } from "./pages/08-exponential-code-increase-viz";
import { InteractivityLoop } from "./pages/03-interactivity-loop";
import { JavascriptEngine } from "./pages/04-javascript-engine";
import { EventApi } from "./pages/05-event-api";
import { JSDOMSynchronization } from "./pages/06-js-dom-synchronization";
import { AtScale } from "./pages/07-at-scale";
import { NoSingleOriginatingSource } from "./pages/09-no-single-originating-source";
import { TakeAllDown } from "./pages/10-take-all-down";
import { SingleSource } from "./pages/11-single-source";
import { Hook } from "./pages/12-hook";
import { Diff } from "./pages/13-diff";
import { CalculationEffect } from "./pages/14-calculation-effect";
import { Memoization } from "./pages/15-memoization";
import { ReactStrategies } from "./pages/17-react-strategies";

const container = document.querySelector("#root");

// input specifications:
// keep this order
// /parentpath/viz
// /parentpath/intro
// /parentpath

export const makePages = () => [
  {
    path: "/01-static-documents",
    title: "Quest - Static Documents",
    element: <StaticDocuments container={container} />,
    status: "static draft",
  },
  {
    path: "/02-render-pipeline",
    title: "Quest - Render Pipeline",
    element: <RenderPipeline container={container} />,
    status: "static draft",
  },
  {
    path: "/03-interactivity-loop",
    title: "Quest - Interactivity & Event Loop",
    element: <InteractivityLoop container={container} />,
    status: "static draft",
  },
  {
    path: "/04-javascript-engine",
    title: "Quest - Javascript Engine",
    element: <JavascriptEngine container={container} />,
    status: "static draft",
  },
  {
    path: "/05-event-api",
    title: "Quest - Event Api",
    element: <EventApi container={container} />,
  },
  {
    path: "/06-js-dom-synchronization",
    title: "Quest - JS to DOM, JS to JS",
    element: <JSDOMSynchronization container={container} />,
  },
  {
    path: "/07-at-scale",
    title: "Quest - At Scale",
    element: <AtScale container={container} />,
  },
  // {
  //   path: "/08-exponential-code-increase/intro",
  //   title: "Intro",
  //   element: <ExponentialCodeIncreaseIntro container={container} />,
  // },
  // {
  //   path: "/08-exponential-code-increase/viz",
  //   title: "Viz",
  //   element: <ExponentialCodeIncreaseViz container={container} />,
  // },
  {
    path: "/08-exponential-code-increase",
    title: "Quest - Exponential Code Increase",
    element: <ExponentialCodeIncreaseViz container={container} />,
  },
  {
    path: "/09-no-single-originating-source",
    title: "Quest - No Single Originating Source of Data",
    element: <NoSingleOriginatingSource container={container} />,
  },
  {
    path: "/10-take-all-down",
    title: "Quest - Take It All Down",
    element: <TakeAllDown container={container} />,
  },
  {
    path: "/11-single-source",
    title: "Quest - Single Originating Source of Data",
    element: <SingleSource container={container} />,
  },
  {
    path: "/12-hook",
    title: "Quest - Hook",
    element: <Hook container={container} />,
  },
  {
    path: "/13-diff",
    title: "Quest - Diff",
    element: <Diff container={container} />,
  },
  {
    path: "/14-calculation-effect",
    title: "Quest - Calculation & Effect",
    element: <CalculationEffect container={container} />,
  },
  {
    path: "/15-memoization",
    title: "Quest - Memoization",
    element: <Memoization container={container} />,
  },
  {
    path: "/16-react-lego",
    title: "Quest - React Whole Lego Enchilada",
    element: <ReactLego container={container} />,
    status: "parts of ani working",
  },
  {
    path: "/17-react-strategies",
    title: "Quest - React Strategies",
    element: <ReactStrategies container={container} />,
    status: "",
  },
  {
    path: "/18-beyond",
    title: "Quest - Beyond",
    element: <ReactStrategies container={container} />,
  },
  {
    path: "/",
    title: "Quest For Interactive Apps",
    element: <StartPage container={container} />,
  },
];

const filteredRoutes = makePages().filter((p) => {
  return p.status != null;
});

export const makeRoutes = () => ({
  ...makePages().reduce(
    (out, { path, element }) => ((out[path] = { element }), out),
    {} as Record<string, any>
  ),
});

const createMakeSections = (pages) => () => {
  const allPages = Array.isArray(pages) ? pages : pages();
  return allPages
    .map((el) => {
      return { ...el, subsections: [] };
    })
    .reduce((out, el, i, a) => {
      const { path } = el;

      const regexIntro = /\/(intro)$/;
      const regexViz = /\/(viz)$/;
      const isIntro = path.match(regexIntro);
      const isViz = path.match(regexViz);

      // if path includes viz or intro,
      // place it as a subelement
      if (isIntro || isViz) {
        if (isIntro) {
          let sub = a[i + 2].subsections;
          a[i + 2].subsections = [...sub, el];
        } else {
          let sub = a[i + 1].subsections;
          a[i + 1].subsections = [...sub, el];
        }
        return out;
      } else {
        return (out = [...out, el]);
      }
    }, []);
};

export const makeSections = createMakeSections(makePages);
export const makeFilteredSections = createMakeSections(filteredRoutes);

// { path, title, element, sections: null || [ {path, title, element}, {} ] }

// wholessence.cz/projects/quest-for-interactive-apps/

// Intro
// 01 Static Documents
// 02 Render pipeline
// 03 Interactivity & Event loop
// 04 Javascript Engine
// 05 Event Api
// 06 JS to DOM, JS to JS
// 07 At scale
// 08 Exponential code increase
// 09 No single originating source of data
// 10 Take all down - components, view fce of data
// 11 Single originating source - whole component tree, state on top
// 12 Hook
// 13 Diff
// 14 Calculation and effect
// 15 Memoization
// 16 React Lego - whole enchilada
// 17 React strategies
// 18 Beyond
