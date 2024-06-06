import { Module } from "@nestjs/common";
import { StripePaymentsService } from "./stripepayments.service";
import { StripePaymentsController } from "./stripepayments.controller";
import { StripePaymentsResolver } from "./stripepayments.resolver";

@Module({
  controllers: [StripePaymentsController],
  providers: [StripePaymentsService, StripePaymentsResolver],
  exports: [StripePaymentsService],
})
export class StripePaymentsModule {}
