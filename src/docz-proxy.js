import { doczState } from "@docz";
import { useContext } from "react";
import _get from "lodash/fp/get";

const isClient = typeof window === "object";

export * from "@docz";

export const useCurrentDoc = () => {
  const state = useContext(doczState.context);
  return isClient ? _get("currentEntry.value", state) : {};
};
