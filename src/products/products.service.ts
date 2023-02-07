import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity'; 
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  private products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
    console.log(this.products)
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(productId: number) {
    return this.products.find((product) => product.productId === productId);
  }

  update(productId:number, ) {
    
  }

  remove(productId:number){
    
  }
}
