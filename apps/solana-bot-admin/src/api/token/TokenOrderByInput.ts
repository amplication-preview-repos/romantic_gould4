import { SortOrder } from "../../util/SortOrder";

export type TokenOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
