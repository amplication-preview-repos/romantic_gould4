import { BuyCreateNestedManyWithoutTokensInput } from "./BuyCreateNestedManyWithoutTokensInput";
import { NotificationCreateNestedManyWithoutTokensInput } from "./NotificationCreateNestedManyWithoutTokensInput";
import { SellCreateNestedManyWithoutTokensInput } from "./SellCreateNestedManyWithoutTokensInput";

export type TokenCreateInput = {
  address?: string | null;
  buys?: BuyCreateNestedManyWithoutTokensInput;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutTokensInput;
  price?: number | null;
  sells?: SellCreateNestedManyWithoutTokensInput;
  symbolField?: string | null;
};
