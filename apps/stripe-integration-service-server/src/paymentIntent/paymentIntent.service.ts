import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentIntentServiceBase } from "./base/paymentIntent.service.base";

@Injectable()
export class PaymentIntentService extends PaymentIntentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
