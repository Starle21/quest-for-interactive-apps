import type { LC } from "@use-gpu/live";
import React, {
  hot,
  useFiber,
  useResource,
  render,
  unmount,
  useRef,
  memo,
} from "@use-gpu/live";
import { UseInspect } from "@use-gpu/inspect";
import "@use-gpu/inspect/theme.css";
import { CodeRoot } from "./code/code";
import { VizualizationRoot } from "./vizualization/vizualizationRoot";
import { diff, patch, getUpdateKeys, revise } from "@use-gpu/state";
import { ParseDOM } from "./parse-dom/parse-dom";

export const Client: LC = hot(({ sharedContext }) => {
  return [
    <ParseDOM sharedContext={sharedContext.current} />,
    <CodeRoot sharedContext={sharedContext} />,
  ];
}, module);

Client.displayName = "Client";
