import { useMemo } from "react";
import { useState } from "react";
import { ReactNode, createContext } from "react";
import objectAssignDeep from "object-assign-deep";

// Typescript's built-in partial type but applied to objects nested in objects
type RecursivePartial<T> = T extends object
  ? {
    [P in keyof T]?: RecursivePartial<T[P]>;
  }
  : T | undefined;

const defaultStoreData = {
  input: {
    count: 0,
  },
};

type StoreData = typeof defaultStoreData;

interface StoreConsume {
  data: StoreData;
  update(newState: RecursivePartial<StoreData>): void;
}

type Dispatch = React.Dispatch<React.SetStateAction<StoreData>>;

function updateState(
  oldState: StoreData,
  dispatch: Dispatch,
  nextState: RecursivePartial<StoreData>
) {
  dispatch(objectAssignDeep({}, oldState, nextState));
}

export const StoreContext = createContext<StoreConsume>(null as any);

export default function Store({ children }: { children: ReactNode }) {
  const [data, dispatch] = useState(defaultStoreData);
  const consume = useMemo(
    () => ({ data, update: updateState.bind(null, data, dispatch) }),
    [data, dispatch]
  );
  return (
    <StoreContext.Provider value={consume}>{children}</StoreContext.Provider>
  );
}
