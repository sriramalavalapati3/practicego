import * as graphql from "@nestjs/graphql";
import { IntentId } from "../stripePayments/IntentId";
import { CreateIntentOutput } from "../stripePayments/CreateIntentOutput";
import { CreateIntentInput } from "../stripePayments/CreateIntentInput";
import { CreateRefundInput } from "../stripePayments/CreateRefundInput";
import { StripePaymentsService } from "./stripepayments.service";

export class StripePaymentsResolver {
  constructor(protected readonly service: StripePaymentsService) {}

  @graphql.Mutation(() => CreateIntentOutput)
  async CaptureIntent(
    @graphql.Args()
    args: IntentId
  ): Promise<CreateIntentOutput> {
    return this.service.CaptureIntent(args);
  }

  @graphql.Query(() => String)
  async CreateIntent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateIntent(args);
  }

  @graphql.Mutation(() => CreateIntentOutput)
  async CreatePaymentIntent(
    @graphql.Args()
    args: CreateIntentInput
  ): Promise<CreateIntentOutput> {
    return this.service.CreatePaymentIntent(args);
  }

  @graphql.Mutation(() => CreateIntentOutput)
  async CreateRefund(
    @graphql.Args()
    args: CreateRefundInput
  ): Promise<CreateIntentOutput> {
    return this.service.CreateRefund(args);
  }

  @graphql.Query(() => [CreateIntentOutput])
  async GetIntents(
    @graphql.Args()
    args: string
  ): Promise<CreateIntentOutput[]> {
    return this.service.GetIntents(args);
  }
}
