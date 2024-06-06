import { PaymentIntent } from "../paymentIntent/PaymentIntent";

export type Refund = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentIntent?: PaymentIntent | null;
  status: string | null;
  updatedAt: Date;
};
