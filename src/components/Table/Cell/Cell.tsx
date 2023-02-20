import { useState } from "react";
import { IReactChildren } from "types/common.type";
import { ICurrencyData } from "../../../types/currency.type";
import EditAction from "../Actions/EditAction/EditAction";
import * as Styled from "./style";

interface IProps {
    isEditMode?: boolean | undefined;
    rowId?: string | number | undefined;
    rowIndex?: number;
    headerKey?: keyof ICurrencyData;
    initialData?: ICurrencyData[];
    children: IReactChildren;
    onEditTableValue?: ((value: string | number, headerKey: keyof ICurrencyData, index: number) => void) | undefined;
}

function Cell({ children, isEditMode, rowId, rowIndex, headerKey, initialData, onEditTableValue }: IProps) {
    const [editMode, setEditMode] = useState<string | number | undefined>("");

    const toggleEditMode = (id: string | number | undefined) => {
        setEditMode(editMode === id || !id ? "" : rowId);
    };

    return (
        <Styled.Container data-testid="cell__container" isEditMode={isEditMode}>
            {editMode ? (
                <EditAction
                    initialData={initialData || []}
                    rowIndex={rowIndex ?? 0}
                    headerKey={headerKey || "buy"}
                    currentValue={children as number}
                    onEditTableValue={onEditTableValue}
                    toggleEditMode={toggleEditMode}
                />
            ) : (
                <>
                    {isEditMode && (
                        <Styled.EditContainer data-testid="cellEdit__container" onClick={() => toggleEditMode(rowId)}>
                            <Styled.EditIcon />
                        </Styled.EditContainer>
                    )}
                    <Styled.Content data-testid="cell__content">{children}</Styled.Content>
                </>
            )}
        </Styled.Container>
    );
}

export default Cell;
