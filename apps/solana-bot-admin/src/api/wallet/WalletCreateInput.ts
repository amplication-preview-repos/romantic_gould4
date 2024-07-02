import { BuyCreateNestedManyWithoutWalletsInput } from "./BuyCreateNestedManyWithoutWalletsInput";
import { SellCreateNestedManyWithoutWalletsInput } from "./SellCreateNestedManyWithoutWalletsInput";
import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";

export type WalletCreateInput = {
  address?: string | null;
  buys?: BuyCreateNestedManyWithoutWalletsInput;
  privateKey?: string | null;
  sells?: SellCreateNestedManyWithoutWalletsInput;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
};
