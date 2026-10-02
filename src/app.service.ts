import { Injectable } from '@nestjs/common';
import { compareStatus } from './interface.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  

  compareIncome(orderId: number,
    itemAmountSatang: number,
    shippingCreditCardSatang: number,
    feeSatang: number,
    refundSatang: number,
    netPaidSatang: number,): compareStatus {
      let expectedTotal: number = itemAmountSatang + shippingCreditCardSatang - feeSatang - refundSatang;
      
      if (netPaidSatang < expectedTotal) {
        return compareStatus.UNDERPAID;
      } else if (netPaidSatang > expectedTotal) {
        return compareStatus.OVERPAID;
      }
      return compareStatus.MATCH;
  }
}
