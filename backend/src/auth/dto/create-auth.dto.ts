import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  tfa: string;
}