import { Token } from "../token/Token";
import { Wallet } from "../wallet/Wallet";

export type Sell = {
  amount: number | null;
  createdAt: Date;
  id: string;
  price: number | null;
  token?: Token | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
