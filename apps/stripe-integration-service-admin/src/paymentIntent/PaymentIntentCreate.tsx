import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RefundTitle } from "../refund/RefundTitle";

export const PaymentIntentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="amount" source="amount" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customerId" source="customerId" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <ReferenceArrayInput
          source="refunds"
          reference="Refund"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RefundTitle} />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
