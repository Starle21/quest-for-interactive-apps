import React, { use, useFiber, useOne } from "@use-gpu/live";

import { makeRoutes } from "./routes";
import { Router, Routes } from "@use-gpu/workbench";
import { UseInspect } from "@use-gpu/inspect";
import "@use-gpu/inspect/theme.css";
import { globalCss } from "@stitches/core";

// const base = "/projects/quest-for-interactive-apps/";
const isDevelopment = process.env.NODE_ENV === "development";
const PRODPATH = "/projects/quest-for-interactive-apps/";
const base = isDevelopment ? "/" : PRODPATH;

export const App = () => {
  const fiber = useFiber();
  const inspectRoot = document.querySelector("#inspector")!;

  globalStyles();

  const router = useOne(() => (
    <Router base={base}>
      <Routes routes={makeRoutes()} />
    </Router>
  ));

  console.log("this is the start", makeRoutes());

  if (isDevelopment)
    return (
      <UseInspect fiber={fiber} container={inspectRoot}>
        {router}
      </UseInspect>
    );

  return { router };
};

const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    padding: 0,
    overscrollBehaviorX: "none",
    overflowX: "hidden",
  },
  label: {
    userSelect: "none",
  },

  html: {
    fontSize: "100%",
  },

  /* heading stand out  */
  "@font-face": [
    {
      fontFamily: "PP Editorial New",
      fontStyle: "normal",
      fontWeight: "800",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/PPEditorialNew-Ultrabold.otf) format("opentype")`,
    },
    /* heading stand out */
    {
      fontFamily: "Oswald",
      fontStyle: "normal",
      fontWeight: "400",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Oswald-Regular.ttf) format("truetype")`,
    },
    /* heading regular */
    {
      fontFamily: "Oxanium",
      fontStyle: "normal",
      fontWeight: "400",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Oxanium-Regular.ttf) format("truetype")`,
    },
    {
      fontFamily: "Oxanium",
      fontStyle: "bold",
      fontWeight: "700",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Oxanium-Bold.ttf) format("truetype")`,
    },
    {
      fontFamily: "Oxanium",
      fontStyle: "normal",
      fontWeight: "500",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Oxanium-Medium.ttf) format("truetype")`,
    },
    /* regular font */
    {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "300",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Nunito-Light.ttf) format("truetype")`,
    },
    {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "400",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Nunito-Regular.ttf) format("truetype")`,
    },
    /* code monospace */
    {
      fontFamily: "Menlo",
      fontStyle: "normal",
      fontWeight: "400",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Menlo-Regular.ttf) format("truetype")`,
    },
    {
      fontFamily: "Menlo",
      fontStyle: "bold",
      fontWeight: "700",
      src: `url(${
        isDevelopment ? "" : PRODPATH
      }/fonts/Menlo-Bold.ttf) format("truetype")`,
    },
  ],

  "*": {
    boxSizing: "border-box",
  },
  body: {
    font: "14px/20px Nunito, sans-serif",
  },
  a: {
    textDecoration: "none",
    color: "black",

    "&:hover, &:visited, &:active": {
      textDecoration: "none",
      color: "black",
    },
  },
  button: {
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
    width: " 100%",
  },
});
