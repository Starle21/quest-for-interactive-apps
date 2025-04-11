import React, { useMemo, useState } from "react";
import { useVizStateTracker } from "../16-react-lego/viz/vizStateProvider";

export const PlayAnimationButton = ({ context, pageNumber }) => {
  const [isPlaying, setIsPlaying] = useState(context?.isPlaying ?? false);

  // register this component for live code state change
  useVizStateTracker("playPause", null);

  useMemo(() => {
    setIsPlaying(context?.isPlaying);
  }, [context?.isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((previous) => !previous);
    context?.playPause();
  };

  const isDisabled = context?.disable;

  return (
    <div
      style={{
        // display: "flex",
        height: "100%",
        // width: "3rem",
        position: "relative",
        width: "3.3rem",
      }}
    >
      {pageNumber !== "16" && (
        <button style={{ cursor: "auto" }}>
          {/* <svg
            height={"100%"}
            width={"100%"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 100,
            }}
          >
            <path d="M 3 0 v 100 " stroke="#22b573" strokeWidth={7}></path>
          </svg> */}
          <div
            style={{
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              border: "2.7pt solid black",
            }}
          >
            <svg height={"2.7rem"} width={"2.7rem"} viewBox="0 0 200 200">
              <path d="M 70 50 v 100 l 90 -50 z" fill="black"></path>
            </svg>
          </div>
        </button>
      )}
      {pageNumber === "16" && (
        <>
          {isPlaying ? (
            <button onClick={handlePlayPause}>
              <svg
                height={"100%"}
                width={"100%"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 100,
                }}
              >
                <path
                  d="M 3 0 v 100 "
                  stroke="var(--highlight-color)"
                  strokeWidth={7}
                ></path>
              </svg>
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  // alignItems: "center",
                  border: "2.7pt solid black",
                }}
              >
                <svg height={"2.7rem"} width={"2.7rem"} viewBox="0 0 200 200">
                  <path
                    d="M 75 50 v 100"
                    stroke="black"
                    strokeWidth={20}
                  ></path>
                  <path
                    d="M 125 50 v 100"
                    stroke="black"
                    strokeWidth={20}
                  ></path>
                </svg>
              </div>
            </button>
          ) : (
            <button
              onClick={handlePlayPause}
              disabled={isDisabled}
              style={{ cursor: `${isDisabled ? "auto" : "pointer"}` }}
            >
              {!isDisabled && (
                <svg
                  height={"100%"}
                  width={"100%"}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 100,
                  }}
                >
                  <path
                    d="M 3 0 v 100 "
                    stroke="var(--highlight-color)"
                    strokeWidth={7}
                  ></path>
                </svg>
              )}
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  // alignItems: "center",
                  border: "2.7pt solid black",
                }}
              >
                <svg height={"2.7rem"} width={"2.7rem"} viewBox="0 0 200 200">
                  <path d="M 70 50 v 100 l 90 -50 z" fill="black"></path>
                </svg>
              </div>
            </button>
          )}
        </>
      )}
    </div>
  );
};
