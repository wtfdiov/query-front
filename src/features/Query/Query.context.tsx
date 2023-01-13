import { QueryData } from "interfaces/QueryData";
import * as React from "react";

type Action = { type: "add"; payload: QueryData } | { type: "update"; payload: QueryData };
type Dispatch = (action: Action) => void;
type State = QueryData[] | [];
type QueryProviderProps = { children: React.ReactNode };

const QueryContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function queryReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: action.payload.id,
          status: action.payload.status,
          key: action.payload.key,
          urls: action.payload.urls,
        },
      ];
    }
    case "update": {
      return state.map(q => {
        if (q.id === action.payload.id) {
          return { ...q, status: action.payload.status, urls: action.payload.urls }
        }
        return q;
      });
    }
  }
}

function QueryProvider({ children }: QueryProviderProps) {
  const [state, dispatch] = React.useReducer(queryReducer, []);
  const value = { state, dispatch };
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}

function useQuery() {
  const context = React.useContext(QueryContext);
  if (context === undefined) {
    throw new Error("useQuery must be used within a QueryProvider");
  }
  return context;
}

export { QueryProvider, useQuery };
