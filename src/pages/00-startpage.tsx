import React from "react";
import { use } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";
import { makePages, makeSections } from "../routes";
import { useRouterContext } from "@use-gpu/workbench";
import { Intro } from "../00-startpage/intro";

export const StartPage = ({ container }) => {
  const { linkTo, replace, route } = useRouterContext();
  // const pages = makePages();
  // console.log("PAGES", pages);
  const sections = makeSections();
  // console.log("SECTIONS", sections);
  // console.log("route", route);

  // has its unique layout, different from the rest
  return use(HTML, {
    container,
    children: (
      <Intro sections={sections} linkTo={linkTo} />
      // <div>
      //   <ul style={{ width: "20rem" }}>
      //     {sections.slice(0, -1).map(({ path, title, subsections }) => {
      //       const pageNumber = path.match(/^\/(\d\d)/);
      //       return (
      //         <li>
      //           <a {...linkTo(path)}>
      //             {pageNumber[1]} - {title}
      //           </a>
      //           {subsections && (
      //             <div
      //               style={{ display: "flex", justifyContent: "space-around" }}
      //             >
      //               {subsections.map(({ title, path }) => {
      //                 return <a {...linkTo(path)}>{title}</a>;
      //               })}
      //             </div>
      //           )}
      //         </li>
      //       );
      //     })}
      //   </ul>
      // </div>
    ),
  });
};
