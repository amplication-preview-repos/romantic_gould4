import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  read?: boolean | null;
  token?: TokenWhereUniqueInput | null;
};
