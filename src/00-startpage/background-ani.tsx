import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useAnimate } from "motion/react";
import { keyframes, styled } from "@stitches/react";

export const Background = ({
  color,
  showRender,
  showRAF = true,
  showLoop = true,
  highlight,
  highlightColor,
}) => {
  const round = 15;
  const roundW = 60;
  const width = 1560;
  const height = 910;
  const padding = 25;
  const outline = 6;
  const wedgeW = 280;
  const wedgeH = 310;
  const overlap = 20;
  const moveR = 10;
  const moveD = 10;
  const windowH = 720;
  const windowW = 310;
  const moveWR = 20;
  const alignWindow = height / 2 - padding - windowH / 2;
  const moveWU = alignWindow + 20;
  const moveTabR = 40;

  return (
    <svg
      // width="1380"
      // width="1380"
      // height="805"
      height="100%"
      // style={{ background: "white" }}
      preserveAspectRatio="xMaxYMax meet"
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* <rect
    x={0}
    y={0}
    width={1560}
    height={910}
    fill="lightblue"
  ></rect>
  <rect x={0} y={0} height={300} width={200}></rect>
  <line x1={0} y1={0} x2={200} y2={300} stroke="white"></line> */}

      {/* outside resources */}
      <path
        d={`
            M ${wedgeW / 2 + padding + moveR} ${
          wedgeH + padding + overlap + moveD
        } 
            h${wedgeW / 2 + overlap - round}
            q${round} 0 ${round} ${-round}
            v${-(wedgeH + overlap * 2 - round * 2)}
            q 0 ${-round} ${-round} ${-round}
            h${-(wedgeW + overlap * 2 - round * 2)}
            q${-round} 0 ${-round} ${round}
            v${wedgeH + overlap * 2 - round * 2}
            q 0 ${round} ${round} ${round}
            z
            `}
        stroke="gray"
        strokeWidth={4}
        fill="none"
        // fill="#eeeeee"
        // fill="#d3d2d2"
      />
      {/* browser border */}
      <path
        d={`
            M ${width / 2} ${height - padding} 
            h ${width / 2 - padding - round} 
            q ${round} 0 ${round} ${-round}
            v ${-(height - padding * 2 - round * 2)}
            q 0 ${-round} ${-round} ${-round}
            h ${-(width - wedgeW - padding * 2 - round * 2)}  
            q ${-round} 0 ${-round} ${round}
            v ${wedgeH - round * 2}
            q 0 ${round} ${-round} ${round}
            h ${-(wedgeW - round * 2)}
            q ${-round} 0 ${-round} ${round}
            v ${height - padding * 2 - wedgeH - round * 2}
            q 0 ${round} ${round} ${round}
            z
        `}
        stroke="#414040"
        strokeWidth={4}
        fill="#fff"
      />
      {/* browser inner fill */}
      <path
        d={`
            M ${width / 2} ${height - padding - outline} 
            h ${width / 2 - padding - round - outline} 
            q ${round} 0 ${round} ${-round}
            v ${-(height - padding * 2 - outline * 2 - round * 2)}
            q 0 ${-round} ${-round} ${-round}
            h ${-(width - wedgeW - padding * 2 - outline * 2 - round * 2)}  
            q ${-round} 0 ${-round} ${round}
            v ${wedgeH - round * 2}
            q 0 ${round} ${-round} ${round}
            h ${-(wedgeW - round * 2)}
            q ${-round} 0 ${-round} ${round}
            v ${height - padding * 2 - outline * 2 - wedgeH - round * 2}
            q 0 ${round} ${round} ${round}
            z
            `}
        fill={color}
      />
      {/* client's window */}
      <g>
        <path
          d={`
            M ${width - padding + moveWR} ${height / 2 - moveWU}
            v ${-(windowH / 2 - roundW)}
            q 0 ${-roundW} ${-roundW} ${-roundW}
            h ${-(windowW - roundW * 2)}
            q ${-roundW} 0 ${-roundW} ${roundW}
            v ${windowH - roundW * 2}
            q 0 ${roundW} ${roundW} ${roundW}
            h ${windowW - roundW * 2}
            q ${roundW} 0 ${roundW} ${-roundW}
            z
            `}
          stroke="#414040"
          strokeWidth={6}
          fill="#e6e6e6"
        />
        {/* tab in client's window */}
        <path
          d={`
            M ${width - padding + moveWR - windowW / 2 + moveTabR}
              ${height / 2 - moveWU - windowH / 2}
            q ${roundW} 0 ${roundW} ${roundW}
            v 20 
            q 0 5 5 5
            h ${windowW / 2 - roundW - moveTabR - 5}

            `}
          stroke="#414040"
          strokeWidth={6}
          fill="none"
        />
      </g>

      {/* outside resources content */}
      <rect
        x={60}
        y={30}
        width={175}
        height={60}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      <rect
        x={240}
        y={30}
        width={45}
        height={275}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      <rect
        x={60}
        y={95}
        width={175}
        height={210}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />

      {/* event loop */}
      <svg x={310} y={55}>
        <path
          d="M 0 5 h 930"
          stroke={`gray`}
          strokeWidth={5}
          fill="none"
          strokeDasharray={2}
        />
        <path
          d="M 0 12 h 930"
          stroke={`gray`}
          strokeWidth={5}
          fill="none"
          strokeDasharray={2}
        />
        <EventLoop />
        <svg x={363} y={165}>
          <MoveCircleLoop />
        </svg>

        <rect
          x={433}
          y={0}
          width={130}
          height={155}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={433}
          y={160}
          width={130}
          height={35}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={658}
          y={0}
          width={30}
          height={155}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={658}
          y={160}
          width={50}
          height={35}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={805}
          y={0}
          width={27}
          height={155}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
      </svg>

      {/* marks start of event loop frame */}
      <rect x={560} y={190} width={4} height={100} fill={"gray"} />
      <rect x={1103} y={190} width={4} height={150} fill={"gray"} />

      {/* big rendering pipeline steps */}
      <svg x={1115} y={215}>
        <rect
          x={0}
          y={0}
          width={27}
          height={510}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={31}
          y={0}
          width={27}
          height={510}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={62}
          y={0}
          width={27}
          height={510}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={93}
          y={0}
          width={27}
          height={510}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
      </svg>

      {/* small render pipeline steps */}
      <svg x={570} y={215}>
        <rect
          x={39}
          y={0}
          width={10}
          height={60}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <rect
          x={26}
          y={0}
          width={10}
          height={60}
          fill={"none"}
          stroke="gray"
          strokeWidth={1}
        />
        <rect
          x={13}
          y={0}
          width={10}
          height={60}
          fill={"none"}
          stroke="gray"
          strokeWidth={1}
        />
        <rect
          x={0}
          y={0}
          width={10}
          height={60}
          fill={"none"}
          stroke="gray"
          strokeWidth={1}
        />
      </svg>

      {/* <rect
        x={60}
        y={160}
        width={1045}
        height={715}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      /> */}

      {/* browser apis */}
      <rect
        x={1115}
        y={735}
        width={410}
        height={140}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />

      {/* HTML */}
      <rect
        x={60}
        y={800}
        width={750}
        height={35}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />

      {/* CSS */}
      <rect
        x={60}
        y={840}
        width={750}
        height={35}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* CSS parser */}
      <rect
        x={815}
        y={840}
        width={35}
        height={35}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* HTML parser */}
      <rect
        x={815}
        y={800}
        width={35}
        height={35}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* JS engine */}
      <rect
        x={815}
        y={350}
        width={35}
        height={445}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* JS memory */}
      <rect
        x={510}
        y={350}
        width={300}
        height={445}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* JS */}
      <rect
        x={60}
        y={350}
        width={445}
        height={445}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* JS callstack */}
      <rect
        x={320}
        y={160}
        width={185}
        height={185}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* <rect
        x={645}
        y={845}
        width={250}
        height={30}
        stroke="black"
        strokeWidth={1}
        fill={"none"}
      /> */}

      {/* cssom */}
      <rect
        x={855}
        y={840}
        width={250}
        height={35}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* dom */}
      <rect
        x={855}
        y={350}
        width={250}
        height={485}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />
      {/* address bar */}
      <rect
        x={1260}
        y={60}
        width={220}
        height={25}
        stroke="gray"
        strokeWidth={1}
        fill={"none"}
      />

      {/* lines to animate */}
      <Animations />
    </svg>
  );
};

const Arrow = ({ angle, top, left, id }) => {
  return (
    <g
      transform={`rotate(${angle})`}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <motion.path
        d={`M ${left - 5} ${top + 2} l 5 -4 l 5 4`}
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id={id}
      />
    </g>
  );
};

const handler = () => {
  console.log("ANI ENDED!");
};
const EventLoop = () => {
  return (
    <g>
      {/* start path */}
      <path
        d="M 195 175 h 228"
        stroke={`gray`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={2}
      />

      {/* loop path */}
      <path
        d="M 423 175 h 300 q 50 0 50 50 q 0 50 -50 50 h -300 q -50 0 -50 -50 q 0 -50 50 -50"
        stroke={`gray`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={2}
      />

      {/* end path */}
      <path
        d="M 423 175 h 507"
        stroke={`gray`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={2}
      />

      {/* <MoveCircleStart  />
      <MoveCircleEnd /> */}

      {/* <path
        d="M 200 175 h 730"
        stroke={`gray`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={2}
      /> */}
      {/* 00 */}
      {/* event loop circling */}
      {/* <MoveCircle cx={423} cy={175} r={7} fill={"red"} /> */}
      {/* <circle
        cx={600}
        cy={175}
        r={10}
        fill={"none"}
        stroke="red"
        strokeWidth={1}
      /> */}
    </g>
  );
};

const moveAlongPath = keyframes({
  "100%": { offsetDistance: "100%" },
});

const MoveCircleLoop = styled("circle", {
  // offsetPath: `path("M 0 0 h 300 q 50 0 50 50 q 0 50 -50 50 h -300 q -50 0 -50 -50 q 0 -50 50 -50 z")`,
  offsetPath: `path("M 60 10 h 300 q 50 0 50 50 q 0 50 -50 50 h -300 q -50 0 -50 -50 q 0 -50 50 -50 z")`,
  animation: `${moveAlongPath} 4s linear infinite`,
  cx: 0,
  cy: 0,
  r: 7,
  fill: "red",
});
const MoveCircleStart = styled("circle", {
  // offsetPath: `path("M 0 0 h 300 q 50 0 50 50 q 0 50 -50 50 h -300 q -50 0 -50 -50 q 0 -50 50 -50 z")`,
  offsetPath: `path("M 195 175 h 228")`,
  animation: `${moveAlongPath} 1.5s linear infinite`,
  cx: 0,
  cy: 0,
  r: 7,
  fill: "red",
});
const MoveCircleEnd = styled("circle", {
  // offsetPath: `path("M 0 0 h 300 q 50 0 50 50 q 0 50 -50 50 h -300 q -50 0 -50 -50 q 0 -50 50 -50 z")`,
  offsetPath: `path("M 423 175 h 507")`,
  animation: `${moveAlongPath} 2.5s linear infinite`,
  cx: 0,
  cy: 0,
  r: 7,
  fill: "red",
});

const resetting = ({ circle, path, arrow }) => {
  return [
    [circle, { r: 0 }, { duration: 0.1 }],
    [path, { pathLength: 0 }, { duration: 0.1, at: "<" }],
    [arrow, { pathLength: 0 }, { duration: 0.2 }],
  ];
};

const Animations = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // console.log("scope");
    console.dir(scope.current.querySelector(".content"));

    const addressToNetworkThread = (reset = false) => {
      const reverse = resetting({
        circle: "#s01c1",
        path: "#s01p1",
        arrow: "#s01a1",
      });

      const forward = [
        ["#s01c1", { r: 5 }, { at: "+0.2" }],
        [
          "#s01p1",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s01a1", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const networkThreadToNetwork = (reset = false) => {
      const reverse = resetting({
        circle: "#s01c2",
        path: "#s01p2",
        arrow: "#s01a2",
      });

      const forward = [
        ["#s01c2", { r: 5 }, { at: "+0.2" }],
        [
          "#s01p2",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s01a2", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      if (scope.current.querySelector("#s01c2").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };

    const networkToTaskQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s02c",
        path: "#s02p",
        arrow: "#s02a",
      });
      const forward = [
        ["#s02c", { r: 5 }, { at: "+0.2" }],
        [
          "#s02p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s02a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      if (scope.current.querySelector("#s02c").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };
    const taskQueueToTask = (reset = false) => {
      const reverse = resetting({
        circle: "#s03c",
        path: "#s03p",
        arrow: "#s03a",
      });
      const forward = [
        ["#s03c", { r: 5 }, { at: "+0.2" }],
        [
          "#s03p",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s03a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      if (scope.current.querySelector("#s03c").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };

    const taskToHTMLParse = (reset = false) => {
      const reverse = resetting({
        circle: "#s04c",
        path: "#s04p",
        arrow: "#s04a",
      });
      const forward = [
        ["#s04c", { r: 5 }, { at: "+0.2" }],
        [
          "#s04p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s04a", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      if (scope.current.querySelector("#s04c").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };

    const HTMLToDOM = (reset = false) => {
      const reverse = resetting({
        circle: "#s05c",
        path: "#s05p",
        arrow: "#s05a",
      });
      const forward = [
        ["#s05c", { r: 5 }, { at: "+0.2" }],
        [
          "#s05p",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s05a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const HTMLToNetworkThread = (reset = false) => {
      const reverse = [
        ["#s06p", { pathLength: 0 }, { duration: 0.1 }],
        ["#s06a", { pathLength: 0 }, { duration: 0.2 }],
      ];
      const forward = [
        [
          "#s06p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "+0.2" },
        ],
        ["#s06a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const HTMLToCSS = (reset = false) => {
      const reverse = [
        ["#s07p", { pathLength: 0 }, { duration: 0.1 }],
        ["#s07a", { pathLength: 0 }, { duration: 0.2 }],
      ];
      const forward = [
        [
          "#s07p",
          { pathLength: 1 },
          { duration: 0.3, ease: "easeInOut", at: "+0.2" },
        ],
        ["#s07a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const CSSToCSSOM = (reset = false) => {
      const reverse = resetting({
        circle: "#s08c",
        path: "#s08p",
        arrow: "#s08a",
      });
      const forward = [
        ["#s08c", { r: 5 }, { at: "+0.2" }],
        [
          "#s08p",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s08a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const HTMLToJS = (reset = false) => {
      const reverse = [
        ["#s09p", { pathLength: 0 }, { duration: 0.1 }],
        ["#s09a", { pathLength: 0 }, { duration: 0.2 }],
      ];
      const forward = [
        [
          "#s09p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "+0.2" },
        ],
        ["#s09a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const JSToMemory = (reset = false) => {
      const reverse = resetting({
        circle: "#s10c",
        path: "#s10p",
        arrow: "#s10a",
      });
      const forward = [
        ["#s10c", { r: 5 }, { at: "+0.2" }],
        [
          "#s10p",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s10a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const memoryToDOM = (reset = false) => {
      const reverse = resetting({
        circle: "#s11c",
        path: "#s11p",
        arrow: "#s11a",
      });
      const forward = [
        ["#s11c", { r: 5 }, { at: "+0.2" }],
        [
          "#s11p",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s11a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const RAFQueueToRAF = (reset = false) => {
      const reverse = resetting({
        circle: "#s26c",
        path: "#s26p",
        arrow: "#s26a",
      });
      const forward = [
        ["#s26c", { r: 5 }, { at: "runRAFQueueToRAF" }],
        [
          "#s26p",
          { pathLength: 1 },
          { duration: 0.8, ease: "easeInOut", at: "<" },
        ],
        ["#s26a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const renderPipeline = ({ raf, reset }) => {
      const isRAF = raf ? RAFQueueToRAF(reset) : [];

      const reverse = [
        ["#s12p1", { pathLength: 0 }, { duration: 0.1, at: "<" }],
        ["#s12p2", { pathLength: 0 }, { duration: 0.1, at: "<" }],
        ...isRAF,
      ];

      const forward = [
        "runRAFQueueToRAF",
        [
          "#s12p2",
          { pathLength: 1 },
          { duration: 1.5, ease: "easeInOut", at: "<" },
        ],
        [
          "#s12p1",
          { pathLength: 1 },
          { duration: 1.5, ease: "easeInOut", at: "<" },
        ],
        ...isRAF,
      ];
      if (reset) return reverse;
      return forward;
    };

    const DOMAndCSSOMToWindow = ({ raf, reset }) => {
      const reverse = [
        ["#s12c1", { r: 0 }, { duration: 0.1 }],
        ["#s12c2", { r: 0 }, { duration: 0.1, at: "<" }],
        ...renderPipeline({ raf, reset: true }),
        ["#s12a", { pathLength: 0 }, { duration: 0.2 }],
      ];
      const forward = [
        ["#s12c1", { r: 5 }, { at: "+0.2" }],
        ["#s12c2", { r: 5 }, { at: "<" }],
        ...renderPipeline({ raf, reset }),
        ["#s12a", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      if (scope.current.querySelector("#s12c1").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };

    const renderContent = (reset = false) => {
      const reverse = [[".content", { scale: 0 }]];
      const forward = [[".content", { scale: 1 }]];
      if (reset) return reverse;
      return forward;
    };

    const userEventToTaskQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s13c",
        path: "#s13p",
        arrow: "#s13a",
      });
      const forward = [
        ["#s13c", { r: 5 }, { at: "+0.2" }],
        [
          "#s13p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s13a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const taskToDOM = (reset = false) => {
      const reverse = resetting({
        circle: "#s14c",
        path: "#s14p",
        arrow: "#s14a",
      });
      const forward = [
        ["#s14c", { r: 5 }, { at: "+0.2" }],
        [
          "#s14p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s14a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const DOMToTaskQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s15c",
        path: "#s15p",
        arrow: "#s15a",
      });
      const forward = [
        ["#s15c", { r: 5 }, { at: "+0.2" }],
        [
          "#s15p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s15a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const taskToCallstack = (reset = false) => {
      const reverse = resetting({
        circle: "#s16c",
        path: "#s16p",
        arrow: "#s16a",
      });
      const forward = [
        ["#s16c", { r: 5 }, { at: "+0.2" }],
        [
          "#s16p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s16a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      if (scope.current.querySelector("#s16c").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };
    const callstackToJSThread = (reset = false) => {
      const reverse = resetting({
        circle: "#s17c1",
        path: "#s17p1",
        arrow: "#s17a1",
      });
      const forward = [
        ["#s17c1", { r: 5 }, { at: "+0.2" }],
        [
          "#s17p1",
          { pathLength: 1 },
          { duration: 0.3, ease: "easeInOut", at: "<" },
        ],
        ["#s17a1", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const callstackToJSThread2 = (reset = false) => {
      const reverse = resetting({
        circle: "#s17c2",
        path: "#s17p2",
        arrow: "#s17a2",
      });
      const forward = [
        ["#s17c2", { r: 5 }, { at: "+0.2" }],
        [
          "#s17p2",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s17a2", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const callstackToJSThread3 = (reset = false) => {
      const reverse = resetting({
        circle: "#s17c3",
        path: "#s17p3",
        arrow: "#s17a3",
      });
      const forward = [
        ["#s17c3", { r: 5 }, { at: "+0.2" }],
        [
          "#s17p3",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s17a3", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const JSThreadToMemory = (reset = false) => {
      const reverse = resetting({
        circle: "#s18c1",
        path: "#s18p1",
        arrow: "#s18a1",
      });
      const forward = [
        ["#s18c1", { r: 5 }, { at: "+0.2" }],
        [
          "#s18p1",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s18a1", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      return forward;
    };
    const JSThreadToMemory2 = (reset = false) => {
      const reverse = resetting({
        circle: "#s18c2",
        path: "#s18p2",
        arrow: "#s18a2",
      });
      const forward = [
        ["#s18c2", { r: 5 }, { at: "+0.2" }],
        [
          "#s18p2",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s18a2", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      return forward;
    };
    const JSThreadToMemory3 = (reset = false) => {
      const reverse = resetting({
        circle: "#s18c3",
        path: "#s18p3",
        arrow: "#s18a3",
      });
      const forward = [
        ["#s18c3", { r: 5 }, { at: "+0.2" }],
        [
          "#s18p3",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s18a3", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      return forward;
    };
    const JSThreadToMemory4 = (reset = false) => {
      const reverse = resetting({
        circle: "#s18c4",
        path: "#s18p4",
        arrow: "#s18a4",
      });
      const forward = [
        ["#s18c4", { r: 5 }, { at: "+0.2" }],
        [
          "#s18p4",
          { pathLength: 1 },
          { duration: 0.7, ease: "easeInOut", at: "<" },
        ],
        ["#s18a4", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      return forward;
    };
    const memoryToDOM2 = (reset = false) => {
      const reverse = resetting({
        circle: "#s19c",
        path: "#s19p",
        arrow: "#s19a",
      });
      const forward = [
        ["#s19c", { r: 5 }, { at: "+0.2" }],
        [
          "#s19p",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        ["#s19a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const memoryToAPIS = (reset = false) => {
      const reverse = resetting({
        circle: "#s20c1",
        path: "#s20p1",
        arrow: "#s20a1",
      });
      const forward = [
        ["#s20c1", { r: 5 }, { at: "+0.2" }],
        [
          "#s20p1",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s20a1", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const memoryToAPIS2 = (reset = false) => {
      const reverse = resetting({
        circle: "#s20c2",
        path: "#s20p2",
        arrow: "#s20a2",
      });
      const forward = [
        ["#s20c2", { r: 5 }, { at: "+0.2" }],
        [
          "#s20p2",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s20a2", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };
    const APISToTaskQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s22c2",
        path: "#s22p2",
        arrow: "#s22a2",
      });
      const forward = [
        ["#s22c2", { r: 5 }, { at: "+0.2" }],
        [
          "#s22p2",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s22a2", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const APISToMicroTaskQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s22c1",
        path: "#s22p1",
        arrow: "#s22a1",
      });
      const forward = [
        ["#s22c1", { r: 5 }, { at: "+0.2" }],
        "runAPISToNetwork",
        [
          "#s22p1",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s22a1", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const APISToNetwork = (reset = false) => {
      const reverse = [
        ["#s22p3", { pathLength: 0 }, { duration: 0.1 }],
        ["#s22a3", { pathLength: 0 }, { duration: 0.2 }],
      ];
      const forward = [
        [
          "#s22p3",
          { pathLength: 1 },
          { duration: 0.5, ease: "easeInOut", at: "runAPISToNetwork" },
        ],
        ["#s22a3", { pathLength: 1 }],
      ];

      if (reset) return reverse;
      return forward;
    };

    const combinedAPIS = (reset) => {
      return [...APISToMicroTaskQueue(reset), ...APISToNetwork(reset)];
    };

    const microTaskQueueToMicroTask = (reset = false) => {
      const reverse = resetting({
        circle: "#s21c",
        path: "#s21p",
        arrow: "#s21a",
      });
      const forward = [
        ["#s21c", { r: 5 }, { at: "+0.2" }],
        [
          "#s21p",
          { pathLength: 1 },
          { duration: 0.3, ease: "easeInOut", at: "<" },
        ],
        ["#s21a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      if (scope.current.querySelector("#s21c").r.animVal.value === 5) {
        return [...reverse, ...forward];
      }
      return forward;
    };

    const microTaskToCallstack = (reset = false) => {
      const reverse = resetting({
        circle: "#s23c",
        path: "#s23p",
        arrow: "#s23a",
      });
      const forward = [
        ["#s23c", { r: 5 }, { at: "+0.2" }],
        [
          "#s23p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s23a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const networkToMicroTaskQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s24c",
        path: "#s24p",
        arrow: "#s24a",
      });
      const forward = [
        ["#s24c", { r: 5 }, { at: "+0.2" }],
        [
          "#s24p",
          { pathLength: 1 },
          { duration: 1, ease: "easeInOut", at: "<" },
        ],
        ["#s24a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const memoryToRAFQueue = (reset = false) => {
      const reverse = resetting({
        circle: "#s25c",
        path: "#s25p",
        arrow: "#s25a",
      });
      const forward = [
        ["#s25c", { r: 5 }, { at: "+0.2" }],
        [
          "#s25p",
          { pathLength: 1 },
          { duration: 1.5, ease: "easeInOut", at: "<" },
        ],
        ["#s25a", { pathLength: 1 }],
      ];
      if (reset) return reverse;
      return forward;
    };

    const firstLoad = () => {
      const sequence = [
        addressToNetworkThread,
        networkThreadToNetwork,
        networkToTaskQueue,
        taskQueueToTask,
        taskToHTMLParse,
        HTMLToDOM,
        HTMLToNetworkThread,
        networkThreadToNetwork,
        networkToTaskQueue,
        taskQueueToTask,
        taskToHTMLParse,
        HTMLToCSS,
        CSSToCSSOM,
        HTMLToJS,
        JSToMemory,
        memoryToDOM,
        () => DOMAndCSSOMToWindow({ raf: false, reset: false }),
        renderContent,
      ];
      return sequence;
    };

    const userEvent = () => {
      const sequence = [
        userEventToTaskQueue,
        taskQueueToTask,
        taskToDOM,
        DOMToTaskQueue,
        taskQueueToTask,
        taskToCallstack,
        callstackToJSThread,
        JSThreadToMemory,
        memoryToDOM2,
        JSThreadToMemory2,
        memoryToAPIS,
        APISToTaskQueue,
      ];
      return sequence;
    };

    const processTask = () => {
      const sequence = [
        taskQueueToTask,
        taskToCallstack,
        callstackToJSThread2,
        JSThreadToMemory3,
        memoryToAPIS2,
        combinedAPIS,
        networkThreadToNetwork,
        networkToMicroTaskQueue,
      ];
      return sequence;
    };

    const processMicroTask = () => {
      const sequence = [
        microTaskQueueToMicroTask,
        microTaskToCallstack,
        callstackToJSThread3,
        JSThreadToMemory4,
        memoryToRAFQueue,
        () => DOMAndCSSOMToWindow({ raf: true, reset: false }),
      ];
      return sequence;
    };

    const objectsToReset = [
      addressToNetworkThread,
      networkThreadToNetwork,
      networkToTaskQueue,
      taskQueueToTask,
      taskToHTMLParse,
      HTMLToDOM,
      HTMLToNetworkThread,
      HTMLToCSS,
      CSSToCSSOM,
      HTMLToJS,
      JSToMemory,
      memoryToDOM,
      () => DOMAndCSSOMToWindow({ raf: false, reset: true }),
      renderContent,
      userEventToTaskQueue,
      taskToDOM,
      DOMToTaskQueue,
      taskToCallstack,
      callstackToJSThread,
      JSThreadToMemory,
      memoryToDOM2,
      JSThreadToMemory2,
      memoryToAPIS,
      APISToTaskQueue,
      callstackToJSThread2,
      JSThreadToMemory3,
      memoryToAPIS2,
      APISToNetwork,
      APISToMicroTaskQueue,
      networkToMicroTaskQueue,
      microTaskQueueToMicroTask,
      microTaskToCallstack,
      callstackToJSThread3,
      JSThreadToMemory4,
      memoryToRAFQueue,
      RAFQueueToRAF,
    ];

    const fullSequence = [
      ...firstLoad(),
      ...userEvent(),
      ...processTask(),
      ...processMicroTask(),
    ];

    const resetAllObjects = async () => {
      await animate(scope.current, { pathLength: 1 }, { delay: 3 });
      objectsToReset.map((a) => {
        animate(a(true));
      });
      await animate(scope.current, { pathLength: 1 }, { delay: 0.5 });
    };
    const showAllObjectsAtOnce = () => {
      fullSequence.map((a) => {
        animate(a());
      });
    };
    const playAnimations = async () => {
      showAllObjectsAtOnce();
      await resetAllObjects();
      playNextRounds();
    };
    const playNextRounds = async () => {
      for (const a of fullSequence) {
        await animate(a());
      }
      await resetAllObjects();
      await playNextRounds();
    };
    playAnimations();
  }, []);

  return (
    <g ref={scope}>
      {/* 01 */}
      {/* request html from address bar */}
      <Arrow angle={-90} top={45} left={720} id="s01a1" />
      <circle cx={1275} cy={75} r={0} fill={"red"} id="s01c1" />
      <motion.path
        d="M 1275 75 v -20 q 0 -10 -10 -10 h -545"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s01p1"
      />
      <Arrow angle={-90} top={45} left={85} id="s01a2" />
      <circle cx={705} cy={45} r={0} fill={"red"} id="s01c2" />
      <motion.path
        d="M 705 45 h -620"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s01p2"
      />
      {/* 02 */}
      {/* place network data onto task queue */}
      <Arrow angle={180} top={125} left={765} id="s02a" />
      <circle cx={125} cy={65} r={0} fill={"red"} id="s02c" />
      <motion.path
        d="M 125 65 h 630 q 10 0 10 10 v 50"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s02p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 03 */}
      {/* take task from task queue */}
      <Arrow angle={180} top={220} left={765} id="s03a" />
      <circle cx={765} cy={155} r={0} fill={"red"} id="s03c" />
      <motion.path
        d="M 765 155 v 65"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s03p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 04 */}
      {/* ping html parser to start parsing html file*/}
      <Arrow angle={180} top={805} left={765} id="s04a" />
      <circle cx={765} cy={245} r={0} fill={"red"} id="s04c" />
      <motion.path
        d="M 765 245 v 560"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s04p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 05 */}
      {/* html to dom */}
      <Arrow angle={90} top={815} left={920} id="s05a" />
      <motion.path
        d="M 770 815 h 150"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s05p"
        initial={{ pathLength: 0.001 }}
      />
      <circle cx={770} cy={815} r={0} fill={"red"} id="s05c" />

      {/* 06 ping network thread from html to download external resources - stylesheets, js files, imgs.. */}
      <Arrow angle={0} top={55} left={705} id="s06a" />
      <motion.path
        d="M 750 815 h -35 q -10 0 -10 -10 v -750"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s06p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 07 */}
      {/* ping css parser from html */}
      <Arrow angle={180} top={855} left={775} id="s07a" />
      <motion.path
        d="M 775 825 v 30"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s07p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 08 */}
      {/* css to cssom */}
      <Arrow angle={90} top={865} left={930} id="s08a" />
      <motion.path
        d="M 780 865 h 150"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s08p"
      />
      <circle cx={780} cy={865} r={0} fill={"red"} id="s08c" />

      {/* 09 */}
      {/* ping js engine to process js file */}
      <Arrow angle={0} top={585} left={380} id="s09a" />
      <motion.path
        d="M 750 825 h -360 q -10 0 -10 -10 v -230"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s09p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 10 */}
      {/* js to memory and dom */}
      <Arrow angle={90} top={565} left={580} id="s10a" />
      <circle cx={380} cy={565} r={0} fill={"red"} id="s10c" />
      <motion.path
        d="M 380 565 h 200"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s10p"
      />

      {/* 11 */}
      {/* js memory to dom */}
      <Arrow angle={90} top={565} left={880} id="s11a" />
      <circle cx={600} cy={565} r={0} fill={"red"} id="s11c" />
      <motion.path
        d="M 600 565 h 280"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s11p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 12 */}
      {/* render pipeline, from dom, cssom, render steps to window */}
      <Arrow angle={90} top={685} left={1285} id="s12a" />
      <circle cx={1065} cy={380} r={0} fill={"red"} id="s12c1" />
      <circle cx={1065} cy={855} r={0} fill={"red"} id="s12c2" />
      <motion.path
        d="M 1065 380 h 10 q 10 0 10 10 v 245 q 0 50 50 50 h 150"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s12p1"
      />
      <motion.path
        d="M 1065 855 h 10 q 10 0 10 -10 v -110 q 0 -50 50 -50 h 150"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s12p2"
      />

      {/* 13 */}
      {/* user interaction */}
      <Arrow angle={180} top={135} left={755} id="s13a" />
      <circle cx={175} cy={265} r={0} fill={"red"} id="s13c" />
      <motion.path
        d="M 175 265 h 80 q 10 0 10 -10 v -160 q 0 -10 10 -10 h 470 q 10 0 10 10 v 40"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s13p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 14 */}
      {/* change dom upon user event */}
      <Arrow angle={90} top={415} left={905} id="s14a" />
      <circle cx={865} cy={245} r={0} fill={"red"} id="s14c" />
      <motion.path
        d="M 865 245 v 160 q 0 10 10 10 h 30"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s14p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 15 */}
      {/* place event handler on task queue */}
      <Arrow angle={270} top={135} left={780} id="s15a" />
      <circle cx={920} cy={415} r={0} fill={"red"} id="s15c" />
      <motion.path
        d="M 920 415 v -270 q 0 -10 -10 -10 h -130"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s15p"
      />

      {/* 16 */}
      {/* place new function stack on stack */}
      <Arrow angle={270} top={295} left={370} id="s16a" />
      <circle cx={750} cy={245} r={0} fill={"red"} id="s16c" />
      <motion.path
        d="M 750 245 v 40 q 0 10 -10 10 h -370"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s16p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 17.1 */}
      {/* js callstack to js thread 1 */}
      <Arrow angle={180} top={485} left={360} id="s17a1" />
      <circle cx={360} cy={315} r={0} fill={"red"} id="s17c1" />
      <motion.path
        d="M 360 315 v 170 "
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s17p1"
        initial={{ pathLength: 0.001 }}
      />

      {/* 17.2 */}
      {/* js callstack to js thread 2 */}
      <Arrow angle={180} top={735} left={220} id="s17a2" />
      <circle cx={350} cy={305} r={0} fill={"red"} id="s17c2" />
      <motion.path
        d="M 350 305 v 100 q 0 10 -10 10 h -110 q -10 0 -10 10 v 310"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s17p2"
        initial={{ pathLength: 0.001 }}
      />

      {/* 17.3 */}
      {/* js callstack to js thread 3 */}
      <Arrow angle={180} top={470} left={380} id="s17a3" />
      <circle cx={380} cy={315} r={0} fill={"red"} id="s17c3" />
      <motion.path
        d="M 380 315 v 155 "
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s17p3"
        initial={{ pathLength: 0.001 }}
      />

      {/* 18 */}
      {/* js thread to memory */}
      <Arrow angle={90} top={500} left={630} id="s18a1" />
      <circle cx={360} cy={500} r={0} fill={"red"} id="s18c1" />
      <motion.path
        d="M 360 500 h 270 "
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s18p1"
      />
      {/* js thread to memory 2 */}
      <Arrow angle={90} top={520} left={650} id="s18a2" />
      <circle cx={380} cy={520} r={0} fill={"red"} id="s18c2" />
      <motion.path
        d="M 380 520 h 270 "
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s18p2"
      />
      {/* js thread to memory 3 */}
      <Arrow angle={90} top={755} left={620} id="s18a3" />
      <circle cx={220} cy={755} r={0} fill={"red"} id="s18c3" />
      <motion.path
        d="M 220 755 h 400"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s18p3"
      />
      {/* js thread to memory 4 */}
      <Arrow angle={90} top={485} left={650} id="s18a4" />
      <circle cx={380} cy={485} r={0} fill={"red"} id="s18c4" />
      <motion.path
        d="M 380 485 h 270"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s18p4"
      />

      {/* 19 */}
      {/* js memory to dom */}
      <Arrow angle={90} top={500} left={940} id="s19a" />
      <circle cx={650} cy={500} r={0} fill={"red"} id="s19c" />
      <motion.path
        d="M 650 500 h 290 "
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s19p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 20.1 */}
      {/* js memory to apis */}
      <Arrow angle={90} top={770} left={1150} id="s20a1" />
      <circle cx={670} cy={520} r={0} fill={"red"} id="s20c1" />
      <motion.path
        d="M 670 520 h 60 q 10 0 10 10 v 230 q 0 10 10 10 h 400"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s20p1"
      />
      {/* 20.2 */}
      {/* js memory to apis 2 */}
      <Arrow angle={90} top={755} left={1190} id="s20a2" />
      <circle cx={640} cy={755} r={0} fill={"red"} id="s20c2" />
      <motion.path
        d="M 640 755 h 550"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s20p2"
      />

      {/* 21 */}
      {/* take task from microtask queue */}
      <Arrow angle={180} top={220} left={985} id="s21a" />
      <circle cx={985} cy={155} r={0} fill={"red"} id="s21c"></circle>
      <motion.path
        d="M 985 155 v 65"
        stroke="red"
        strokeWidth={3}
        fill="none"
        initial={{ pathLength: 0.001 }}
        id="s21p"
      />

      {/* 22.1 */}
      {/* fetch to microtask queue */}
      <Arrow angle={270} top={145} left={990} id="s22a1" />
      <circle cx={1210} cy={755} r={0} fill={"red"} id="s22c1" />
      <motion.path
        d="M 1210 755 v -600 q 0 -10 -10 -10 h -210"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s22p1"
        initial={{ pathLength: 0.001 }}
      />
      {/* 22.3 */}
      {/* fetch to network */}
      <Arrow angle={0} top={55} left={1210} id="s22a3" />
      <motion.path
        d="M 1210 755 v -700 "
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s22p3"
        initial={{ pathLength: 0.001 }}
      />

      {/* 22.2 */}
      {/* timer to task queue */}
      <Arrow angle={270} top={165} left={790} id="s22a2" />
      <circle cx={1170} cy={770} r={0} fill={"red"} id="s22c2" />
      <motion.path
        d="M 1170 770 v -595 q 0 -10 -10 -10 h -370"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s22p2"
        initial={{ pathLength: 0.001 }}
      />

      {/* 23 */}
      {/* from microtask to js callstack */}
      <Arrow angle={270} top={305} left={390} id="s23a" />
      <circle cx={985} cy={245} r={0} fill={"red"} id="s23c" />
      <motion.path
        d="M 985 245 v 50 q 0 10 -10 10 h -585"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s23p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 24 */}
      {/* network to microtask queue */}
      <Arrow angle={180} top={135} left={985} id="s24a" />
      <circle cx={145} cy={75} r={0} fill={"red"} id="s24c" />
      <motion.path
        d="M 145 75 h 830 q 10 0 10 10 v 50"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s24p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 25 */}
      {/* js memory to raf queue */}
      <Arrow angle={90} top={105} left={1120} id="s25a" />
      <circle cx={670} cy={485} r={0} fill={"red"} id="s25c" />
      <motion.path
        d="M 670 485 h 150 q 10 0 10 -10 v -150 q 0 -10 10 -10 h 200 q 10 0 10 -10 v -190 q 0 -10 10 -10 h 60"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s25p"
        initial={{ pathLength: 0.001 }}
      />

      {/* 26 */}
      {/* take raf task to process */}
      <Arrow angle={180} top={670} left={1130} id="s26a" />
      <circle cx={1130} cy={175} r={0} fill={"red"} id="s26c" />
      <motion.path
        d="M 1130 175 v 495"
        stroke="red"
        strokeWidth={3}
        fill="none"
        id="s26p"
        initial={{ pathLength: 0.001 }}
      />
      {/* <circle cx={1130} cy={685} r={5} fill={"red"} /> */}

      {/* content */}
      <g>
        <motion.rect
          x={1270}
          y={115}
          width={260}
          height={40}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
          initial={{ scale: 0 }}
          className="content"
        />
        <motion.rect
          className="content"
          initial={{ scale: 0 }}
          x={1270}
          y={180}
          width={210}
          height={20}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <motion.rect
          className="content"
          initial={{ scale: 0 }}
          x={1270}
          y={210}
          width={260}
          height={30}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <motion.rect
          className="content"
          initial={{ scale: 0 }}
          x={1270}
          y={260}
          width={210}
          height={20}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <motion.rect
          className="content"
          initial={{ scale: 0 }}
          x={1270}
          y={290}
          width={260}
          height={30}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
        <motion.rect
          className="content"
          initial={{ scale: 0 }}
          x={1270}
          y={330}
          width={260}
          height={240}
          stroke="gray"
          strokeWidth={1}
          fill={"none"}
        />
      </g>
    </g>
  );
};
