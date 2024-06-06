import { RefundUpdateManyWithoutPaymentIntentsInput } from "./RefundUpdateManyWithoutPaymentIntentsInput";

export type PaymentIntentUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  customerId?: string | null;
  paymentMethod?: string | null;
  refunds?: RefundUpdateManyWithoutPaymentIntentsInput;
  status?: string | null;
};
