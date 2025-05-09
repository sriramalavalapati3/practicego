import { PaymentIntent as TPaymentIntent } from "../api/paymentIntent/PaymentIntent";

export const PAYMENTINTENT_TITLE_FIELD = "currency";

export const PaymentIntentTitle = (record: TPaymentIntent): string => {
  return record.currency?.toString() || String(record.id);
};
