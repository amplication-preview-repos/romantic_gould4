import * as graphql from "@nestjs/graphql";
import { SellResolverBase } from "./base/sell.resolver.base";
import { Sell } from "./base/Sell";
import { SellService } from "./sell.service";

@graphql.Resolver(() => Sell)
export class SellResolver extends SellResolverBase {
  constructor(protected readonly service: SellService) {
    super(service);
  }
}
