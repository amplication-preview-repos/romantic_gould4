import { SortOrder } from "../../util/SortOrder";

export type BuyOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  tokenId?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
