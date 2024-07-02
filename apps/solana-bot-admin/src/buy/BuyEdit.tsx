import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TokenTitle } from "../token/TokenTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const BuyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
