import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type BuyUpdateInput = {
  amount?: number | null;
  price?: number | null;
  token?: TokenWhereUniqueInput | null;
  wallet?: WalletWhereUniqueInput | null;
};
