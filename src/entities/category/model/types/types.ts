export interface Category {
  id: string;
  title: string;
  slug: string;
}

export type CategoryWithDetails = Category & {
  productCount: number;
  file: string | null;
};
