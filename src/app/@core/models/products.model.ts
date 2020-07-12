import { Category } from './category.models';

export class Product {
    id: number;
    name: string;
    price: string;
    available: boolean;
    best_seller: boolean;
    categories: Category[];
    img: string;
    description: string;
  }
  