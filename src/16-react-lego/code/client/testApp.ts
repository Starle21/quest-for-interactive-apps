import { useState } from "../hook";

export const jsxAppTest = ({ num }) => {
    return {
        type: "component",
        domType: null,
        props: { num },
        function: () => AppTest({ num }),
    };
};

const AppTest = ({ num }) => {
    const [on, setOn] = useState(true);
    const [sum, setSum] = useState(8);
    return jsxDivWithNum({
        num,
        children: [
            jsxButton({
                onClick: () => {
                    setOn((on) => !on);
                },
                children: jsxText(`Toggle ${on ? "off" : "on"}`),
            }),
            jsxButton({
                onClick: () => {
                    setSum((sum) => sum + 1);
                },
                children: jsxText(`Add 1`),
            }),
            jsxText(`sum is: ${sum}`),
            jsxTestComp({ test: "testComp" }),
            on
                ? jsxDivWithNum({
                    num: 3,
                    children: jsxH1WithNum({
                        num: 4,
                        className: "whatever",
                        children: jsxText("On!"),
                    }),
                })
                : jsxText(`Off`),
            on
                ? jsxDivWithNum({
                    num: 5,
                    children: jsxText(`Ahoj`),
                })
                : null,
        ],
    });
};

const jsxTestComp = ({ test }) => {
    return {
        type: "component",
        domType: null,
        props: { test },
        function: () => TestComp({ test }),
    };
};

const TestComp = ({ test }) => {
    const [on, setOn] = useState(true);
    return jsxDivWithNum({
        num: test,
        children: [
            jsxText(on ? "It's on, rise and shine!" : "It's off, go to sleep!"),
            jsxButton({
                onClick: () => {
                    setOn((on) => !on);
                },
                children: jsxText(`Toggle ${on ? "off" : "on"}`),
            }),
        ],
    });
};

// host components
const jsxDivWithNum = ({ num, children }) => {
    return {
        type: "htmlNode",
        domType: "div",
        props: { className: num, children },
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
    console.log('jsxText', text);

    return {
        type: "textNode",
        domType: "text",
        props: text,
    };
};

const jsxH1WithNum = ({ className, num, children }) => {
    return {
        type: "htmlNode",
        domType: "h1",
        props: {
            className,
            value: num,
            children,
        },
    };
};

export const clientRoot = document.querySelector("#client");
export const toRender = () => jsxAppTest({ num: 100 });