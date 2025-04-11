import React from "react";
// import { Background } from "./background";
import { styled } from "@stitches/react";
import { globalCss } from "@stitches/core";
import { ButtonLine } from "../navigation/navigation-bar";
import { Background } from "./background-ani";

const isDevelopment = process.env.NODE_ENV === "development";
const PRODPATH = "/projects/quest-for-interactive-apps";

export const Intro = ({ sections, linkTo }) => {
  const sectionsToShow = sections.slice(0, -1);
  console.log("sections", sectionsToShow);

  globalStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
        background: "#eeeeee",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${
            isDevelopment ? "" : PRODPATH
          }/textures/noise.png)`,
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          mixBlendMode: "hard-light",
        }}
      ></div>

      {/* navigation */}
      <nav
        style={{
          borderBottom: "1px solid black",
          height: "3rem",
          fontFamily: "Oxanium",
        }}
      >
        <Responsive>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              height: "100%",
              margin: "0 0.5rem",
              fontSize: "0.8rem",
            }}
          >
            <a
              href="https://www.wholessence.cz"
              style={{ color: "black", maxWidth: "8rem", width: "8rem" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg height={"1rem"} width={"0.5rem"}>
                  <path
                    d="M 3 0 v 170"
                    stroke="var(--highlight-color)"
                    strokeWidth={7}
                  />
                </svg>
                <span>←</span>
                <span>wholessence</span>
              </div>
            </a>
            <div style={{ color: "gray" }}>#project</div>
            <div style={{ color: "gray" }}>#explainer</div>
          </div>
        </Responsive>
      </nav>
      <Responsive>
        <header>
          <div className="headerTitle">
            <h1 style={{ marginBottom: 0 }}>
              <div className="first">
                <span className="content">Quest</span>
              </div>
              <div className="secondthird">
                <div className="second">
                  <span className="content">for interactive apps</span>
                </div>
                <div className="third">
                  <span className="content">in the browser</span>
                </div>
              </div>
            </h1>
            <div className="subtitle">
              <div>from static documents</div>
              <div>to changeable apps</div>
            </div>
          </div>
          <div className="browser">
            <div>
              <Background color={"white"} />
            </div>
          </div>
          <div className="headingText">
            <p>
              I find it a kind of a trick of evolution that we run complex
              applications in browsers today (2025).
            </p>
            <p>Browsers were not designed for that.</p>
            <p>
              But today's browsers are used as whole runtime environments for
              such apps. Applications written for them are competing with
              classic ones that run directly over an operating system layer.
            </p>
            <p>
              So how do we go about developing complex interactive real-time
              apps when browsers used to display only static documents? What it
              takes to make browser page move and change in response to a user
              interacting with it? Do you wonder what the mess of animation on
              the right is about?
            </p>
            <p>Let's find out.</p>
          </div>
        </header>
        <main
          style={{
            fontFamily: "Nunito",
            margin: "5rem 1rem 5rem 1rem",
          }}
        >
          <div
            style={{
              marginTop: "5rem",
              fontSize: "1rem",
              maxWidth: "90rem",
              margin: "0 auto",
            }}
          >
            <section
              style={{
                fontFamily: "Nunito",
                margin: "2rem 0",
                position: "relative",
              }}
            >
              <div className="aifree">
                <img
                  src={`${isDevelopment ? "" : PRODPATH}/images/ai-free.png`}
                  alt="ai free content"
                />
              </div>
              <h3 style={{ fontFamily: "Oxanium", color: "#333333" }}>
                contents
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.5rem",
                  position: "relative",
                  background: "radial-gradient(#eeeeee,rgb(238,238,238,5%))",
                }}
              >
                <div
                  style={{
                    background:
                      "radial-gradient(rgb(207, 142, 67), rgb(238,238,238,5%))",
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    mixBlendMode: "hard-light",
                    opacity: "15%",
                  }}
                ></div>
                <svg height={"0.5rem"} width={"100%"} viewBox="0 0 200 1">
                  <path
                    d="M 0 0.5 h 300"
                    stroke={"#cccccc"}
                    strokeWidth={0.5}
                    strokeDasharray={0.5}
                  ></path>
                </svg>
                <div style={{ margin: "1rem 2rem", color: "rgb(126,16,14)" }}>
                  <p>
                    The content is a draft under development. Only a subset of
                    pages is available. Access the available pages through the
                    enabled links.
                  </p>
                  <p style={{ marginBottom: "0" }}>
                    Status codes of the available sections:
                  </p>
                  <p
                    style={{
                      fontFamily: "Menlo",
                      marginTop: "0",
                      marginLeft: "5rem",
                    }}
                  >
                    static draft, parts of animation working, full draft,
                    polished
                  </p>
                  <p>
                    The schema is not responsive. Developed for 1920x1080px
                    screen on Chromium based browser. Use compatible setup.
                  </p>
                </div>
                <svg height={"0.5rem"} width={"100%"} viewBox="0 0 200 1">
                  <path
                    d="M 0 0.5 h 300"
                    stroke={"#cccccc"}
                    strokeWidth={0.5}
                    strokeDasharray={0.5}
                  ></path>
                </svg>
              </div>
            </section>
            <section
              style={{
                overflow: "auto",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <section
                style={{ maxWidth: "25rem", marginTop: "1rem", zIndex: "10" }}
              >
                <h3 style={{ fontFamily: "Oxanium", color: "#333333" }}>
                  digging into browser parts
                </h3>

                <Sections sections={sections} from={1} to={6} linkTo={linkTo} />
              </section>
              <section
                style={{ maxWidth: "25rem", marginTop: "1rem", zIndex: "10" }}
              >
                <h3 style={{ fontFamily: "Oxanium", color: "#333333" }}>
                  scaling up
                </h3>
                <Sections sections={sections} from={7} to={9} linkTo={linkTo} />
              </section>
              <section
                style={{ maxWidth: "25rem", marginTop: "1rem", zIndex: "10" }}
              >
                <h3 style={{ fontFamily: "Oxanium", color: "#333333" }}>
                  changing course
                </h3>
                <Sections
                  sections={sections}
                  from={10}
                  to={18}
                  linkTo={linkTo}
                />
              </section>
            </section>
            <section
              style={{
                fontSize: "1rem",
                maxWidth: "50ch",
                lineHeight: "1.3rem",
              }}
            >
              <h3 style={{ fontFamily: "Oxanium", color: "#333333" }}>
                interactive explainer
              </h3>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#4d4d4d",
                  marginBottom: "2rem",
                }}
              >
                <p>
                  The content is structured as an interactive explainer. The
                  topic of building an interactive app is gradually built up
                  from the first principles, starting with fleshing out the most
                  relevant pieces of browser internals.
                </p>
                <p>
                  It then goes into the issues of structuring a whole
                  application around event handlers.
                </p>
                <p>
                  Finally it builds up the declarative effect based runtime
                  approach the React "library" is using, practically rebuilding
                  the static parts of React fiber reconciler and dom renderer.
                </p>
                <p>
                  The core of each section is a pausable animation where you can
                  go back and forth. If you happened to land on this website,
                  note that it is under development and only a subset of pages
                  is available in its static form without the animations and
                  interactivity yet fully working.
                </p>
              </div>
              <LinkTile sections={sections} linkTo={linkTo} />
            </section>
          </div>
        </main>
      </Responsive>

      <footer
        style={{
          borderTop: "1px solid black",
          height: "3rem",
          fontFamily: "Oxanium",
        }}
      >
        <Responsive>
          <div
            style={{
              alignItems: "center",
              height: "100%",
              display: "grid",
              gridTemplateColumns: "repreat(3, 1fr)",
              margin: "0 0.5rem",
              fontSize: "0.8rem",
            }}
          >
            <div style={{ gridColumn: "1 / 2" }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <a href="https://www.wholessence.cz" style={{ color: "black" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "8rem",
                      width: "8rem",
                    }}
                  >
                    <svg height={"1rem"} width={"0.5rem"}>
                      <path
                        d="M 3 0 v 170"
                        stroke="var(--highlight-color)"
                        strokeWidth={7}
                      />
                    </svg>
                    <span>←</span>
                    <span>wholessence</span>
                  </div>
                </a>
                <div style={{ color: "gray" }}>#project</div>
                <div style={{ color: "gray" }}>#explainer</div>
              </div>
            </div>
            <div
              style={{
                gridColumn: "2 / 3",
                justifySelf: "center",
                color: "gray",
              }}
            >
              StarLe • 2025
            </div>
          </div>
        </Responsive>
      </footer>
    </div>
  );
};

const Sections = ({ sections, from, to, linkTo }) => {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {sections
        .slice(0, -1)
        .slice(from - 1, to)
        .map(({ path, title, subsections, status }) => {
          const pageNumber = path.match(/^\/(\d\d)/)[1];
          const pageTitle = title.match(/-\s(.+)/)[1];
          return (
            <a
              {...linkTo(status ? path : "/")}
              style={{
                textDecoration: "none",
                color: "black",
                cursor: status ? "pointer" : " not-allowed",
              }}
            >
              <li
                style={{
                  width: "100%",
                  //   background: "salmon",
                  // padding: "0.5rem",
                  // border: `${status ? "2pt solid #22b573" : "1pt solid black"}`,
                  // borderRadius: "0.5rem",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  fontFamily: "Oxanium",
                  padding: 0,
                  margin: "0.5rem 0",
                  background: "radial-gradient(#eeeeee,rgb(238,238,238,5%))",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <svg height={"2.5rem"} width={"0.5rem"}>
                    <path
                      d="M 3 0 v 170"
                      stroke={status ? "var(--highlight-color)" : "#cccccc"}
                      strokeWidth={5}
                    />
                  </svg>

                  <span
                    style={{
                      margin: "0 1rem",
                      color: "#808080",
                      fontWeight: "300",
                    }}
                  >
                    {pageNumber}
                  </span>
                  <span
                    style={{
                      fontWeight: `${status ? "700" : "400"}`,
                      color: "#202020",
                    }}
                  >
                    {pageTitle}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.7rem",
                    textAlign: "right",
                    // marginLeft: "auto",
                    // paddingTop: "0.5rem",
                    fontFamily: "Menlo",
                    color: "#808080",
                    alignSelf: "flex-end",
                    lineHeight: "0.7rem",
                  }}
                >
                  {status ? status : ""}
                </p>

                <svg height={"1rem"} width={"100%"} viewBox="0 0 100 1">
                  <path
                    d="M 0 0.5 h 100"
                    stroke={"#cccccc"}
                    strokeWidth={0.5}
                    strokeDasharray={0.5}
                  ></path>
                </svg>
              </li>
            </a>
          );
        })}
    </ul>
  );
};

const LinkTile = ({ sections, linkTo }) => {
  const pageNumber = sections[0].path.match(/^\/(\d\d)/)[1];
  const pageTitle = sections[0].title.match(/-\s(.+)/)[1];

  return (
    <div
      style={{
        borderTop: " 2pt dotted #cccccc",
        borderBottom: " 2pt dotted #cccccc",
        maxWidth: "30rem",
      }}
    >
      <a {...linkTo(sections[0].path)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            fontFamily: "Oxanium",

            padding: "0.5rem 1rem",
            borderRight: " 2pt dotted #cccccc",
            margin: "1rem 0",
            position: "relative",
            background: "radial-gradient(#eeeeee,#eeeeee,rgb(238,238,238,5%))",
          }}
        >
          <ButtonLine />
          <p
            style={{
              margin: 0,
              fontSize: "0.7rem",
              textAlign: "right",
              // marginLeft: "auto",
              // paddingTop: "0.5rem",
              fontFamily: "Menlo",
              color: "#808080",
              alignSelf: "flex-end",
              lineHeight: "0.7rem",
            }}
          >
            {sections[0].status}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "1rem 0",
              fontSize: "1.3rem",
            }}
          >
            <span
              style={{
                margin: "0 1rem",
                color: "#808080",
                fontWeight: "300",
              }}
            >
              {pageNumber}
            </span>
            <span>{pageTitle}</span>
          </div>
          <div style={{ alignSelf: "flex-end", color: "#808080" }}>
            <span>→ </span>
            <span> go to first section</span>
          </div>
        </div>
      </a>
    </div>
  );
};

// {subsections && (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//       }}
//     >
//       {subsections.map(({ title, path }) => {
//         return <a {...linkTo(path)}>{title}</a>;
//       })}
//     </div>
//   )}

const globalStyles = globalCss({
  ":root": {
    "--highlight-color": "#22b573",
    minWidth: "300px",

    "& a": {
      color: "black",

      "&:hover": {
        "--highlight-color": "#b57522",
        fontWeight: "700",
      },
    },

    "@media (max-width: 1350px)": {
      fontSize: "95%",
    },

    "@media (max-width: 1000px)": {
      fontSize: "80%",
    },

    "@media (max-width: 670px)": {
      fontSize: "75%",
    },
    "@media (max-width: 400px)": {
      fontSize: "70%",
    },
  },

  header: {
    height: "87vh",
    maxHeight: "50rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",

    margin: "2rem 1rem 0 1rem",

    "@media (max-width: 1650px)": {
      height: "100%",
      maxHeight: "100%",
      margin: "1rem 1rem 0 1rem",
    },
    "@media (max-width: 1350px)": {
      margin: "0rem 1rem 0 1rem",
    },
  },

  ".headerTitle": {
    zIndex: 20,
    position: "relative",

    // "&::after": {
    //   // maskImage: "radial-gradient(ellipse at center,#000, 90%, transparent)",

    //   "@media (max-width: 1650px)": {
    //     maskImage: "linear-gradient(135deg,#000, 85%, transparent)",
    //     borderRadius: "2rem",
    //     backdropFilter: "blur(2px)",
    //     content: `''`,
    //     position: "absolute",
    //     display: "block",
    //     top: 0,
    //     left: 0,
    //     // width: "45%",
    //     height: "100%",
    //     zIndex: 10,
    //     background: "#eeeeee75",
    //     width: "57%",
    //   },
    // },

    "& .first": {
      fontFamily: "PP Editorial New",
      fontSize: "9rem",
      lineHeight: "10rem",
      fontWeight: "800",
      position: "relative",

      "& .content": {
        display: "inline-block",
        zIndex: 100,
        position: "relative",
      },

      "@media (max-width: 1350px)": {
        lineHeight: "8rem",
        fontSize: "7rem",
      },
      "@media (max-width: 670px)": {
        lineHeight: "7rem",
        fontSize: "6rem",
      },
      "@media (max-width: 400px)": {
        lineHeight: "6rem",
        fontSize: "4.5rem",
      },
    },

    "& .secondthird": {
      transform: "translateY(-2rem) translateX(8.5rem)",
      zIndex: 100,
      position: "relative",

      "@media (max-width: 400px)": {
        transform: "translateY(-2rem) translateX(5rem)",
      },
    },

    "& .second": {
      fontFamily: "Oswald",
      fontSize: "5rem",
      lineHeight: "4.9rem",
      fontWeight: "400",

      "@media (max-width: 1350px)": {
        fontSize: "4rem",
        lineHeight: "4rem",
      },
      "@media (max-width: 670px)": {
        fontSize: "3rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "2.5rem",
      },
    },

    "& .third": {
      fontFamily: "Oswald",
      fontSize: "4.9rem",
      lineHeight: "4.9rem",
      fontWeight: "400",

      "@media (max-width: 1350px)": {
        fontSize: "4rem",
        lineHeight: "4rem",
      },
      "@media (max-width: 670px)": {
        fontSize: "3rem",
        lineHeight: "2rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "2.5rem",
        lineHeight: "1.5rem",
      },
    },

    "& .subtitle": {
      fontSize: "1.7rem",
      lineHeight: "1.7rem",
      fontFamily: "Nunito",
      marginLeft: "8.5rem",
      transform: "translateY(-1rem)",
      color: "#525252",
      zIndex: 100,
      position: "relative",

      "@media (max-width: 400px)": {
        marginLeft: "5rem",
      },
    },
  },

  ".headingText": {
    fontSize: "0.95rem",
    lineHeight: "1.3rem",
    fontFamily: "Nunito",
    color: "#4d4d4d",
    fontWeight: "400",
    maxWidth: "53ch",
    padding: "0.5rem 1rem",
    position: "relative",

    "& p": {
      zIndex: 20,
      position: "relative",
    },

    "&::after": {
      maskImage: "radial-gradient(ellipse at center,#000, 90%, transparent)",
      borderRadius: "1rem",
      backdropFilter: "blur(1px)",
      content: `''`,
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 5,
      background: "#eeeeee40",

      "@media (max-width: 1350px)": {
        maskImage: "none",
        backdropFilter: "none",
      },
    },

    "@media (max-width: 1650px)": {
      color: "#222222",
    },
    "@media (max-width: 1350px)": {
      paddingLeft: "3.5rem",

      color: "#4d4d4d",
    },
    "@media (max-width: 400px)": {
      padding: "0 1rem",
    },
  },

  ".browser": {
    height: "4rem",
    alignSelf: "flex-end",

    "&::before": {
      // maskImage: "radial-gradient(ellipse at center,#000, 90%, transparent)",

      "@media (max-width: 1650px)": {
        maskImage: "linear-gradient(90deg,#000, 85%, transparent)",
        borderRadius: "2rem",
        backdropFilter: "blur(3px)",
        content: `''`,
        position: "absolute",
        display: "block",
        top: 0,
        left: 0,
        // width: "45%",
        height: "100%",
        zIndex: 10,
        background: "#eeeeee75",
        width: "65%",
      },
      "@media (max-width: 1350px)": {
        maskImage: "none",
        backdropFilter: "none",
        background: "transparent",
      },
    },

    "@media (max-width: 1650px)": {
      height: "5rem",
    },
    "@media (max-width: 1350px)": {
      height: "27rem",
      alignSelf: "flex-start",
    },
    "@media (max-width: 1000px)": {
      height: "24rem",
    },
    "@media (max-width: 670px)": {
      height: "15rem",
    },
    "@media (max-width: 400px)": {
      height: "13rem",
    },

    "& div": {
      zIndex: 5,
      height: "37.2rem",
      transform: "translateY(-20rem)",

      "@media (max-width: 1650px)": {
        transform: "translateY(-18rem)",
      },
      "@media (max-width: 1350px)": {
        transform: "translateY(0rem)",
        height: "27rem",
        paddingLeft: "3rem",
      },
      "@media (max-width: 1000px)": {
        transform: "translateY(0rem)",
        height: "24rem",
      },
      "@media (max-width: 670px)": {
        transform: "translateY(0rem)",
        height: "15rem",
      },
      "@media (max-width: 400px)": {
        height: "13rem",
        paddingLeft: "1rem",
      },
    },
  },

  ".aifree": {
    position: "absolute",
    right: 0,
    top: "-3rem",
    zIndex: "20",

    "@media (max-width: 1350px)": {
      top: "-4rem",
    },

    "& img": {
      width: "15rem",

      "@media (max-width: 1350px)": {
        width: "10rem",
      },
    },
  },
});

const Responsive = styled("div", {
  maxWidth: "100rem",
  margin: "0 auto",
  width: "100%",
  height: "100%",

  "@media (max-width: 1650px)": {
    maxWidth: "80rem",
  },
  "@media (max-width: 1350px)": {
    maxWidth: "60rem",
  },
  "@media (max-width: 1000px)": {
    maxWidth: "40rem",
  },
  "@media (max-width: 670px)": {
    maxWidth: "35rem",
    // maxWidth: "100%",
  },
  "@media (max-width: 450px)": {
    // maxWidth: "35rem",
    maxWidth: "100%",
  },
});

// "& .content": {
//   position: "relative",
//   zIndex: 10,
//   // width: "100%",

//   // height: "100%",
//   // backdropFilter: "blur(4px)",

//   // "&::after": {
//   //   // backdropFilter: "blur(4px)",
//   //   // clipPath: "url(#mask1)",
//   //   content: `''`,
//   //   position: "absolute",
//   //   zIndex: 5,
//   //   top: 0,
//   //   left: 0,
//   //   width: "100%",
//   //   height: "100%",
//   //   display: "block",
//   //   background: "blue",
//   // },
// },

// "& .contentText": {
//   display: "flex",
//   // width: "100%",
//   // height: "100%",
//   position: "relative",

//   "&::after": {
//     backdropFilter: "blur(4px)",
//     // clipPath: "url(#mask1)",
//     content: `''`,
//     position: "absolute",
//     zIndex: 5,
//     top: "-1rem",
//     left: "-1rem",
//     // margin: "1rem",
//     width: "28rem",
//     height: "11rem",
//     display: "block",
//     // background: "blue",
//     borderRadius: "3rem",
//     // background: "linear-gradient(transparent,rgb(238,238,238,0%) 100%)",
//   },
// },

// "&::after": {
//   "-webkit-text-stroke": "5rem #31b49867",
//   content: `'Quest'`,
//   position: "absolute",
//   top: 0,
//   left: 0,
//   display: "block",
//   // background: "blue",
//   width: "100%",
//   height: "100%",
//   color: "transparent",
// },

// ---
// "&::before": {
//   content: `''`,
//   display: "block",
//   position: "absolute",
//   top: "-3px",
//   left: "-3px",
// },

// "&::after": {
//   content: `''`,
//   display: "block",
//   position: "absolute",
//   top: "-3px",
//   left: "-3px",
//   "-webkit-text-stroke": "1rem #ca2222",
// },

// ---
// const StyledDiv = styled("div", {
//   fontFamily: "PP Editorial New",
//   fontSize: "9rem",
//   lineHeight: "10rem",
//   fontWeight: "800",
//   // "-webkit-text-stroke": "1rem #eeeeee",
//   // textShadow: "0 0 15px pink",
//   position: "relative",
//   // backdropFilter: "blur(8px)",

//   "&::before": {
//     content: `''`,
//     display: "block",
//     position: "absolute",
//     top: "-3px",
//     left: "-3px",
//   },

//   "&::after": {
//     content: `''`,
//     display: "block",
//     position: "absolute",
//     top: "-3px",
//     left: "-3px",
//     "-webkit-text-stroke": "1rem #ca2222",
// #b43131
//   },
// });
