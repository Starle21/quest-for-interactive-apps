import React, { FC, PropsWithChildren } from "react";
import { styled as _styled } from "@stitches/react";

// TODO: TS nightly issue?
const styled: any = _styled;

// emotion makes fibers which are implicitly memoized (same children passed to their parents) rerender when they should not --> using stitches
// - maybe not use css with emotion
// - maybe do not import css directly into component which sits directly in the control flow

export const TopLayout = styled("div", {
  margin: "0 auto",
  width: "100vw",
  minHeight: "100vh",
  minWidth: "16.25rem",
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr",
  // gridTemplateRows: "5fr 1fr",
  overflow: "auto",
});
export const Text = styled("div", {
  padding: "0 1rem",
  display: "flex",
  flexDirection: "column",
  gridTemplateColumns: "1fr 1.5fr 1fr",
  backgroundColor: "#D3D3D3",
  overflow: "auto",
});

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  overflow: "auto",
});
export const Center = styled("div", {
  display: "flex",
  justifyContent: "center",
  overflow: "auto",
});
export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  overflow: "auto",
});
export const Viz = styled("div", {
  backgroundColor: "#e7e6e6",
  maxHeight: "100%",
  overflow: "auto",
});
export const Window = styled("div", {
  backgroundColor: "#ebeaeacc",
});

// export const Navigation = styled("div", {
//   // backgroundColor: "#b1afafbe",
//   backgroundColor: "#cdb4fcbd",
//   gridColumn: "1/4",
//   gridRow: "2/3",
// });

export const Split = styled("div", {
  display: "grid",
  gridTemplateRows: "6fr 1fr",
  height: "100vh",
});

// ----------------
//   :root {
//     --color-red: red;
//     --color-white: white;
//     --color-grey-300: #D3D3D3;
//     --color-grey-500: #7f7f7f;
//   }

//   const ThemeProvider = styled.div`
//     --button-background: var(--color-white);
//     --button-text: var(--color-grey-500);

//    &[variant-dark] {
//       --button-background: var(--color-grey-300);
//       --button-text: var(--color-white);
//    }
//   `

//   const Button = styled.button`
//     color: var(--button-text);
//     background-color: var(--button-background);
//   `
