import React from "react";

export const NavigationBar = ({
  expandNavigation,
  expandText,
  pageNumber,
  sections,
  isSection,
  section,
  linkTo,
  nextSectionNumber,
  nextSectionPath,
  previousSectionPath,
  previousSectionNumber,
}) => {
  return (
    <div
      style={{
        display: "grid",
        // flexDirection: "column",
        // width: "2.5rem",
        // margin: "0.1rem",
        rowGap: "0.2rem",
        // alignItems: "center",
        // justifyContent: "center",
        height: "100%",
        gridTemplateRows: "1fr 1fr 1fr",
      }}
    >
      {pageNumber === "16" && (
        <div style={{ alignSelf: "start" }}>
          <ToggleExpandText expandText={expandText} />
        </div>
      )}
      <div style={{ gridRow: "2 / 3" }}>
        <FlipPages
          previousSectionNumber={previousSectionNumber}
          previousSectionPath={() => linkTo(previousSectionPath)}
          nextSectionNumber={nextSectionNumber}
          nextSectionPath={() => linkTo(nextSectionPath)}
          pageNumber={pageNumber}
          expandNavigation={expandNavigation}
        />
      </div>
    </div>
  );
};

const FlipPages = ({
  nextSectionNumber,
  nextSectionPath,
  pageNumber,
  expandNavigation,
  previousSectionPath,
  previousSectionNumber,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <PreviousSectionButton
        previousSectionPath={previousSectionPath}
        previousSectionNumber={previousSectionNumber}
      />
      <CurrentSectionButton
        pageNumber={pageNumber}
        expandNavigation={expandNavigation}
      />
      <NextSectionButton
        nextSectionPath={nextSectionPath}
        nextSectionNumber={nextSectionNumber}
      />
    </div>
  );
};

const CurrentSectionButton = ({ pageNumber, expandNavigation }) => {
  return (
    <button
      onClick={() => expandNavigation((previous) => !previous)}
      style={{ margin: "0.1rem", width: "2.5rem" }}
    >
      <div style={{ position: "relative", fontFamily: "Oxanium" }}>
        <ButtonLine />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2.7pt solid black",
          }}
        >
          <NavigationIcon />
          <p style={{ display: "flex" }}>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                width: "0.8rem",
              }}
            >
              {pageNumber[0]}
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                width: "0.8rem",
              }}
            >
              {pageNumber[1]}
            </div>
          </p>
        </div>
      </div>
    </button>
  );
};
const NextSectionButton = ({ nextSectionPath, nextSectionNumber }) => {
  return (
    <div style={{ borderBottom: "2pt solid black" }}>
      <a
        style={{
          height: "100%",
          color: "black",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          flexDirection: "column",
          fontFamily: "Oxanium",
          fontWeight: "500",
          padding: "0.8rem 0",
        }}
        {...nextSectionPath()}
      >
        <Arrow rotate />
        <p
          style={{
            margin: "0.1rem 0.3rem",
            // fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          {nextSectionNumber}
        </p>
        <svg
          // height={"50%"}
          width={"1.5rem"}
          style={{
            zIndex: 100,
          }}
          viewBox="0 0 20 5"
        >
          <path
            d="M 2.5 2.5 h 15"
            stroke={"var(--highlight-color)"}
            strokeWidth={4}
          />
        </svg>
      </a>
    </div>
  );
};
const PreviousSectionButton = ({
  previousSectionPath,
  previousSectionNumber,
}) => {
  return (
    <div style={{ borderTop: "2pt solid black" }}>
      <a
        style={{
          height: "100%",
          color: "black",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          flexDirection: "column",
          fontFamily: "Oxanium",
          padding: "0.8rem 0",
          fontWeight: "500",
        }}
        {...previousSectionPath()}
      >
        <svg
          // height={"50%"}
          width={"1.5rem"}
          style={{
            zIndex: 100,
          }}
          viewBox="0 0 20 5"
        >
          <path
            d="M 2.5 2.5 h 15"
            stroke={"var(--highlight-color)"}
            strokeWidth={4}
          />
        </svg>
        <p
          style={{
            margin: "0.1rem 0.3rem",
            // fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          {previousSectionNumber}
        </p>
        <Arrow />
      </a>
    </div>
  );
};

const NavigationIcon = () => {
  return (
    <svg viewBox="0 0 50 50">
      <line
        x1={8}
        y1={15}
        x2={42}
        y2={15}
        stroke="black"
        strokeWidth={3}
      ></line>
      <line
        x1={8}
        y1={24}
        x2={42}
        y2={24}
        stroke="black"
        strokeWidth={3}
      ></line>
      <line
        x1={8}
        y1={33}
        x2={42}
        y2={33}
        stroke="black"
        strokeWidth={3}
      ></line>
    </svg>
  );
};

export const ButtonLine = () => {
  return (
    <svg
      height={"100%"}
      // width={"100%"}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
    >
      <path
        d="M 2 0 v 100"
        stroke={"var(--highlight-color)"}
        strokeWidth={6}
      ></path>
    </svg>
  );
};

const Arrow = ({ rotate = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={"2.5rem"}
      viewBox="0 0 10 20"
      transform={`${rotate ? "rotate(180)" : "rotate(0)"}`}
    >
      <path d="M 5 0 v 20" stroke="gray" strokeWidth={1} />
      <path d="M 2 3 l 3 -3 l 3 3" stroke="gray" strokeWidth={1} fill="none" />
    </svg>
  );
};

const ExpandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"2.5rem"}
      viewBox="0 0 20 10"
      // transform={"rotate(90)"}
    >
      <path d="M 4 5 h 6" stroke="black" strokeWidth={1} />
      <path d="M 8 3 l 2 2 l -2 2" stroke="black" strokeWidth={1} fill="none" />
      <path d="M 10.5 2.5 v 5" stroke="black" strokeWidth={0.7} fill="none" />
      <path
        d="M 10 5 h 6"
        stroke="black"
        strokeWidth={0.5}
        // strokeDasharray={0.3}
      />
      <path
        d="M 14 3 l 2 2 l -2 2"
        stroke="black"
        strokeWidth={0.5}
        fill="none"
        // strokeDasharray={0.3}
      />
      <path d="M 16 2.5 v 5" stroke="black" strokeWidth={0.5} fill="none" />
    </svg>
  );
};

const ToggleExpandText = ({ expandText }) => {
  return (
    <button
      onClick={() => expandText((previous) => !previous)}
      style={{
        margin: "0.1rem",
        width: "2.5rem",
        fontFamily: "Oxanium",
        fontWeight: "400",
      }}
    >
      <div style={{ position: "relative" }}>
        <svg
          height={"100%"}
          width={"100%"}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
        >
          <path
            d="M 2 0 v 170"
            stroke="var(--highlight-color)"
            strokeWidth={5}
          ></path>
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2.7pt solid black",
          }}
        >
          <ExpandIcon />
          <p
            style={{
              writingMode: "sideways-lr",
              margin: "0.3rem 0 0.6rem 0",
            }}
          >
            Text / Viz
          </p>
        </div>
      </div>
    </button>
  );
};
