import { BuyUpdateManyWithoutWalletsInput } from "./BuyUpdateManyWithoutWalletsInput";
import { SellUpdateManyWithoutWalletsInput } from "./SellUpdateManyWithoutWalletsInput";
import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";

export type WalletUpdateInput = {
  address?: string | null;
  buys?: BuyUpdateManyWithoutWalletsInput;
  privateKey?: string | null;
  sells?: SellUpdateManyWithoutWalletsInput;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
};
