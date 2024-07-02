import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SellServiceBase } from "./base/sell.service.base";

@Injectable()
export class SellService extends SellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
