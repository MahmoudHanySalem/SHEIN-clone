import { Product } from "../services/product.service"

export interface cartProduct{
  productId:number,
    quantity: number
}

export interface Cart {
    id : number,
userId : number,
products : cartProduct[]
}
