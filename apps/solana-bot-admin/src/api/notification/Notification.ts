import { Token } from "../token/Token";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  read: boolean | null;
  token?: Token | null;
  updatedAt: Date;
};
