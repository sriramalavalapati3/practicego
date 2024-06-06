import * as graphql from "@nestjs/graphql";
import { PaymentIntentResolverBase } from "./base/paymentIntent.resolver.base";
import { PaymentIntent } from "./base/PaymentIntent";
import { PaymentIntentService } from "./paymentIntent.service";

@graphql.Resolver(() => PaymentIntent)
export class PaymentIntentResolver extends PaymentIntentResolverBase {
  constructor(protected readonly service: PaymentIntentService) {
    super(service);
  }
}
