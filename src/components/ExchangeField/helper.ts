import { ICurrencyData } from "../../types/currency.type";

export const getCurrencyUnit = (obj: ICurrencyData, changeCurrency: string) => {
  const units = obj.pair.split("/");
  const unitIndex = units.findIndex((el) => el !== changeCurrency);
  return units[unitIndex];
};
