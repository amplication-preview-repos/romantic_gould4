import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  read?: SortOrder;
  tokenId?: SortOrder;
  updatedAt?: SortOrder;
};
