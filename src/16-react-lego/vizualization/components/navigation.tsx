import React, { useMemo, useState } from "react";
import { useVizStateContext, useVizStateTracker } from "./vizStateProvider";

export const Navigation = ({ sharedContext }) => {
  return (
    <div>
      {/* <div>Navigation Inside React</div> */}
      <PlayPause sharedContext={sharedContext} />
      <Timeline />
    </div>
  );
};

const Timeline = () => {
  console.log("Timeline");
  useVizStateTracker("timeline", null);
  // trigger timeline update in live
  // place that fiber into state
  //  map here over the fibers in state
  // create new component "dot" for new fiber
  // clicking on dot - take that fiber id
  // find that fiber in live
  // update state for that fiber
  //  - take the saved state of that fiber - if go back in mount - child null, show false, wip without child - before useResource runs
  // schedule and flush that fiber

  // ----
  const { timeline } = useVizStateContext();
  // console.error("timeline", timeline);

  const parsed = [];
  timeline.forEach((value, key) => {
    parsed.push(value);
  });

  // connected to the Live fiber that rendered that Client wip
  // click on it --> schedule(fiber) into Live queue, process associated handler - change state, flush
  // Live fiber gets rerendered with new state

  const goBack = (value) => {
    console.log("go back to fiber:", value.point);
    // schedule fiber into live queue
    // process the associated state update
    // - move the updates - step history - from past to current and future
    // individual update & revise - save in stepping
    // { step.id, child fiber - next wip  }
    // patch update to the current state
    // map over revise and patch it
    // - target the next step - show false, take last saved child
    //    - step has saved last child -
    //    - when it's mount - null
    // useResource - dispose of objects on mount,
    // - rerender with the passed in version on update
    // flush - render the fiber

    // goForward
    //
  };

  return (
    <div>
      {parsed.map((value) => {
        return (
          <>
            <button onClick={() => goBack(value)}>{value.point.id}</button>
            <span>{value.text}</span>
          </>
        );
      })}
    </div>
  );
};

const PlayPause = ({ sharedContext }) => {
  const [play, setPlay] = useState(sharedContext.isPlaying);
  useVizStateTracker("playPause", null);
  useMemo(() => {
    setPlay(sharedContext.isPlaying);
  }, [sharedContext.isPlaying]);

  const handlePlayPause = () => {
    sharedContext.playPause();
    setPlay(!play);
  };

  return <button onClick={handlePlayPause}>{play ? "pause" : "play"}</button>;
};
