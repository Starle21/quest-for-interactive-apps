export const sharedData = {
    timelineSteps: [
        { step: 1, type: "step", text: "request", inChain: false, passed: true },
        { step: 2, type: "step", text: "download", inChain: true, passed: false },
        {
            step: 3,
            type: "step",
            text: "parse\n&display",
            inChain: true,
            passed: false,
        },
        { step: 0, type: "event", text: "click", inChain: false, passed: false },
        { step: 1, type: "step", text: "request", inChain: true, passed: false },
        { step: 2, type: "step", text: "download", inChain: true, passed: false },
        {
            step: 3,
            type: "step",
            text: "parse\n&display",
            inChain: true,
            passed: false,
        },
    ]
}