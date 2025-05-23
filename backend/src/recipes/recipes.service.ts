import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { GetRecipesDto } from './dto/get-recipes.dto';
import { RecipesResponse } from './entities/recipe.entity';

export function toSnakeCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

@Injectable()
export class RecipesService {
  private readonly baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  async findAll(dto: GetRecipesDto) {
    let url = '';

    if (dto.ingredient) {
      url = `${this.baseUrl}/filter.php?i=${encodeURIComponent(toSnakeCase(dto.ingredient))}`;
    } else if (dto.area) {
      url = `${this.baseUrl}/filter.php?a=${encodeURIComponent(dto.area)}`;
    } else if (dto.category) {
      url = `${this.baseUrl}/filter.php?c=${encodeURIComponent(dto.category)}`;
    } else {
      url = `${this.baseUrl}/search.php?s=`;
    }

    try {
      const response = await axios.get<RecipesResponse>(url);
      return response.data.meals;
    } catch {
      throw new HttpException('Failed to fetch recipes', HttpStatus.BAD_GATEWAY);
    }
  }

  async findOne(id: number) {
    try {
      const response = await axios.get<RecipesResponse>(`${this.baseUrl}/lookup.php?i=${encodeURIComponent(id)}`);
      return response.data.meals;
    } catch {
      throw new HttpException('Failed to fetch meal details', HttpStatus.BAD_GATEWAY);
    }
  }
}
