import { SortOrder } from "../../util/SortOrder";

export type PaymentIntentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
