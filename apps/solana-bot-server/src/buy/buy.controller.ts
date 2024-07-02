import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BuyService } from "./buy.service";
import { BuyControllerBase } from "./base/buy.controller.base";

@swagger.ApiTags("buys")
@common.Controller("buys")
export class BuyController extends BuyControllerBase {
  constructor(protected readonly service: BuyService) {
    super(service);
  }
}
