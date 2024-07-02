import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  privateKey?: SortOrder;
  updatedAt?: SortOrder;
};
