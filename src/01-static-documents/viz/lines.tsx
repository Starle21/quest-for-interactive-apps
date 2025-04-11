import React from "react";

export const Lines = () => {
  return (
    <svg width="1382" height="806" viewBox={`0 0 1560 910`}>
      <g>
        <path
          d="M 1275 97 v 190 q 0 50 -50 50 h -900 q -50 0 -50 -50 v -120"
          stroke="red"
          strokeWidth={2}
          fill="none"
          strokeDasharray={2}
        />
        <path
          d="M 270 170 l 5 -4 l 5 4"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
        <circle cx={1275} cy={97} r={9} fill="red"></circle>
        <foreignObject x="1271" y="87" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            1
          </div>
        </foreignObject>
      </g>
      <g>
        <path
          d="M 85 165 v 225 q 0 50 50 50 h 1150"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
        <path
          d="M 1280 436 l 5 4 l -5 4"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
        <circle cx={85} cy={250} r={9} fill="red"></circle>
        <foreignObject x="81" y="240" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            2
          </div>
        </foreignObject>
        <circle cx={650} cy={440} r={9} fill="red"></circle>
        <foreignObject x="646" y="430" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            3
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};
