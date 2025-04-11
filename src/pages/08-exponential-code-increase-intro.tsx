import React from "react";
import { use, useState } from "@use-gpu/live";
import { HTML } from "@use-gpu/react";
import { useRouterContext } from "@use-gpu/workbench";
import { NavigationBar } from "../navigation/navigation-bar";
import { NavigationExpanded } from "../navigation/navigation-expanded";

import { styled as _styled } from "@stitches/react";
import { makeSections } from "../routes";
const styled: any = _styled;

export const ExponentialCodeIncreaseIntro = ({ container }) => {
  const { linkTo, replace, route } = useRouterContext();
  const pageNumber = route.path.match(/^\/(\d\d)/);
  const sections = makeSections();
  const currentSection = sections.find((s) => s.path === route.path);
  let isSubsection = false;
  let section = undefined;
  if (route.path.includes("intro") || route.path.includes("viz")) {
    isSubsection = true;
  }
  console.log("currentSection", currentSection);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isText, setIsText] = useState(true);

  return use(HTML, {
    container,
    children: (
      <Layout>
        <div
          style={{
            width: "3rem",
            background: "#fff",
            border: "1pt solid black",
          }}
        >
          <NavigationBar
            expandNavigation={setIsExpanded}
            expandText={setIsText}
            pageNumber={pageNumber[1]}
            sections={currentSection?.subsections}
            isSection={isSubsection}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "30rem 1fr",
            gridTemplateRows: "2.5rem 1fr",
          }}
        >
          {isExpanded && (
            <div
              style={{
                background: "teal",
                gridArea: "1 / 1 / 4 / 2",
                justifySelf: "stretch",
                // textAlign: "right",
                zIndex: 300,
                // opacity: "80%",
              }}
            >
              <NavigationExpanded linkTo={linkTo} currentRoute={route.path} />
            </div>
          )}
          <div style={{ background: "white", gridArea: "1 / 1 / 1 / 4" }}>
            {/* title */}
            Quest for interactive apps
          </div>
          {isText && (
            <div style={{ background: "salmon", gridArea: "2 / 1 / 3 / 2" }}>
              <h2>Exponential code increase - Intro</h2>
              <p>text for every section is different and unique</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur excepturi ipsum qui maxime, dolor quibusdam, commodi
                delectus expedita, iusto earum eos quia? Esse porro nihil,
                doloremque qui accusantium molestias odio sequi itaque delectus
                eius quod a quidem fugit adipisci dolorem culpa aliquam libero
                nisi voluptate perspiciatis dolor. Corporis sequi voluptatem
                voluptates sapiente possimus. Debitis similique, recusandae
                facilis libero corporis quaerat culpa distinctio aspernatur quod
                vitae. Iste enim eos voluptatibus magni praesentium, accusamus
                laboriosam delectus a? Sit, nisi eum! Eius delectus vero
                laborum. Cupiditate error rem repudiandae, ea, vitae
                consectetur, in accusamus exercitationem enim similique dolore
                omnis repellat incidunt libero vero ratione officia aliquam.
                Sequi, aliquid sed similique perspiciatis esse, ad harum
                cupiditate recusandae fugiat, officia laborum beatae voluptatem
                impedit et cum velit fugit. At debitis quam delectus laborum,
                dolor quia iste officia quae, laboriosam vitae, neque eius
                temporibus fuga ut incidunt velit dolores pariatur accusamus
                omnis suscipit molestiae ad? Molestias repellat eligendi facilis
                iusto fuga aliquam ad. Ducimus culpa adipisci nemo error magni
                voluptas consectetur vitae, accusantium aperiam eaque cum sed
                repellat dolore enim laudantium quia quaerat quae sit
                repudiandae. Voluptatem molestiae harum iste quos quis sapiente
                numquam delectus tenetur? Rem enim ad obcaecati inventore facere
                repellendus accusamus magni quasi repellat cupiditate earum fuga
                excepturi, nostrum mollitia cumque officia deleniti facilis
                quidem magnam, odio, sint harum in. Ex excepturi aut obcaecati
                asperiores. Sed repellat perferendis mollitia illum facilis
                eveniet odit, veniam nulla consectetur. Maxime veritatis
                consequuntur iure minus voluptatem voluptate, mollitia deleniti
                a, pariatur eos nobis ab cupiditate. Quasi quidem maiores,
                soluta ullam necessitatibus adipisci magni sequi in eaque
                corporis eius laborum optio officia voluptatem quibusdam aperiam
                fugit nobis ducimus? Distinctio, dolor ad id eveniet error
                dolore ipsum excepturi laboriosam, sit ipsam voluptatem aliquid,
                amet ea. Officia odit quod quam sit odio laborum. Inventore vel
                similique iure fugit natus dignissimos aut nobis et beatae.
                Officia similique saepe error explicabo non voluptatum rerum
                voluptas ad eaque odit harum maxime quidem, rem numquam
                architecto consectetur, veritatis earum dolor cupiditate at
                laudantium eius soluta quo recusandae? Fuga error sequi
                cupiditate voluptatum adipisci illo quia consequatur! Quia, nemo
                accusantium iste earum consequuntur ipsum? Labore rerum fugit
                suscipit illo quis nisi, placeat maxime saepe explicabo
                eligendi, laborum, exercitationem perferendis ex veritatis
                molestiae incidunt laboriosam! Molestiae, alias corporis
                excepturi incidunt repellat non rem odio enim, impedit illum
                sapiente nam nihil velit ipsa, voluptate aperiam voluptatem
                eaque assumenda nemo perferendis nesciunt! Modi perspiciatis ab
                minus magnam recusandae facilis sint cum eveniet odio ratione?
                Cumque quasi, facere et debitis sapiente illum voluptatem
                aperiam atque veniam commodi reiciendis, beatae id doloremque
                consequuntur. Pariatur praesentium, nisi sit porro harum
                mollitia delectus corporis expedita, eius, iste maiores?
                Deserunt suscipit nihil laudantium unde exercitationem deleniti
                molestias nulla et inventore nostrum nam reiciendis, possimus
                quidem dolorem ipsa veritatis, placeat accusantium voluptas modi
                quod similique sed! Dolore nihil obcaecati inventore, optio
                quos, possimus doloribus maiores sed quia nam vitae unde omnis
                aut, quis quam error ad sit ipsa? Eius, fugiat excepturi? Magni
                numquam iure minima, quos, est impedit consequatur eum quas ut
                veritatis suscipit.
              </p>
            </div>
          )}
          <div
            style={{
              background: "lightbrown",
              gridArea: `${isText ? "2 / 2 / 3 / 4" : "2 / 1 / 3 / 4"}`,
            }}
          >
            Viz
          </div>
        </div>
      </Layout>
    ),
  });
};

const Layout = styled("div", {
  // margin: "0 auto",
  width: "100vw",
  minHeight: "100vh",
  minWidth: "16.25rem",
  // display: "grid",
  // gridTemplateColumns: "1fr 2fr ",
  // // gridTemplateRows: "5fr 1fr",
  overflow: "auto",
  background: "grey",
  display: "flex",
});
