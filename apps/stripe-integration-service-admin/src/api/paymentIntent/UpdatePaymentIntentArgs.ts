import { PaymentIntentWhereUniqueInput } from "./PaymentIntentWhereUniqueInput";
import { PaymentIntentUpdateInput } from "./PaymentIntentUpdateInput";

export type UpdatePaymentIntentArgs = {
  where: PaymentIntentWhereUniqueInput;
  data: PaymentIntentUpdateInput;
};
