import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StripePaymentsService } from "./stripepayments.service";
import { CreateIntentOutput } from "../stripePayments/CreateIntentOutput";

@swagger.ApiTags("stripePayments")
@common.Controller("stripePayments")
export class StripePaymentsController {
  constructor(protected readonly service: StripePaymentsService) {}

  @common.Post("/api/v1/capture_intent/:id")
  @swagger.ApiOkResponse({
    type: CreateIntentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CaptureIntent(
    @common.Body()
    body: string
  ): Promise<CreateIntentOutput> {
        return this.service.CaptureIntent(body);
      }

  @common.Get("/:id/create-intent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateIntent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateIntent(body);
      }

  @common.Post("/api/v1/create_payment_intent")
  @swagger.ApiOkResponse({
    type: CreateIntentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePaymentIntent(
    @common.Body()
    body: string
  ): Promise<CreateIntentOutput> {
        return this.service.CreatePaymentIntent(body);
      }

  @common.Post("/api/v1/create_refund/:id")
  @swagger.ApiOkResponse({
    type: CreateIntentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateRefund(
    @common.Body()
    body: string
  ): Promise<CreateIntentOutput> {
        return this.service.CreateRefund(body);
      }

  @common.Get("/api/v1/get_intents")
  @swagger.ApiOkResponse({
    type: CreateIntentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetIntents(
    @common.Body()
    body: string
  ): Promise<CreateIntentOutput[]> {
        return this.service.GetIntents(body);
      }
}
