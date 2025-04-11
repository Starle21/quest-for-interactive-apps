import React from "react";
import {
  useVizStateContext,
  useVizStateTracker,
} from "../16-react-lego/viz/vizStateProvider";
import { TimelineStep, TimelineStep16 } from "./timeline-step";

export const Timeline = ({ pageNumber, timelineSteps }) => {
  useVizStateTracker("timeline", null);

  const { timeline } = useVizStateContext();
  console.log("TIMELINE", timeline);

  const debugSteps = [];
  if (pageNumber === "16") {
    timeline.forEach((value, key) => {
      debugSteps.push(value);
    });
  }

  return (
    <>
      <div style={{ display: "flex", marginLeft: "1rem" }}>
        {pageNumber === "16" &&
          debugSteps.map((value) => {
            return (
              <>
                <TimelineStep16 text={value.text} step={value.point.id} />
                {/* <span>{value.point.id}</span>
              <span>{value.text}</span> */}
              </>
            );
          })}
      </div>
      {pageNumber !== "16" &&
        timelineSteps.map((i) => {
          return (
            <TimelineStep
              inChain={i.inChain}
              step={i.step}
              passed={i.passed}
              text={i.text}
            />
          );
        })}
    </>
  );
};
