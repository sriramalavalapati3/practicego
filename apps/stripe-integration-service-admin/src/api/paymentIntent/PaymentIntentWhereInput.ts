import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RefundListRelationFilter } from "../refund/RefundListRelationFilter";

export type PaymentIntentWhereInput = {
  amount?: IntNullableFilter;
  currency?: StringNullableFilter;
  customerId?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  refunds?: RefundListRelationFilter;
  status?: StringNullableFilter;
};
