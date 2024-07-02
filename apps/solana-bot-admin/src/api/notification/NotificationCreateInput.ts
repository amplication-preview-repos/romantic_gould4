import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  read?: boolean | null;
  token?: TokenWhereUniqueInput | null;
};
