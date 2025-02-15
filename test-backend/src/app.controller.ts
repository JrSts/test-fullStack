import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCountries(){
    return await this.appService.getCountries();
  }

  @Get(":id")
  async getCountryInfo(@Param() params: any) {
    return await this.appService.getCountryInfo(params.id);
  }

}
