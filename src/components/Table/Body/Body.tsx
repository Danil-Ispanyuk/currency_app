import { useContext } from "react";
import { TableContext } from "../context";
import { ITableBody } from "../types";
import * as Styled from "./style";

export default function Body<T>({ getRowStructure }: ITableBody<T>) {
    const { data } = useContext(TableContext);

    return (
        <Styled.Container data-testid="table-body">
            {data.map((row: any, index: number) => getRowStructure(row, index))}
        </Styled.Container>
    );
}
