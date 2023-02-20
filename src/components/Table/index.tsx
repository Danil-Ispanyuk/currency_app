import React, { PropsWithChildren } from "react";
import { TableProvider } from "./context";
import { ContentComposition, ITableProps } from "./types";
import * as Styled from "./style";
import Cell from "./Cell/Cell";
import Row from "./Row/Row";
import Body from "./Body/Body";
import { Head } from "./Head/Head";

function Table<T>({
  children,
  data,
  headers,
}: PropsWithChildren<ITableProps<T>> & ContentComposition<T>) {
  return (
    <TableProvider data={data} headers={headers}>
      <Styled.Container>
        <Styled.TableComponent cellSpacing="0">
          {children}
        </Styled.TableComponent>
      </Styled.Container>
    </TableProvider>
  );
}

Table.Cell = Cell;
Table.Row = Row;
Table.Body = Body;
Table.Head = Head;

export default Table;
