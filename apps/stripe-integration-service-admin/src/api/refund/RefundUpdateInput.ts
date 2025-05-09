import { PaymentIntentWhereUniqueInput } from "../paymentIntent/PaymentIntentWhereUniqueInput";

export type RefundUpdateInput = {
  amount?: number | null;
  paymentIntent?: PaymentIntentWhereUniqueInput | null;
  status?: string | null;
};
