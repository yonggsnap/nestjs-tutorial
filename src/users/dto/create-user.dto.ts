import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { role } from "src/types";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["ADMIN", "ENGINEER", "INTERN"], {
        message: "Valid role required"
    })
    role: role;
}