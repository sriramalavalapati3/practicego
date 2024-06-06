import { PaymentIntentWhereUniqueInput } from "../paymentIntent/PaymentIntentWhereUniqueInput";

export type RefundCreateInput = {
  amount?: number | null;
  paymentIntent?: PaymentIntentWhereUniqueInput | null;
  status?: string | null;
};
