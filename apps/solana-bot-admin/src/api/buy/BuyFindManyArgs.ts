import { BuyWhereInput } from "./BuyWhereInput";
import { BuyOrderByInput } from "./BuyOrderByInput";

export type BuyFindManyArgs = {
  where?: BuyWhereInput;
  orderBy?: Array<BuyOrderByInput>;
  skip?: number;
  take?: number;
};
