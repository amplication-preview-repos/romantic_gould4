import { Sell as TSell } from "../api/sell/Sell";

export const SELL_TITLE_FIELD = "id";

export const SellTitle = (record: TSell): string => {
  return record.id?.toString() || String(record.id);
};
