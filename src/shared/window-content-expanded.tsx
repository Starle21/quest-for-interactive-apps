import { styled } from "@stitches/react";
import React from "react";

export const WindowContentExpanded = () => {
  return (
    <StyledWindow id="client">
      {/* here goes client dynamic content, proxied through Live */}

      <p id="info">Start the animation by clicking on the play button.</p>
    </StyledWindow>
  );
};

const StyledWindow = styled("div", {
  position: "absolute",
  top: "6.6rem",
  left: "99rem",
  width: "14.2rem",
  height: "35rem",
  fontSize: "0.8rem",
  // color: "red",
  fontFamily: "Nunito",

  "& button": {
    border: "1pt solid black",
    padding: "0.4rem 0.2rem",
    marginBottom: "1rem",
    fontFamily: "Nunito",
  },

  "& svg": {
    border: "1pt solid black",
    marginTop: "1rem",
  },
});
