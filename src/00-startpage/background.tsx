import React from "react";
import * as motion from "motion/react-client";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export const Background = () => {
  const round = 15;
  const roundW = 60;
  const width = 1170;
  const height = 910;
  const padding = 25;
  const outline = 6;
  const wedgeW = 280;
  const wedgeH = 315;
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
    <svg
      width="1035"
      height="805"
      // height="805"
      viewBox={`0 0 ${width} ${height}`}
      // style={{ background: "white" }}
      // preserveAspectRatio="xMaxYMin meet"
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
      {/* <path
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
        stroke="black"
        strokeWidth={4}
        // fill="none"
        fill="white"
      /> */}
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
      {/* <path
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
      /> */}
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
          fill="#e2e0db"
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
      <motion.path
        d="M 1100 297 v 190 q 0 50 -50 50 h -900 q -50 0 -50 -50 v -120"
        stroke="red"
        strokeWidth={4}
        fill="none"
        // strokeDasharray={2}
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        transition={transition}
      />
      {/* main loop */}
      {/* {showLoop && (
        <g>
          <path
            d="M 312 60 h 930"
            stroke="black"
            strokeWidth={5}
            fill="none"
            strokeDasharray={(1, 2)}
          />
          <path
            d="M 312 67 h 930"
            stroke="black"
            strokeWidth={5}
            fill="none"
            strokeDasharray={(1, 2)}
          />
          <path
            d="M 312 215 h 930"
            stroke="black"
            strokeWidth={5}
            fill="none"
            strokeDasharray={(1, 2)}
          />
          <path
            d="M 750 215 q -50 0 -50 50 q 0 50 50 50 h 300 q 50 0 50 -50 q 0 -50 -50 -50"
            stroke="black"
            strokeWidth={5}
            fill="none"
            strokeDasharray={(1, 2)}
          />
          <foreignObject x="850" y="255" width="180" height="20">
            <div
              style={{ fontWeight: "bold", color: "black", fontSize: "0.9rem" }}
            >
              task processing
            </div>
          </foreignObject>
          <foreignObject x="315" y="80" width="100" height="120">
            <div
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "0.8rem",
                writingMode: "sideways-lr",
              }}
            >
              <p style={{ margin: 0 }}>other threads</p>
              <p style={{ margin: 0 }}>(network thread)</p>
            </div>
          </foreignObject>
          <foreignObject x="315" y="230" width="20" height="120">
            <div
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "0.8rem",
                writingMode: "sideways-lr",
              }}
            >
              main thread
            </div>
          </foreignObject>


          <foreignObject x="760" y="50" width="110" height="135">
            <div
              style={{
                background: "#e6e6e6",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                fontSize: "0.7rem",
                // "& li": {
                //   margin: 0,
                //   padding: 0,
                // },
              }}
            >
              <p style={{ margin: 0 }}>queues:</p>
              <p style={{ margin: 0 }}>- events</p>
              <p style={{ margin: 0 }}>- parse HTML/CSS</p>
              <p style={{ margin: 0 }}>- DOM manipulation</p>
              <p style={{ margin: 0 }}>- JS processing</p>
              <p style={{ margin: 0 }}>- callbacks</p>
            </div>
          </foreignObject>
          <foreignObject x="760" y="190" width="110" height="35">
            <div
              style={{
                background: "#e6e6e6",
                height: "100%",
              }}
            >
              Task
            </div>
          </foreignObject>

          <foreignObject x="965" y="50" width="20" height="135">
            <div
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "0.8rem",
                writingMode: "sideways-lr",
                background: "#e6e6e6",
                height: "100%",
              }}
            >
              <p style={{ margin: 0 }}>microTask queue</p>
            </div>
          </foreignObject>
          <foreignObject x="960" y="190" width="50" height="35">
            <div
              style={{
                background: "#e6e6e6",
                height: "100%",
              }}
            >
              μTask
            </div>
          </foreignObject>
        </g>
      )} */}
      {/* rendering steps */}
      {/* {showRender && (
        <g>
          <rect x={1205} y={200} width={25} height={525} fill={"#8668ac"} />
          <foreignObject x="1205" y="200" width="25" height="525">
            <div
              style={{
                fontWeight: "bold",
                // color: "white",
                fontSize: "0.9rem",
                display: "flex",
                height: "100%",
              }}
            >
              <p
                style={{
                  // transform: "rotate(180deg)",
                  // textOrientation: "sideways",
                  writingMode: "sideways-lr",
                  margin: 0,
                  width: "100%",
                  marginBottom: "2rem",
                }}
              >
                GPU paint
              </p>
            </div>
          </foreignObject>
          <rect x={1175} y={200} width={25} height={525} fill={"#667c8a"} />
          <foreignObject x="1175" y="200" width="25" height="525">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                display: "flex",
                height: "100%",
              }}
            >
              <p
                style={{
                  // transform: "rotate(180deg)",
                  // textOrientation: "sideways",
                  writingMode: "sideways-lr",
                  margin: 0,
                  width: "100%",
                  marginBottom: "2rem",
                }}
              >
                layout & render engine - compositor
              </p>
            </div>
          </foreignObject>
          <rect x={1145} y={200} width={25} height={525} fill={"#667c8a"} />
          <foreignObject x="1145" y="200" width="25" height="525">
            <div
              style={{
                fontWeight: "bold",
                // color: "white",
                fontSize: "0.9rem",
                display: "flex",
                height: "100%",
              }}
            >
              <p
                style={{
                  // transform: "rotate(180deg)",
                  // textOrientation: "sideways",
                  writingMode: "sideways-lr",
                  margin: 0,
                  width: "100%",
                  marginBottom: "2rem",
                }}
              >
                render tree with computed styles
              </p>
            </div>
          </foreignObject>
          {showRAF && (
            <g>
              <rect x={1115} y={200} width={25} height={525} fill={"#586385"} />
              <foreignObject x="1115" y="200" width="25" height="525">
                <div
                  style={{
                    fontWeight: "bold",
                    // color: "white",
                    fontSize: "0.9rem",
                    display: "flex",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      // transform: "rotate(180deg)",
                      // textOrientation: "sideways",
                      writingMode: "sideways-lr",
                      margin: 0,
                      width: "100%",
                      marginBottom: "2rem",
                    }}
                  >
                    request animation frame
                  </p>
                </div>
              </foreignObject>
            </g>
          )}
        </g>
      )} */}
    </svg>
  );
};
