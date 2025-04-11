import React from "react";

export const BackgroundExpanded = ({
  color,
  showRender,
  showRAF,
  showLoop,
}) => {
  const round = 15;
  const roundW = 60;
  const width = 2080;
  const height = 910;
  const padding = 25;
  const outline = 6;
  const wedgeW = 680;
  const wedgeH = 120;
  const overlap = 20;
  const moveR = 10;
  const moveD = 10;
  const windowH = 720;
  const windowW = 310;
  const moveWR = 15;
  const alignWindow = height / 2 - padding - windowH / 2;
  const moveWU = alignWindow + 20;
  const moveTabR = 40;

  return (
    <svg width="1840" height="805" viewBox={`0 0 ${width} ${height}`}>
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
            h${-(wedgeW / 2 + overlap * 2 - round * 2)}
            q${-round} 0 ${-round} ${round}
            v${wedgeH + overlap * 2 - round * 2}
            q 0 ${round} ${round} ${round}
            z
            `}
        stroke="black"
        strokeWidth={4}
        fill="#d3d2d2"
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
        stroke="black"
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
          stroke="black"
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
          stroke="black"
          strokeWidth={6}
          fill="none"
        />
      </g>
      {/* main loop */}
      {showLoop && <Loop left={710} />}
      {/* rendering steps */}
      {showRender && (
        <RenderPipeline showRAF={showRAF} showLoop={showLoop} left={1630} />
      )}
    </svg>
  );
};

export const Loop = ({ left, showRAF }) => {
  return (
    <svg x={left} y={55}>
      <path
        d="M 0 5 h 1050"
        stroke="black"
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <path
        d="M 0 12 h 1050"
        stroke="black"
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <path
        d="M 20 175 h 1030"
        stroke="black"
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <path
        d="M 538 175 q -50 0 -50 50 q 0 50 50 50 h 300 q 50 0 50 -50 q 0 -50 -50 -50"
        stroke="black"
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <foreignObject x="630" y="220" width="180" height="20">
        <div
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "0.8rem",
            fontFamily: "Oxanium",
            textTransform: "uppercase",
          }}
        >
          tasks processing
        </div>
      </foreignObject>
      <foreignObject x="290" y="17" width="100" height="130">
        <div
          style={{
            color: "black",
            fontSize: "0.8rem",

            fontFamily: "Oxanium",
            fontWeight: "700",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "flex-start",
            lineHeight: "0.9rem",
          }}
        >
          <p style={{ margin: 0, writingMode: "sideways-lr" }}>other threads</p>
          <p
            style={{
              margin: 0,
              writingMode: "sideways-lr",
              fontWeight: "400",
              fontSize: "0.7rem",
            }}
          >
            (network thread, ..)
          </p>
        </div>
      </foreignObject>
      <foreignObject x="290" y="180" width="20" height="120">
        <div
          style={{
            color: "black",
            writingMode: "sideways-lr",

            fontFamily: "Oxanium",
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          main thread
        </div>
      </foreignObject>
      {/* <path
    d="M 760 50 h 100 v 175 h -100 v -175 z"
    stroke="black"
    strokeWidth={2}
    fill="none"
    />
    <path
    d="M 760 190 h 100 v 35 h -100 v -35 z"
    stroke="black"
    strokeWidth={2}
    fill="none"
    /> */}

      <foreignObject x="548" y="0" width="130" height="155">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // "& li": {
            //   margin: 0,
            //   padding: 0,
            // },
            border: "1pt solid black",
            writingMode: "sideways-lr",
            padding: "0.5rem 0.2rem",

            background: "rgb(102,102,102, 90%)",
            fontFamily: "Oxanium",
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "white",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Oxanium",
              fontSize: "0.8rem",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            queues
          </p>
          <p style={{ margin: 0 }}>- events</p>
          <p style={{ margin: 0 }}>- parse HTML / CSS</p>
          <p style={{ margin: 0 }}>- DOM manipulation</p>
          <p style={{ margin: 0 }}>- JS processing</p>
          <p style={{ margin: 0 }}>- callbacks</p>
        </div>
      </foreignObject>
      <foreignObject x="680" y="20" width="80" height="110">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontSize: "0.8rem",
            fontFamily: "Nunito",
          }}
        >
          <p style={{ margin: 0, lineHeight: "0.9rem" }}>
            taking only one item, processing it and then moving on
          </p>
        </div>
      </foreignObject>
      <foreignObject x="805" y="20" width="105" height="120">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontSize: "0.8rem",
            fontFamily: "Nunito",
          }}
        >
          <p style={{ margin: 0, lineHeight: "0.9rem" }}>
            processed until completion, including any additional added items
            while processing {"-->"} can potentially block infinitely
          </p>
        </div>
      </foreignObject>
      <foreignObject x="952" y="20" width="90" height="130">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontSize: "0.8rem",
            fontFamily: "Nunito",
          }}
        >
          <p style={{ margin: 0, lineHeight: "0.9rem" }}>
            processed until completion, if items queued while processing, they
            are deferred to the next frame
          </p>
        </div>
      </foreignObject>
      <foreignObject x="548" y="160" width="128" height="35">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            border: "1pt solid black",
            background: "rgb(102,102,102, 90%)",
            fontFamily: "Oxanium",
            fontSize: "0.8rem",
            fontWeight: "700",
            color: "white",
            textTransform: "uppercase",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Task
        </div>
      </foreignObject>
      {/* <path
    d="M 960 50 h 100 v 175 h -100 v -175 z"
    stroke="black"
    strokeWidth={2}
    fill="none"
  /> */}
      <foreignObject x="773" y="0" width="30" height="155">
        <div
          style={{
            writingMode: "sideways-lr",
            // background: "#e6e6e6",
            height: "100%",
            background: "rgb(102,102,102, 90%)",
            border: "1pt solid black",

            fontFamily: "Oxanium",
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "white",

            padding: "0.5rem 0.2rem",
          }}
        >
          <p style={{ margin: 0 }}>
            microTask
            <span
              style={{
                fontWeight: "700",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              {" "}
              queue
            </span>
          </p>
        </div>
      </foreignObject>
      <foreignObject x="773" y="160" width="50" height="35">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            border: "1pt solid black",

            background: "rgb(102,102,102, 90%)",
            fontFamily: "Oxanium",
            fontSize: "0.8rem",
            fontWeight: "700",
            color: "white",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>μ</span>
          <span style={{ textTransform: "uppercase" }}>Task</span>
        </div>
      </foreignObject>

      {showRAF && (
        <foreignObject x="920" y="0" width="30" height="155">
          <div
            style={{
              writingMode: "sideways-lr",
              // background: "#e6e6e6",
              height: "100%",
              border: "1pt solid black",
              background: "rgb(102,102,102, 90%)",

              fontFamily: "Oxanium",
              fontSize: "0.9rem",
              fontWeight: "400",
              color: "white",

              padding: "0.5rem 0.2rem",
            }}
          >
            <p style={{ margin: 0 }}>
              ani. callback{" "}
              <span
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
              >
                {" "}
                queue
              </span>
            </p>
          </div>
        </foreignObject>
      )}
    </svg>
  );
};

export const LoopShort = ({ left, showRAF, highlight, highlightColor }) => {
  return (
    <svg x={left} y={55}>
      <path
        d="M 0 5 h 930"
        stroke={`${highlight === "loop" ? highlightColor : "black"}`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <path
        d="M 0 12 h 930"
        stroke={`${highlight === "loop" ? highlightColor : "black"}`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <path
        d="M 5 175 h 930"
        stroke={`${highlight === "loop" ? highlightColor : "black"}`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <path
        d="M 423 175 q -50 0 -50 50 q 0 50 50 50 h 300 q 50 0 50 -50 q 0 -50 -50 -50"
        stroke={`${highlight === "loop" ? highlightColor : "black"}`}
        strokeWidth={5}
        fill="none"
        strokeDasharray={(1, 2)}
      />
      <foreignObject x="515" y="220" width="180" height="20">
        <div
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "0.8rem",
            fontFamily: "Oxanium",
            textTransform: "uppercase",
          }}
        >
          tasks processing
        </div>
      </foreignObject>
      <foreignObject x="245" y="17" width="100" height="130">
        <div
          style={{
            color: "black",
            fontSize: "0.8rem",

            fontFamily: "Oxanium",
            fontWeight: "700",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "flex-start",
            lineHeight: "0.9rem",
          }}
        >
          <p style={{ margin: 0, writingMode: "sideways-lr" }}>other threads</p>
          <p
            style={{
              margin: 0,
              writingMode: "sideways-lr",
              fontWeight: "400",
              fontSize: "0.7rem",
            }}
          >
            (network thread, ..)
          </p>
        </div>
      </foreignObject>
      <foreignObject x="260" y="180" width="20" height="120">
        <div
          style={{
            color: "black",
            writingMode: "sideways-lr",

            fontFamily: "Oxanium",
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          main thread
        </div>
      </foreignObject>
      {/* <path
    d="M 760 50 h 100 v 175 h -100 v -175 z"
    stroke="black"
    strokeWidth={2}
    fill="none"
    />
    <path
    d="M 760 190 h 100 v 35 h -100 v -35 z"
    stroke="black"
    strokeWidth={2}
    fill="none"
    /> */}

      <foreignObject x="433" y="0" width="130" height="155">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // "& li": {
            //   margin: 0,
            //   padding: 0,
            // },
            border: "1pt solid black",
            writingMode: "sideways-lr",
            padding: "0.5rem 0.2rem",

            // background: "rgb(102,102,102, 90%)",
            fontFamily: "Oxanium",
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "white",

            background: `${
              highlight === "loop" ? highlightColor : "rgb(102,102,102, 90%)"
            }`,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Oxanium",
              fontSize: "0.8rem",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            queues
          </p>
          <p style={{ margin: 0 }}>- events</p>
          <p style={{ margin: 0 }}>- parse HTML / CSS</p>
          <p style={{ margin: 0 }}>- DOM manipulation</p>
          <p style={{ margin: 0 }}>- JS processing</p>
          <p style={{ margin: 0 }}>- callbacks</p>
        </div>
      </foreignObject>
      <foreignObject x="565" y="20" width="80" height="110">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontSize: "0.8rem",
            fontFamily: "Nunito",
          }}
        >
          <p style={{ margin: 0, lineHeight: "0.9rem" }}>
            taking only one item, processing it and then moving on
          </p>
        </div>
      </foreignObject>
      <foreignObject x="690" y="20" width="105" height="120">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontSize: "0.8rem",
            fontFamily: "Nunito",
          }}
        >
          <p style={{ margin: 0, lineHeight: "0.9rem" }}>
            processed until completion, including any additional added items
            while processing {"-->"} can potentially block infinitely
          </p>
        </div>
      </foreignObject>
      {showRAF && (
        <foreignObject x="837" y="20" width="90" height="130">
          <div
            style={{
              // background: "#e6e6e6",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              fontSize: "0.8rem",
              fontFamily: "Nunito",
            }}
          >
            <p style={{ margin: 0, lineHeight: "0.9rem" }}>
              processed until completion, if items queued while processing, they
              are deferred to the next frame
            </p>
          </div>
        </foreignObject>
      )}
      <foreignObject x="433" y="160" width="128" height="35">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            border: "1pt solid black",
            // background: "rgb(102,102,102, 90%)",
            fontFamily: "Oxanium",
            fontSize: "0.8rem",
            fontWeight: "700",
            color: "white",
            textTransform: "uppercase",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `${
              highlight === "loop" ? highlightColor : "rgb(102,102,102, 90%)"
            }`,
          }}
        >
          Task
        </div>
      </foreignObject>
      {/* <path
    d="M 960 50 h 100 v 175 h -100 v -175 z"
    stroke="black"
    strokeWidth={2}
    fill="none"
  /> */}
      <foreignObject x="658" y="0" width="30" height="155">
        <div
          style={{
            writingMode: "sideways-lr",
            // background: "#e6e6e6",
            height: "100%",
            // background: "rgb(102,102,102, 90%)",
            border: "1pt solid black",

            fontFamily: "Oxanium",
            fontSize: "0.9rem",
            fontWeight: "400",
            color: "white",

            padding: "0.5rem 0.2rem",
            background: `${
              highlight === "loop" ? highlightColor : "rgb(102,102,102, 90%)"
            }`,
          }}
        >
          <p style={{ margin: 0 }}>
            microTask
            <span
              style={{
                fontWeight: "700",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              {" "}
              queue
            </span>
          </p>
        </div>
      </foreignObject>
      <foreignObject x="658" y="160" width="50" height="35">
        <div
          style={{
            // background: "#e6e6e6",
            height: "100%",
            border: "1pt solid black",

            // background: "rgb(102,102,102, 90%)",
            fontFamily: "Oxanium",
            fontSize: "0.8rem",
            fontWeight: "700",
            color: "white",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `${
              highlight === "loop" ? highlightColor : "rgb(102,102,102, 90%)"
            }`,
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>μ</span>
          <span style={{ textTransform: "uppercase" }}>Task</span>
        </div>
      </foreignObject>
      {showRAF && (
        <foreignObject x="805" y="0" width="30" height="155">
          <div
            style={{
              writingMode: "sideways-lr",
              // background: "#e6e6e6",
              height: "100%",
              border: "1pt solid black",
              // background: "rgb(102,102,102, 90%)",

              fontFamily: "Oxanium",
              fontSize: "0.9rem",
              fontWeight: "400",
              color: "white",

              padding: "0.5rem 0.2rem",

              background: `${
                highlight === "JS" ? highlightColor : "rgb(102,102,102, 90%)"
              }`,
            }}
          >
            <p style={{ margin: 0 }}>
              ani. callback{" "}
              <span
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
              >
                {" "}
                queue
              </span>
            </p>
          </div>
        </foreignObject>
      )}
    </svg>
  );
};

export const RenderPipeline = ({
  showRAF,
  showLoop,
  left,
  highlight,
  highlightColor,
}) => {
  return (
    <>
      <svg x={left} y={215}>
        <foreignObject
          x="0"
          y="0"
          width="120"
          height="510"
          // style={{ background: "red" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              fontFamily: "Oxanium",
              gap: "0.2rem",
              height: "100%",
            }}
          >
            {showRAF && (
              <div
                style={{
                  border: "1pt solid black",
                  display: "flex",
                  // background: "rgb(102,102,102, 90%)",
                  justifyContent: "center",
                  background: `${
                    highlight === "JS"
                      ? highlightColor
                      : "rgb(102,102,102, 90%)"
                  }`,
                }}
              >
                <div
                  style={{
                    alignSelf: "flex-start",
                    writingMode: "sideways-lr",
                    fontFamily: "Oxanium",
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    color: "white",
                    textTransform: "uppercase",
                    padding: " 1rem 0",
                  }}
                >
                  request animation frame
                </div>
              </div>
            )}
            <div
              style={{
                writingMode: "sideways-lr",
                border: "1pt solid black",
                display: "flex",
                alignItems: "center",
                gridColumn: "2 / 3",
                background: `${highlight === "pipeline" ? highlightColor : ""}`,
                color: `${highlight === "pipeline" ? "white" : "black"}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Oxanium",
                  paddingBottom: "2.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "Oxanium",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  RENDER
                </span>
                <span style={{ fontSize: "0.9rem" }}>
                  {" "}
                  - render tree with computed styles
                </span>
              </p>
            </div>
            <div
              style={{
                writingMode: "sideways-lr",
                border: "1pt solid black",
                display: "flex",
                alignItems: "center",
                background: `${highlight === "pipeline" ? highlightColor : ""}`,
                color: `${highlight === "pipeline" ? "white" : "black"}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Oxanium",
                  paddingBottom: "2.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "Oxanium",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  RENDER
                </span>
                <span style={{ fontSize: "0.9rem" }}>
                  {" "}
                  - layout & render engine - compositor
                </span>
              </p>
            </div>
            <div
              style={{
                writingMode: "sideways-lr",
                border: "1pt solid black",
                display: "flex",
                alignItems: "center",
                background: `${highlight === "pipeline" ? highlightColor : ""}`,
                color: `${highlight === "pipeline" ? "white" : "black"}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Oxanium",
                  paddingBottom: "2.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "Oxanium",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  RENDER
                </span>
                <span style={{ fontSize: "0.9rem" }}> - GPU paint</span>
              </p>
            </div>
          </div>
        </foreignObject>
      </svg>
      {showLoop && (
        <>
          <rect
            x={left - 12}
            y={190}
            width={4}
            height={150}
            fill={`${highlight === "loop" ? highlightColor : "black"}`}
          />
          <rect
            x={left - 515}
            y={190}
            width={4}
            height={150}
            fill={`${highlight === "loop" ? highlightColor : "black"}`}
          />
          <svg x={left - 505} y={215}>
            <rect
              x={39}
              y={0}
              width={10}
              height={120}
              stroke="black"
              strokeWidth={1}
              fill={"none"}
            />

            <rect
              x={26}
              y={0}
              width={10}
              height={120}
              fill={"none"}
              stroke="black"
              strokeWidth={1}
            />

            <rect
              x={13}
              y={0}
              width={10}
              height={120}
              fill={"none"}
              stroke="black"
              strokeWidth={1}
            />

            {showRAF && (
              <g>
                <rect
                  x={0}
                  y={0}
                  width={10}
                  height={120}
                  fill={
                    highlight === "JS"
                      ? highlightColor
                      : "rgb(102,102,102, 90%)"
                  }
                  stroke="black"
                  strokeWidth={1}
                />
              </g>
            )}
          </svg>
        </>
      )}
    </>
  );
};
