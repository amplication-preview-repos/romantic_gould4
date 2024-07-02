import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BuyServiceBase } from "./base/buy.service.base";

@Injectable()
export class BuyService extends BuyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
