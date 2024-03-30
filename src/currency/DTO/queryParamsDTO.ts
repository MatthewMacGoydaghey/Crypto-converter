import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class QueryParamsDTO {
    @ApiProperty()
    @IsString()
    from: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    to: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    amount: string

}