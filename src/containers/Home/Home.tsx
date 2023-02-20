import { FC, Fragment, useCallback, useEffect, useState } from "react";
import { Loader } from "components";
import { ICurrencyData } from "types/currency.type";
import { HomeLayout } from "layouts/HomeLayout/HomeLayout";
import { ExchangeTable } from "./blocks/ExchangeTable";
import { ExchangeCurrencyConverter } from "./blocks/ExchangeCurrencyConverter";
import { useGetCurrencyQuery } from "redux/currency/currency.api";
import * as Styled from "./style";

export const Home: FC = (): JSX.Element => {
    const {
        data: currencyData,
        isLoading: isCurrencyLoading,
        refetch
    } = useGetCurrencyQuery(undefined, {
        skip: Number(localStorage.getItem("counter")) >= 5
    });
    const [exchangeData, setExchangeData] = useState<ICurrencyData[] | undefined>();

    useEffect(() => {
        if (currencyData) {
            setExchangeData(currencyData);
        }
    }, [currencyData]);

    const handleTableExchangeDataChange = useCallback((data: ICurrencyData[]) => {
        setExchangeData(data);
    }, []);

    const handleCurrencyUpdate = useCallback(() => {
        if (currencyData) {
            refetch();
        } else {
            return () => {};
        }
    }, [currencyData, refetch]);

    return (
        <HomeLayout onUpdate={handleCurrencyUpdate}>
            {isCurrencyLoading ? (
                <Styled.LoaderContainer>
                    <Loader
                        styles={{
                            width: "150px"
                        }}
                    />
                </Styled.LoaderContainer>
            ) : (
                <Fragment>
                    <ExchangeTable
                        initialData={currencyData}
                        data={exchangeData || []}
                        onChange={handleTableExchangeDataChange}
                    />
                    <ExchangeCurrencyConverter data={exchangeData || []} />
                </Fragment>
            )}
        </HomeLayout>
    );
};
