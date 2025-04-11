import React from "react";

export const IntroLayout = () => {
  return (
    // over viz - transparent behind graphics part
    <div>
      <Text>
        <div>text for every section is different</div>
        <h2>03 Render pipeline intro</h2>
        <p>
          Large part what a browser has to do is rendering - processing a html
          so it can be displayed on the user{""}s screen in the browser{""}s
          window. It needs to create and output a 2D image, taking into account
          particular dimensions of the screen.
        </p>
      </Text>
      <div>Graphics here</div>
      <Text>
        <div>text for every section is different</div>
        <h2>03 Render pipeline intro</h2>
        <p>
          Large part what a browser has to do is rendering - processing a html
          so it can be displayed on the user{""}s screen in the browser{""}s
          window. It needs to create and output a 2D image, taking into account
          particular dimensions of the screen.
        </p>
      </Text>
      <div>Graphics here</div>
    </div>
  );
};
