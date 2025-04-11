import React from "react";
import { LoopShort, RenderPipeline } from "./background-expanded";

export const Background = ({
  color,
  showRender,
  showRAF,
  showLoop,
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
      width="1380"
      height="805"
      viewBox={`0 0 ${width} ${height}`}
      // style={{ background: "white" }}
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
        stroke="black"
        strokeWidth={4}
        // fill="none"
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
      {showLoop && (
        <LoopShort
          left={310}
          showRAF={showRAF}
          highlight={highlight}
          highlightColor={highlightColor}
        />
      )}
      {/* rendering steps */}
      {showRender && (
        <RenderPipeline
          showRAF={showRAF}
          showLoop={showLoop}
          left={1115}
          highlight={highlight}
          highlightColor={highlightColor}
        />
      )}
    </svg>
  );
};
