import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  productId?: number;
  productName?: string;
  price: number;
  rating?: number;
  discount?: number;
  productImage?: string;
}
