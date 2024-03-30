import { IsOptional, IsString } from "class-validator";

export class QueryParamsDTO {
    @IsString()
    from: string

    @IsOptional()
    @IsString()
    to: string

    @IsOptional()
    @IsString()
    amount: string

}