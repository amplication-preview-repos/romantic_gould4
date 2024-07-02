import { BuyUpdateManyWithoutTokensInput } from "./BuyUpdateManyWithoutTokensInput";
import { NotificationUpdateManyWithoutTokensInput } from "./NotificationUpdateManyWithoutTokensInput";
import { SellUpdateManyWithoutTokensInput } from "./SellUpdateManyWithoutTokensInput";

export type TokenUpdateInput = {
  address?: string | null;
  buys?: BuyUpdateManyWithoutTokensInput;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutTokensInput;
  price?: number | null;
  sells?: SellUpdateManyWithoutTokensInput;
  symbolField?: string | null;
};
