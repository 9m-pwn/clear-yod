import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { compareStatus } from './interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  compareIncome(
    orderId: number,
    itemAmountSatang: number,
    shippingCreditCardSatang: number,
    feeSatang: number,
    refundSatang: number,
    netPaidSatang: number,
  ): compareStatus {


    return this.appService.compareIncome(
      orderId,
      itemAmountSatang,
      shippingCreditCardSatang,
      feeSatang,
      refundSatang,
      netPaidSatang,
    );
  }
}
