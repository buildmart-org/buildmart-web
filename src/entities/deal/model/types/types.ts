import type { Product } from '@/entities/product/model/types/types.ts';

export interface Deal {
  id: string;
  title: string;
  description: string;
  bannerTitle: string;
  bannerText: string;
  endsAt: string;
  isActive: boolean;
  products: Product[];
}
