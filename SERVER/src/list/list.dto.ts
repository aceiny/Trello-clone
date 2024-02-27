import { IsNotEmpty, IsString } from "class-validator";

export class ListDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    description: string;
}