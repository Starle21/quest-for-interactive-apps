import React, {
  memo,
  useCallback,
  useLayoutEffect,
  useEffect,
  useMemo,
  useState,
  SetStateAction,
  createContext,
  useContext,
} from "react";

export const DomRoot = () => {
  console.warn("DomRoot");

  return <div>dom</div>;
};

const DomNode = ({ accessor }) => {
  //

  return <div>{accessor.tagName}</div>;
};
