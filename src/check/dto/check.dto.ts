// src/check/dto/check-text.dto.ts
import { IsString, Length } from 'class-validator';

export class CheckTextDto {
  @IsString()
  @Length(1, 1000)
  text: string;
}
