import * as graphql from "@nestjs/graphql";
import { BuyResolverBase } from "./base/buy.resolver.base";
import { Buy } from "./base/Buy";
import { BuyService } from "./buy.service";

@graphql.Resolver(() => Buy)
export class BuyResolver extends BuyResolverBase {
  constructor(protected readonly service: BuyService) {
    super(service);
  }
}
