import React from "react";

export const Lines = (props) => {
  return (
    <svg width="1382" height="806" viewBox={`0 0 1560 910`}>
      <circle cx={1177} cy={725} r={9} fill="red"></circle>
      <circle cx={1235} cy={725} r={9} fill="red"></circle>

      <g>
        <path
          d="M 1285 97 h -100 q -50 0 -50 50 v 120 q 0 50 -50 50 h -760 q -50 0 -50 -50 v -100"
          stroke="red"
          strokeWidth={2}
          fill="none"
          strokeDasharray={(1, 2)}
        />
        <path
          d="M 270 170 l 5 -4 l 5 4"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
        <circle cx={1285} cy={97} r={9} fill="red"></circle>
        <foreignObject x="1281" y="87" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            1
          </div>
        </foreignObject>
      </g>

      <g>
        <path
          d="M 740 380 v 410 h 170"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />

        <circle cx={740} cy={790} r={9} fill="red"></circle>
        <circle cx={910} cy={790} r={9} fill="red"></circle>
        <foreignObject x="736" y="780" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            5
          </div>
        </foreignObject>
        <foreignObject x="906" y="780" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            6
          </div>
        </foreignObject>
      </g>

      <path
        d="M 1110 380 h 10 q 10 0 10 10 v 285 q 0 50 50 50 h 150"
        stroke="red"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M 1110 790 h 10 q 10 0 10 -10 v -5 q 0 -50 50 -50 h 150"
        stroke="red"
        strokeWidth={2}
        fill="none"
      />

      <g>
        <path
          d="M 90 165 v 165 q 0 50 50 50 h 770"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
        <path
          d="M 600 376 l 5 4 l -5 4"
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
        <circle cx={90} cy={250} r={9} fill="red"></circle>
        <foreignObject x="86" y="240" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            2
          </div>
        </foreignObject>

        <circle cx={740} cy={380} r={9} fill="red"></circle>
        <foreignObject x="736" y="370" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            3
          </div>
        </foreignObject>

        <circle cx={910} cy={380} r={9} fill="red"></circle>
        <foreignObject x="906" y="370" width="8" height="15">
          <div
            style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}
          >
            4
          </div>
        </foreignObject>
      </g>

      <foreignObject x="1173" y="715" width="8" height="15">
        <div style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}>
          7
        </div>
      </foreignObject>
      <foreignObject x="1231" y="715" width="8" height="15">
        <div style={{ fontWeight: "bold", color: "white", fontSize: "0.7rem" }}>
          8
        </div>
      </foreignObject>
    </svg>
  );
};
