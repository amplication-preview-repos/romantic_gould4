import { Module } from "@nestjs/common";
import { BuyModuleBase } from "./base/buy.module.base";
import { BuyService } from "./buy.service";
import { BuyController } from "./buy.controller";
import { BuyResolver } from "./buy.resolver";

@Module({
  imports: [BuyModuleBase],
  controllers: [BuyController],
  providers: [BuyService, BuyResolver],
  exports: [BuyService],
})
export class BuyModule {}
