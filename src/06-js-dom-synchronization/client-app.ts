import { useAwait, useMemo, useResource } from "@use-gpu/live";

// LIVE
// animation
// 1. read code address
// 2. network request
// 3. html received - display in window
// 4. click - send new request
// 5. html received - display in window


export const Client = ({ html, css }) => {

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


    useResource((dispose) => {
        if (clientRoot) {
            const shadowWrapper = document.createElement('div');
            shadowWrapper.id = 'shadow-root';
            const shadowRoot = shadowWrapper.attachShadow({ mode: "open" });

            const styleSheet = new CSSStyleSheet();
            styleSheet.replaceSync(css);
            shadowRoot.adoptedStyleSheets = [styleSheet];

            const parser = new DOMParser();
            const dom = parser.parseFromString(html, "text/html");
            dom.body.childNodes.forEach(node => {
                shadowRoot.appendChild(node.cloneNode(true));
            });

            clientRoot.appendChild(shadowWrapper);
            dispose(() => {
                shadowWrapper.remove();
            })

        }
    }, [clientRoot, html, css]);


    // timeline maps over steps
    // map over
    // request, download, parse&display

    // step - call some function - change data, pingViz(schedule right away into queue), schedule which live fiber to flush next
    // run react render - updated data reruns some react components - some parts of viz



    return null;
}