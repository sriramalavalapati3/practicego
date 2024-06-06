import { Module } from "@nestjs/common";
import { PaymentIntentModuleBase } from "./base/paymentIntent.module.base";
import { PaymentIntentService } from "./paymentIntent.service";
import { PaymentIntentController } from "./paymentIntent.controller";
import { PaymentIntentResolver } from "./paymentIntent.resolver";

@Module({
  imports: [PaymentIntentModuleBase],
  controllers: [PaymentIntentController],
  providers: [PaymentIntentService, PaymentIntentResolver],
  exports: [PaymentIntentService],
})
export class PaymentIntentModule {}
