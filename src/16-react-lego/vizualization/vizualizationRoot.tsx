import type {
  LiveFiber,
  LiveComponent,
  LiveElement,
  LC,
  PropsWithChildren,
} from "@use-gpu/live";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";
import { Viz } from "./components/viz";

import React from "react";

export const VizualizationRoot: LC = ({ sharedContext }) => {
  // console.warn("VizualizationRoot LC -> RC");
  const root = document.querySelector("#viz")!;
  return use(HTML, {
    container: root,
    children: <Viz sharedContext={sharedContext} />,
  });
};
