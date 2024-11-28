import { Product } from "./product";

export interface SubService {
  id: number;
  name: string;
  description: string;
  image:string;
  products: Product[];
}