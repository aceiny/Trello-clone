import {IsIn, IsNotEmpty, Length } from "class-validator";
import { userRole } from "./auth.types";

export class authDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(4)
    password: string;
}