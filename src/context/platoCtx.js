import { createContext, useContext, useReducer } from "react";
import { initialState, platoReducer } from "./platoReducer";

const PlatoContext = createContext(null);
const PlatoDispatchContext = createContext(null);

export function usePlatoContext() {
  const context = useContext(PlatoContext);
  if (!context) {
    throw new Error("UsePlato debe ser utilizado dentro de un PlatoProvider");
  }
  return context;
}

export function usePlatoDispatch() {
  const context = useContext(PlatoDispatchContext);
  if (!context) {
    throw new Error(
      "UsePlatoDispatch debe ser utilizado dentro de un PlatoProvider"
    );
  }
  return context;
}

export function PlatoProvider({ children }) {
  const [state, dispatch] = useReducer(platoReducer, initialState);
  return (
    <PlatoContext.Provider value={state}>
      <PlatoDispatchContext.Provider value={dispatch}>
        {children}
      </PlatoDispatchContext.Provider>
    </PlatoContext.Provider>
  );
}
