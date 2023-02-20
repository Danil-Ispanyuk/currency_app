import { FC } from "react";
import { Table } from "../../../../components";
import { ICurrencyData } from "../../../../types/currency.type";
import formatDate from "../../../../utils/formatDate";
import * as Styled from "../../style";
import useThrowError from "../../../../hooks/useThrowError";

const headers = [
    {
        id: "pair",
        title: `Currency/${formatDate(new Date())}`
    },
    {
        id: "buy",
        title: `Buy`
    },
    {
        id: "sale",
        title: `Sell`
    }
];

interface IProps {
    data: ICurrencyData[];
    initialData: ICurrencyData[] | undefined;
    onChange: (data: ICurrencyData[]) => void;
}

export const ExchangeTable: FC<IProps> = ({ data, initialData, onChange }): JSX.Element => {
    const throwError = useThrowError();

    const onEditTableValue = (value: string | number, headerKey: keyof ICurrencyData, index: number) => {
        if (data) {
            const currencyArr = JSON.parse(JSON.stringify([...data]));
            const element = currencyArr[index];
            element[headerKey] = value;
            onChange(currencyArr);
        }
    };

    const getRowStructure = (row: any, index: number) => (
        <Table.Row key={`${row?.id}-${index}`}>
            {headers.map((header, headerIndex) => (
                <Table.Cell
                    initialData={initialData}
                    rowIndex={index}
                    headerKey={header.id as keyof ICurrencyData}
                    onEditTableValue={onEditTableValue}
                    rowId={`${row?.id}-${headerIndex}`}
                    key={headerIndex}
                    isEditMode={!!headerIndex}
                >
                    {row[header.id]}
                </Table.Cell>
            ))}
        </Table.Row>
    );

    return (
        (throwError && <Styled.ErrorContainer>{throwError.message}</Styled.ErrorContainer>) || (
            <Styled.TableContainer>
                <Styled.Container>
                    <Table data={data || []} headers={headers}>
                        <Table.Head />
                        <Table.Body getRowStructure={getRowStructure} />
                    </Table>
                </Styled.Container>
            </Styled.TableContainer>
        )
    );
};
