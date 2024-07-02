import { Buy } from "../buy/Buy";
import { Sell } from "../sell/Sell";
import { Transaction } from "../transaction/Transaction";

export type Wallet = {
  address: string | null;
  buys?: Array<Buy>;
  createdAt: Date;
  id: string;
  privateKey: string | null;
  sells?: Array<Sell>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
