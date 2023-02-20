export interface ICurrencyData {
    id: string;
    ccy: string;
    base_ccy: string;
    pair: string;
    buy: string;
    sale: string;
}

export interface ICurrencyApi {
    ccy: string;
    base_ccy: string;
    buy: string;
    sale: string;
}
