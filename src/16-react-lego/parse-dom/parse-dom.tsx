import { memo, useAwait, useResource } from "@use-gpu/live";
import { useMountContext } from "../code/render";

export const ParseDOM = memo(({ sharedContext }) => {
  const { html, css, pingViz } = sharedContext;
  console.warn("PARSE HTML");
  console.log("pingViz", pingViz);

  // LIVE - Code - divide whole into pausable steps
  const [clientRoot] = useAwait(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("----");
        console.log("resolve clientRoot Task");

        const clientRoot = document.querySelector("#client");
        resolve(clientRoot);
      }, 0);
    });
  }, []);

  useResource(
    (dispose) => {
      if (clientRoot) {
        const shadowWrapper = document.createElement("div");
        shadowWrapper.id = "shadow-root";
        const shadowRoot = shadowWrapper.attachShadow({ mode: "open" });

        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(css);
        shadowRoot.adoptedStyleSheets = [styleSheet];

        const parser = new DOMParser();
        const dom = parser.parseFromString(html, "text/html");
        dom.body.childNodes.forEach((node) => {
          shadowRoot.appendChild(node.cloneNode(true));
        });
        console.dir(dom.body.children[0]);
        // ping dom viz
        pingViz({
          dom: { node: dom.body.children[0], id: "domRoot", fields: ["id"] },
          text: `domRoot`,
        });
        console.warn("PING DOM");

        clientRoot.appendChild(shadowWrapper);
        dispose(() => {
          shadowWrapper.remove();
        });
      }
    },
    [clientRoot, html, css]
  );

  return null;
}, "ParseDOM");
