import React, {
  LC,
  yeet,
  gather,
  provide,
  useResource,
  useState,
  useRef,
  useOne,
  useContext,
  makeContext,
  makeReconciler,
  memo,
  suspend,
  multiGather,
  fence,
  useFiber,
  useAwait,
} from "@use-gpu/live";
import { Stepping } from "../step/Stepping";
import { Step } from "../step/step";
import { FiberRoot } from "./fiberRoot";
import { WipRoot } from "./wipRoot";
import { Fiber } from "./fiber";
import { Render } from "./render";

// import { clientRoot, toRender } from "./client/clientCodeButton";
// import { clientRoot, toRender } from "./client/testApp";
import { clientRoot, toRender } from "./client/squareApp";

// code thread
export const CodeRoot: LC = ({ sharedContext }) => {
  const [clientRoot] = useAwait(() => {
    console.log("useAwait for client dom node");

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("----");
        console.log("resolve clientRoot Task");

        const clientRoot = document.querySelector("#client");
        resolve(clientRoot);
      }, 0);
    });
  }, []);

  console.log("clientRoot", clientRoot);

  return (
    clientRoot && (
      <Stepping sharedContext={sharedContext}>
        <Render
          topEffect={toRender}
          domRoot={clientRoot}
          sharedContext={sharedContext}
        >
          {/* <Step>
            <FiberRoot> */}
          {/* <Step>
                <WipRoot> */}
          {/* {(wip) => (
                    <Step>
                      <Fiber wip={wip} />
                    </Step>
                  )} */}
          {/* </WipRoot>
              </Step> */}
          {/* </FiberRoot>
          </Step> */}
        </Render>
      </Stepping>
    )
  );
};

const timelineState = {
  past: [{ step: 1, visible: false }],
  current: {},
  future: [],
};

// initial state
let state = {
  fibers: [],
  steps: [],
};

// update 1
// let update = {
//   step: 1, //step fiber id
//   show: true,
//   fiber,
// };

// render
