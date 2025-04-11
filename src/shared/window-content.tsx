import { styled } from "@stitches/react";
import React from "react";

export const WindowContent = ({ isExpanded }) => {
  return (
    <div
      id="client"
      style={{
        position: "absolute",
        top: "6.6rem",
        left: "70rem",
        width: "14.2rem",
        height: "35rem",
        fontSize: "0.8rem",
        fontFamily: "Nunito",
      }}
    >
      {/* here goes client dynamic content, proxied through Live */}

      {/* <p id="info">Start the animation by clicking on the play button.</p> */}
    </div>
  );
};

const StyledWindow = styled("div", {});
