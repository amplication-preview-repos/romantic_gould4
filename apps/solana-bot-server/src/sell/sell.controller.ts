import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SellService } from "./sell.service";
import { SellControllerBase } from "./base/sell.controller.base";

@swagger.ApiTags("sells")
@common.Controller("sells")
export class SellController extends SellControllerBase {
  constructor(protected readonly service: SellService) {
    super(service);
  }
}
