/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BuyWhereUniqueInput } from "../../buy/base/BuyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BuyUpdateManyWithoutTokensInput {
  @Field(() => [BuyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BuyWhereUniqueInput],
  })
  connect?: Array<BuyWhereUniqueInput>;

  @Field(() => [BuyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BuyWhereUniqueInput],
  })
  disconnect?: Array<BuyWhereUniqueInput>;

  @Field(() => [BuyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BuyWhereUniqueInput],
  })
  set?: Array<BuyWhereUniqueInput>;
}

export { BuyUpdateManyWithoutTokensInput as BuyUpdateManyWithoutTokensInput };
