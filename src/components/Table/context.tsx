import { createContext, PropsWithChildren } from "react";
import { IContextValue, ITableProps } from "./types";

export const TableContext = createContext<any>({
  data: [],
  headers: [],
});

function Provider<T>({
  children,
  data,
  headers,
}: PropsWithChildren<ITableProps<T>>) {
  const contextValue: IContextValue<T> = {
    data,
    headers,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
}

export const TableProvider = Provider;
