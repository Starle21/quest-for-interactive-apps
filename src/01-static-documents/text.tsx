import React from "react";

export const Text = () => {
  return (
    <>
      <h2 style={{ fontFamily: "Oxanium" }}>Static Documents</h2>
      <p>
        Browsers were designed to handle static text documents that are loaded
        over a network and connected with links.
      </p>
      <p>
        Clicking a link is like turning a page in a book - the whole screen
        refreshes with a new page of a document. That was pretty much the only
        interactivity browsers provided to users.
      </p>
      <p>
        In the background, the browser's internals, which are written in C++
        language, are given a text file in the HTML format. It usually gets
        downloaded from a different computer somewhere on the network
        <span
          style={{
            background: "red",
            padding: " 0.1rem 0.3rem",
            borderRadius: "7rem",
            color: "white",
            fontSize: "0.7rem",
          }}
        >
          2
        </span>
        , after we type into the browser's address bar the computer's address{" "}
        <span
          style={{
            background: "red",
            padding: " 0.1rem 0.3rem",
            borderRadius: "7rem",
            color: "white",
            fontSize: "0.7rem",
          }}
        >
          1
        </span>{" "}
        {"("}or we can open in the browser the HTML file stored on out
        computer's hard drive{")"} The browser reads the file {"("}parses it{" "}
        <span
          style={{
            background: "red",
            padding: " 0.1rem 0.3rem",
            borderRadius: "7rem",
            color: "white",
            fontSize: "0.7rem",
          }}
        >
          3
        </span>
        {")"} and displays it on the screen.
      </p>
      <p>
        When you click on the link, the process repeats - a new HTML document is
        requested, downloaded, parsed, processed and displayed.
      </p>
    </>
  );
};
