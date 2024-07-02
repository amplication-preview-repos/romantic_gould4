import { Buy } from "../buy/Buy";
import { Notification } from "../notification/Notification";
import { Sell } from "../sell/Sell";

export type Token = {
  address: string | null;
  buys?: Array<Buy>;
  createdAt: Date;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  price: number | null;
  sells?: Array<Sell>;
  symbolField: string | null;
  updatedAt: Date;
};
