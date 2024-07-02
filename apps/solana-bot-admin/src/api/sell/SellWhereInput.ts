import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type SellWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  token?: TokenWhereUniqueInput;
  wallet?: WalletWhereUniqueInput;
};
