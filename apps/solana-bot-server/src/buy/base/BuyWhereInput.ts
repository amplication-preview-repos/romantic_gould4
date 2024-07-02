/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { TokenWhereUniqueInput } from "../../token/base/TokenWhereUniqueInput";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";

@InputType()
class BuyWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TokenWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TokenWhereUniqueInput)
  @IsOptional()
  @Field(() => TokenWhereUniqueInput, {
    nullable: true,
  })
  token?: TokenWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WalletWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WalletWhereUniqueInput)
  @IsOptional()
  @Field(() => WalletWhereUniqueInput, {
    nullable: true,
  })
  wallet?: WalletWhereUniqueInput;
}

export { BuyWhereInput as BuyWhereInput };
