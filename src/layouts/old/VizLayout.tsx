import React from "react";

export const VizLayout = () => {
  return (
    <div>
      {/* minimize, expand */}
      <Text>
        <div>text for every section is different</div>
        <h2>03 Render pipeline</h2>
        <p>
          Large part what a browser has to do is rendering - processing a html
          so it can be displayed on the user{""}s screen in the browser{""}s
          window. It needs to create and output a 2D image, taking into account
          particular dimensions of the screen.
        </p>
      </Text>
      {/* if text minimized - viz expands */}
      {/* if text expanded - viz normal */}
      <Viz id="viz">Rest of Viz React by Live</Viz>
      {/* keeps the same size, same position */}
      {/* absolute? */}
      <Window id="client">
        <div>Live - Window</div>
        <Live>
          <App />
        </Live>
      </Window>
    </div>
  );
};

// const viz = (
//   <VizLayout>
//     {/* unique content, same layout */}
//     <Text>
//       <h2>01 Static Documents</h2>
//       <div>text for every section is different and unique</div>
//       <p>
//         Large part what a browser has to do is rendering - processing a html
//         so it can be displayed on the user{""}s screen in the browser{""}s
//         window. It needs to create and output a 2D image, taking into account
//         particular dimensions of the screen.
//       </p>
//     </Text>
//     {/* if text minimized - viz expands */}
//     {/* if text expanded - viz normal */}
//     {/* unique */}
//     <Viz id="viz">Rest of Viz React by Live</Viz>
//     {/* keeps the same size, same position */}
//     {/* absolute? */}
//     <Window id="client">
//       <div>Live - Window</div>
//       <Live>
//         <App />
//       </Live>
//     </Window>
//   </VizLayout>
// );
