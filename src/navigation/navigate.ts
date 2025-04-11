import { makeSections, makeFilteredSections } from "../routes";

export const navigations = (route) => {
    const pageNumber = route.path.match(/^\/(\d\d)/)[1];

    // const sections = makeSections();
    const sections = makeFilteredSections();

    const currentSection = sections.find((s) => s.path === route.path);
    const currentTitle = currentSection.title.match(/-\s(.+)$/)[1];
    const currentSubsections = currentSection.subsections;
    const currentIndex = sections.findIndex((s) => s.path === route.path);
    let isSubsection = false;
    if (route.path.includes("intro") || route.path.includes("viz"))
        isSubsection = true;
    const currentPath = route.path;

    const previousIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;

    const previousSection =
        previousIndex === -1 ? { path: "/" } : sections[previousIndex];
    const previousSectionNumber =
        previousIndex === -1 ? "intro" : previousSection.path.match(/^\/(\d\d)/)[1];
    const previousSectionPath = previousSection.path;

    const nextSection = sections[nextIndex];
    const nextSectionNumber = nextSection.path.match(/^\/(\d\d)/)[1];
    const nextSectionPath = nextSection.path;

    return {
        pageNumber,
        isSubsection,
        currentPath,
        currentTitle,
        currentSubsections,
        previousSectionNumber,
        previousSectionPath,
        nextSectionNumber,
        nextSectionPath,
    };
};