import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  read?: BooleanNullableFilter;
  token?: TokenWhereUniqueInput;
};
