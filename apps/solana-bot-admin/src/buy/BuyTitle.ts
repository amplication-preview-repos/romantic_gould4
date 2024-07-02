import { Buy as TBuy } from "../api/buy/Buy";

export const BUY_TITLE_FIELD = "id";

export const BuyTitle = (record: TBuy): string => {
  return record.id?.toString() || String(record.id);
};
