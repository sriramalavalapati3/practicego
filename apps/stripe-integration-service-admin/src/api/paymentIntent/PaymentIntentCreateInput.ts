import { RefundCreateNestedManyWithoutPaymentIntentsInput } from "./RefundCreateNestedManyWithoutPaymentIntentsInput";

export type PaymentIntentCreateInput = {
  amount?: number | null;
  currency?: string | null;
  customerId?: string | null;
  paymentMethod?: string | null;
  refunds?: RefundCreateNestedManyWithoutPaymentIntentsInput;
  status?: string | null;
};
