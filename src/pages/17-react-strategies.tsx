import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";
import { useRouterContext } from "@use-gpu/workbench";

import { VizLayout } from "../layouts/layout-viz";

import { VizOutsideResources } from "../shared/viz-outside-resources";
import { VizBrowserDynamicElements } from "../shared/viz-browser-dynamic-elements";

import { Text } from "../16-react-lego/text";
import style from "!!raw-loader!../16-react-lego/client-code/style";
import markup from "!!raw-loader!../16-react-lego/client-code/index";
import core from "!!raw-loader!../16-react-lego/client-code/core";
import domRenderer from "!!raw-loader!../16-react-lego/client-code/dom-renderer";
import squareApp from "!!raw-loader!../16-react-lego/client-code/square-app";
import { styled } from "@stitches/react";

const StyledDiv = styled("div", {
  width: "25rem",
  height: "25rem",
  background:
    // "rgba(148, 86, 4, 0.75)",
    // "linear-gradient(180deg, rgba(148, 86, 4, 0.75), rgba(148, 86, 4, 0.75)), #232525",
    // "linear-gradient(180deg, rgba(4, 90, 148, 0.75), rgba(4, 71, 148, 0.75)), #232525",
    "linear-gradient(180deg, rgba(4, 71, 148, 0.75), rgba(4, 71, 148, 0.75))",
  // "linear-gradient(180deg, rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), #232525",
  opacity: 0.6,
  borderRadius: "12px",
  outline: "1pt solid rgb(255,255,255,.2)",
  // outline: "1px solid rgba(17, 16, 16, 0.1)",
  // outline: "1px solid rgba(17, 16, 16, 0.459)",

  outlineOffset: "-1pt",
  // "&::after": {
  //   content: "",
  //   outline: "1px solid rgb(255,255,255,.1)",
  //   outlineOffset: "-1px",
  //   zIndex: 1,
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   borderRadius: "inherit",
  // },
});
const StyledDiv3 = styled("div", {
  width: "25rem",
  height: "25rem",
  background:
    // "rgba(148, 86, 4, 0.75)",
    // "linear-gradient(180deg, rgba(148, 86, 4, 0.75), rgba(148, 86, 4, 0.75)), #232525",
    // "linear-gradient(180deg, rgba(4, 90, 148, 0.75), rgba(4, 71, 148, 0.75)), #232525",
    "linear-gradient(180deg, rgba(4, 71, 148, 0.979), rgba(0, 84, 180, 0.911))",
  // "linear-gradient(180deg, rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), #232525",
  opacity: 0.6,
  borderRadius: "12px",
  // outline: "1pt solid rgb(255,255,255,.2)",
  outline: "1pt solid rgba(49, 49, 49, 0.671)",
  // outline: "1px solid rgba(17, 16, 16, 0.1)",
  // outline: "1px solid rgba(17, 16, 16, 0.459)",

  outlineOffset: "-1pt",
  // "&::after": {
  //   content: "",
  //   outline: "1px solid rgb(255,255,255,.1)",
  //   outlineOffset: "-1px",
  //   zIndex: 1,
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   borderRadius: "inherit",
  // },
});
const StyledDiv2 = styled("div", {
  width: "25rem",
  height: "25rem",
  background: "rgba(196, 112, 3, 0.829)",
  // "linear-gradient(180deg, rgba(148, 86, 4, 0.75), rgba(148, 86, 4, 0.75)), #232525",
  // "linear-gradient(180deg, rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), #232525",
  opacity: 0.6,
  borderRadius: "12px",
  outline: "1px solid rgb(255,255,255,.2)",
  outlineOffset: "-1px",
  // margin: 3,
  // "&::after": {
  //   content: "",
  //   outline: "1px solid rgb(255,255,255,.1)",
  //   outlineOffset: "-1px",
  //   zIndex: 1,
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   borderRadius: "inherit",
  // },
});

export const ReactStrategies = ({ container }) => {
  const { linkTo, route } = useRouterContext();

  return [
    use(HTML, {
      container,
      children: (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              background: "#dadada",
              // background: "#8e9194",
              flexDirection: "column",
              fontFamily: "Oxanium",
            }}
          >
            <div>To be done :)</div>
            <div>...</div>
            <div>this is the end, wanderer.</div>
            <div>go on you merry way further into the wild,</div>
            <div>or circle to the beginning,</div>
            <div>start over and dig deeper.</div>
            <div>remember, no help can bring you salvation.</div>
            <div>only you are the master of it.</div>
            {/* <div
              style={{
                // background: "rgba(196, 194, 194, 0.144)",
                // background: "rgb(169, 172, 172)",
                background: "rgb(232, 238, 238)",
                // borderRadius: "12px",
                outline: "1px solid rgba(44, 44, 44, 0.37)",
                // outline: "1px solid rgba(17, 16, 16, 0.459)",
                outlineOffset: "1px",
                // background: "rgb(255, 255, 255, 0.2)",
                margin: 3,
              }}
            >
              <StyledDiv3 />
            </div>
            <div
              style={{
                background: "rgb(35, 37, 37)",
                // borderRadius: "12px",
                outline: "1px solid rgb(255,255,255,.1)",
                outlineOffset: "1px",
                // background: "rgb(255, 255, 255, 0.2)",
                margin: 3,
              }}
            >
              <StyledDiv2 />
            </div> */}
            {/* <div
            style={{
              width: "25rem",
              height: "25rem",
              background:
                "linear-gradient(180deg, rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), #232525",
              // "linear-gradient(180deg, rgba(36, 38, 41, 0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), salmon",
              opacity: 0.6,
              borderRadius: "12px",
              // border: "1px solid rgb(255,255,255,.1)",
              "&::after": {
                content: "",
                outline: "1px solid rgb(255,255,255,.1)",
                zIndex: 1,
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
            }}
          >
            last
          </div> */}
          </div>
        </div>
      ),
    }),
    // use(Client, { html, css }),
  ];
};

{
  /* <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#22272c",
    // background: "#8e9194",
  }}
>
  <div
    style={{
      // background: "rgba(196, 194, 194, 0.144)",
      background: "rgb(35, 37, 37)",
      // borderRadius: "12px",
      outline: "1px solid rgb(255,255,255,.1)",
      // outline: "1px solid rgba(17, 16, 16, 0.459)",
      outlineOffset: "1px",
      // background: "rgb(255, 255, 255, 0.2)",
      margin: 3,
    }}
  >
    <StyledDiv />
  </div>
  <div
    style={{
      background: "rgb(35, 37, 37)",
      // borderRadius: "12px",
      outline: "1px solid rgb(255,255,255,.1)",
      outlineOffset: "1px",
      // background: "rgb(255, 255, 255, 0.2)",
      margin: 3,
    }}
  >
    <StyledDiv2 />
  </div>
  <div
    style={{
      width: "25rem",
      height: "25rem",
      background:
        "linear-gradient(180deg, rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), #232525",
      // "linear-gradient(180deg, rgba(36, 38, 41, 0.75), rgba(4.3098591549296,67.88028169014082,148.6901408450704,0.75)), salmon",
      opacity: 0.6,
      borderRadius: "12px",
      // border: "1px solid rgb(255,255,255,.1)",
      "&::after": {
        content: "",
        outline: "1px solid rgb(255,255,255,.1)",
        zIndex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    }}
  >
    last
  </div>
</div>; */
}
