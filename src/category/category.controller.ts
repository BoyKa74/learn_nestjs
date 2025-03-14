import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get('/:id')
  async index(@Param('id' ) id: number) {
    const category = await this.categoryService.getOneById(id);
    const products = category?.products;
    return {
      message: 'get',
      data: products,
    };
  }
}
