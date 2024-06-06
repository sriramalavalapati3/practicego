import { Refund } from "../refund/Refund";

export type PaymentIntent = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  customerId: string | null;
  id: string;
  paymentMethod: string | null;
  refunds?: Array<Refund>;
  status: string | null;
  updatedAt: Date;
};
