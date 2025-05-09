import { Injectable } from "@nestjs/common";
import { IntentId } from "../stripePayments/IntentId";
import { CreateIntentOutput } from "../stripePayments/CreateIntentOutput";
import { CreateIntentInput } from "../stripePayments/CreateIntentInput";
import { CreateRefundInput } from "../stripePayments/CreateRefundInput";

@Injectable()
export class StripePaymentsService {
  constructor() {}
  async CaptureIntent(args: IntentId): Promise<CreateIntentOutput> {
    throw new Error("Not implemented");
  }
  async CreateIntent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreatePaymentIntent(args: CreateIntentInput): Promise<CreateIntentOutput> {
    throw new Error("Not implemented");
  }
  async CreateRefund(args: CreateRefundInput): Promise<CreateIntentOutput> {
    throw new Error("Not implemented");
  }
  async GetIntents(args: string): Promise<CreateIntentOutput[]> {
    throw new Error("Not implemented");
  }
}
