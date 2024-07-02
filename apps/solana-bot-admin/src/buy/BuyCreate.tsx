import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TokenTitle } from "../token/TokenTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const BuyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="token.id" reference="Token" label="token">
          <SelectInput optionText={TokenTitle} />
        </ReferenceInput>
        <ReferenceInput source="wallet.id" reference="Wallet" label="wallet">
          <SelectInput optionText={WalletTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
