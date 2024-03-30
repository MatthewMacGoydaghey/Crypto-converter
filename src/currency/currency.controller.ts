import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyParams } from './DTO/currencyParamsInt';
import { QueryParamsDTO } from './DTO/queryParamsDTO';
import { ApiOperation, ApiResponse} from '@nestjs/swagger';

@Controller('currency')
export class CurrencyController {
  constructor(
    private readonly CurrencyService: CurrencyService
  ) {}


  @ApiOperation({summary: "Конвертирует валюту"})
  @ApiResponse({status: 200})
  @Get('/convert')
  convertCurrency(@Query() queryParams: QueryParamsDTO) {
    const currencyParams = {
      from: queryParams.from,
      to: queryParams.to,
      amount: parseInt(queryParams.amount) | 1
    } as CurrencyParams
    return this.CurrencyService.convertCurrency(currencyParams)
  }



  
}
