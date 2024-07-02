import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TokenTitle } from "../token/TokenTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <BooleanInput label="read" source="read" />
        <ReferenceInput source="token.id" reference="Token" label="token">
          <SelectInput optionText={TokenTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
