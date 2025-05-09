import { PaymentIntentWhereInput } from "./PaymentIntentWhereInput";
import { PaymentIntentOrderByInput } from "./PaymentIntentOrderByInput";

export type PaymentIntentFindManyArgs = {
  where?: PaymentIntentWhereInput;
  orderBy?: Array<PaymentIntentOrderByInput>;
  skip?: number;
  take?: number;
};
