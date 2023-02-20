import React, { useContext } from "react";
import Cell from "../Cell/Cell";
import { TableContext } from "../context";
import Row from "../Row/Row";
import { ITableHead } from "../types";
import * as Styled from "./style";

export const Head = () => {
  const { headers } = useContext(TableContext);

  return (
    <Styled.Container>
      <Row>
        {headers.map((item: ITableHead) => (
          <Cell key={item.id}>{item.title}</Cell>
        ))}
      </Row>
    </Styled.Container>
  );
};
