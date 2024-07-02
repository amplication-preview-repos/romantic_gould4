import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BuyListRelationFilter } from "../buy/BuyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SellListRelationFilter } from "../sell/SellListRelationFilter";

export type TokenWhereInput = {
  address?: StringNullableFilter;
  buys?: BuyListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  price?: FloatNullableFilter;
  sells?: SellListRelationFilter;
  symbolField?: StringNullableFilter;
};
