import { Module } from "@nestjs/common";
import { SellModuleBase } from "./base/sell.module.base";
import { SellService } from "./sell.service";
import { SellController } from "./sell.controller";
import { SellResolver } from "./sell.resolver";

@Module({
  imports: [SellModuleBase],
  controllers: [SellController],
  providers: [SellService, SellResolver],
  exports: [SellService],
})
export class SellModule {}
