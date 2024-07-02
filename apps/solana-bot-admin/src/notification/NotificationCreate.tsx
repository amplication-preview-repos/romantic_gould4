import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TokenTitle } from "../token/TokenTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <BooleanInput label="read" source="read" />
        <ReferenceInput source="token.id" reference="Token" label="token">
          <SelectInput optionText={TokenTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
