export interface Cart {
  productId: string;
  quantity: number;
}

export interface CartSchema {
  items: Cart[];
}
