import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PaymentIntentTitle } from "../paymentIntent/PaymentIntentTitle";

export const RefundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
