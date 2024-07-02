import { SortOrder } from "../../util/SortOrder";

export type SellOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  tokenId?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
