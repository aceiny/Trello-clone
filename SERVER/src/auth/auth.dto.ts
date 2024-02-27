import {IsIn, IsNotEmpty, Length } from "class-validator";
import { userRole } from "./auth.types";

export class authDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(4)
    password: string;

    @IsNotEmpty()
    @IsIn([userRole.ADMIN, userRole.USER])
    role : userRole;
}