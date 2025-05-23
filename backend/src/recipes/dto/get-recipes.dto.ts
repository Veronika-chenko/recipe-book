import { IsOptional, IsString } from 'class-validator';

export class GetRecipesDto {
  @IsOptional()
  @IsString()
  ingredient?: string;

  @IsOptional()
  @IsString()
  area?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
