import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BuyListRelationFilter } from "../buy/BuyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SellListRelationFilter } from "../sell/SellListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type WalletWhereInput = {
  address?: StringNullableFilter;
  buys?: BuyListRelationFilter;
  id?: StringFilter;
  privateKey?: StringNullableFilter;
  sells?: SellListRelationFilter;
  transactions?: TransactionListRelationFilter;
};
