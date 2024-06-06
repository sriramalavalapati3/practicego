import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PaymentIntentTitle } from "../paymentIntent/PaymentIntentTitle";

export const RefundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="amount" source="amount" />
        <ReferenceInput
          source="paymentIntent.id"
          reference="PaymentIntent"
          label="paymentIntent"
        >
          <SelectInput optionText={PaymentIntentTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
