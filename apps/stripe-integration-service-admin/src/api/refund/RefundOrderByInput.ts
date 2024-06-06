import { SortOrder } from "../../util/SortOrder";

export type RefundOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentIntentId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
