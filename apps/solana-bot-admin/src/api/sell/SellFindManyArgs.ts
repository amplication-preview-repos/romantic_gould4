import { SellWhereInput } from "./SellWhereInput";
import { SellOrderByInput } from "./SellOrderByInput";

export type SellFindManyArgs = {
  where?: SellWhereInput;
  orderBy?: Array<SellOrderByInput>;
  skip?: number;
  take?: number;
};
