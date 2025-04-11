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

export const AccessorRoot = () => {
  console.warn("AccessorRoot");

  return <div>accessorRoot</div>;
};

const Accessor = ({ accessor }) => {
  //

  return <div>{accessor.tagName}</div>;
};
