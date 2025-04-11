import React from "react";

export const Text = () => {
  return (
    <>
      <h2 style={{ fontFamily: "Oxanium", fontWeight: "bold" }}>
        Render Pipeline
      </h2>
      <p>
        Large part what a browser has to do is rendering - processing an HTML
        file so it can be displayed on the user's screen in the browser's
        window. It needs to create and output a 2D image, taking into account
        particular dimensions of the screen.
      </p>
      <p>Let's flesh out the browser's internals a bit more.</p>
      <p>
        HTML file arrives into the browser. Browser's HTML parser starts parsing
        it. It is a one way conversion process and the browser doesn't come back
        to the file once it is done. The parsing output creates something called
        a Document Object Model (DOM).
      </p>
      <p>
        DOM works like a representation (hence model) of a loaded text document
        (hence document). The HTML's file content gets split up at the tags into
        individual pieces - nodes, that get connected into a hierarchical tree
        structure (which is of type object - so abbreviated into DOM).
      </p>
      <p>
        Essentially DOM works like a list with all the elements, their types,
        their attributes and relationships among them, taken from HTML tags,
        neatly arranged together. It is retained in C++ memory for the duration
        the page is displayed. If there are any changes to be shown on the page
        - DOM's values and structure get mutated.
      </p>
      <p>
        The DOM gets projected by the browser using the computer's GPU on the
        screen.
      </p>
      <p>
        To be able to create the 2D image of an HTML page, the browser needs to
        know the specific dimensions of every DOM node on the page and project
        it on the one particular type of the user's screen, which can come from
        zillions of dimensions and resolutions.
      </p>
      <p>
        For every type of HTML tag the browser had defined default dimensions
        and styles - so when there is no provided CSS file from outside, it will
        take those default values. These default CSS values form a structure
        similar to DOM, so it is called a CSSOM.
      </p>
      <p>
        If there is a link in HTML file to a CSS file, the HTML parser ping
        another browser internal - the CSS parser - which reads the provided
        custom CSS and adds the definitions to the CSSOM.
      </p>
      <p>
        Then the browser combined the DOM and CCSOM together to form a render
        tree which contains computed dimensions for each node, takes user's
        screen dimensions and layes out the page. Together with the render
        engine the browser calculated a 2D image of the page and shoots it to
        the GPU to display. And voila, a page is displayed on the screen!
      </p>
      <p>
        The browser repeats this process (from combining DOM and CSSOM to
        calculating the 2D image) 60 times per second, depending on the user's
        screen refresh rate. This process is called the browser's render
        pipeline.
      </p>
      {/* <p>
        <span
          style={{
            background: "red",
            padding: " 0.1rem 0.3rem",
            borderRadius: "10rem",
            color: "white",
            fontSize: "0.8rem",
          }}
        >
          2
        </span>
      </p> */}
    </>
  );
};
