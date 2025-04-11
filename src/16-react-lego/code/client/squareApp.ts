import { api } from "../../util/util";
import { useState } from "../hook";

// -------------------------------------------------------------------------------
// ELEMENTS / COMPONENTS
export const jsxApp = ({ children }) => {
  return {
    type: "component",
    domType: null,
    props: { children },
    function: () => App({ children }),
    name: 'jsxApp',
    fName: 'App',
  };
};

const App = ({ children }) => {
  const [xCoord, setXCoord] = useState("");
  const [yCoord, setYCoord] = useState("");
  const [side, setSide] = useState("");
  return jsxDiv({
    children: [
      children,
      jsxBr(),
      jsxButton({
        children: jsxText("request remote data"),
        onClick: () => {
          makeNetworkRequest(({ x, y, side }) => {
            setXCoord(x);
            setYCoord(y);
            setSide(side);
            console.log("local data updated from remote source", x, y, side);
          });
        },
      }),
      jsxDiv({ children: jsxText("x coordinate:") }),
      jsxInput({
        id: "x",
        value: xCoord,
        onInput: (e) => setXCoord(e.target.value),
      }),
      jsxDiv({ children: jsxText("y coordinate:") }),
      jsxInput({
        id: "y",
        value: yCoord,
        onInput: (e) => setYCoord(e.target.value),
      }),
      jsxSvg({
        children:
          xCoord && yCoord
            ? jsxSquare({ x: xCoord, y: yCoord })
            : jsxAlert({
              children: jsxText("Fill out all inputs!"),
            }),
      }),
      jsxDiv({
        children: jsxText(`x coordinate is: ${xCoord}`),
      }),
      jsxDiv({
        children: jsxText(`y coordinate is: ${yCoord}`),
      }),
      jsxDiv({ children: jsxText(`side is: ${side}`) }),
    ],
    className: 'window'
  });
};

export const jsxImplicitMemo = () => {
  return {
    type: "component",
    domType: null,
    props: {},
    function: ImplicitMemo,
    fName: 'ImplicitMemo',
  };
};

const ImplicitMemo = () => {
  return jsxDiv({
    children: [
      jsxText(`Give me x and y and I'll create a square for you.`),
      jsxBr(),
      jsxText(`This text will not recalculate on parent update.`),
    ],
  });
};

const jsxDiv = ({ children, className = '' }) => {
  return {
    type: "htmlNode",
    domType: "div",
    props: { children, className },
  };
};

const jsxButton = ({ onClick, children }) => {
  return {
    type: "htmlNode",
    domType: "button",
    props: { onClick, children },
  };
};

const jsxText = (text) => {
  return {
    type: "textNode",
    domType: "text",
    props: text,
  };
};

const jsxBr = () => {
  return {
    type: "htmlNode",
    domType: "br",
    props: { children: null },
  };
};

const jsxInput = ({ id, value, onInput }) => {
  return {
    type: "htmlNode",
    domType: "input",
    props: { id, value, onInput, children: null },
  };
};

const jsxSvg = ({ children }) => {
  return {
    type: "svgNode",
    domType: "svg",
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 150",
      children,
    },
  };
};

const jsxSquare = ({ x, y }) => {
  return {
    type: "svgNode",
    domType: "rect",
    props: { x, y, width: "30", height: "30", children: null },
  };
};

const jsxAlert = ({ children }) => {
  return {
    type: "svgNode",
    domType: "text",
    props: { x: "10", y: "50", class: "small", children },
  };
};

// -------------------------------------------------------------------------------
// HANDLERS
function makeNetworkRequest(handler) {
  console.log("request pending");
  setTimeout(() => {
    handler({
      x: Math.ceil(Math.random() * 160),
      y: Math.ceil(Math.random() * 40),
      side: Math.ceil(Math.random() * 30),
    });
  }, 2000);
}

// -------------------------------------------------------------------------------
console.warn('SYNCHRONOUS');
// console.log('user code', jsxApp({ children: jsxImplicitMemo() }));
// api.pingViz();

export const clientRoot = document.querySelector("#client");

export const toRender = () => jsxApp({ children: jsxImplicitMemo() });


