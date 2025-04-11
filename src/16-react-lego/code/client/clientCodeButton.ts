import { useState } from "../hook";

export const jsxApp = ({ children }) => {
  return {
    type: "component",
    domType: null,
    props: { children },
    function: () => App({ children }),
  };
};

const App = ({ children }) => {
  const [state, setState] = useState(0)
  return jsxDiv({
    children: [jsxButton({
      children: jsxText("request remote data"),
      onClick: () => {
        console.log("---");
        console.log("clicked");
        setState(v => v + 1);
      },
    }),
    //   children,
    jsxText(state)
      // jsxInput({
      //   id: "x",
      //   value: state,
      //   onInput: (e) => setState(e.target.value),
      // }),
      // jsxSvg({
      //   children:
      //     jsxRect({ x: state, y: 20 })
      // }),
    ]
  });
};

const jsxSvg = ({ children }) => {
  return {
    type: "svgNode",
    domType: "svg",
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      children,
    },
  };
};

const jsxRect = ({ x, y }) => {
  return {
    type: "svgNode",
    domType: "rect",
    props: { x, y, width: "30", height: "30", children: null },
  };
};

const jsxInput = ({ id, value, onInput }) => {
  return {
    type: "htmlNode",
    domType: "input",
    props: { id, value, onInput, children: null },
  };
};

const jsxDiv = ({ children }) => {
  return {
    type: "htmlNode",
    domType: "div",
    props: { children },
  };
};

const jsxButton = ({ onClick, children }) => {
  return {
    type: "htmlNode",
    domType: "button",
    props: { onClick, children, className: 'test' },
  };
};

const jsxText = (text) => {
  return {
    type: "textNode",
    domType: "text",
    props: text,
  };
};

const jsxH1 = ({ children }) => {
  return {
    type: "htmlNode",
    domType: "h1",
    props: { children },
  };
};

export const clientRoot = document.querySelector("#client");

// export const toRender = () => jsxApp({ children: jsxText('ImplicitMemo') });
export const toRender = () => jsxApp({ children: jsxH1({ children: jsxText('ImplicitMemo') }) });
