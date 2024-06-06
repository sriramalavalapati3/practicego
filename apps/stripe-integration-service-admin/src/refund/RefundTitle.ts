import { Refund as TRefund } from "../api/refund/Refund";

export const REFUND_TITLE_FIELD = "status";

export const RefundTitle = (record: TRefund): string => {
  return record.status?.toString() || String(record.id);
};
