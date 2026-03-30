import type { File } from '@/entities/file';

export interface Category {
  id: string;
  title: string;
  slug: string;
}

export type CategoryWithDetails = Category & {
  productCount: number;
  files: File[];
};
