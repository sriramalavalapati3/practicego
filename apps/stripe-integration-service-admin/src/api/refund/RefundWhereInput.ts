import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentIntentWhereUniqueInput } from "../paymentIntent/PaymentIntentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RefundWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
  paymentIntent?: PaymentIntentWhereUniqueInput;
  status?: StringNullableFilter;
};
