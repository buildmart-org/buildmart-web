export type TargetType = 'PRODUCT' | 'CATEGORY';

export interface File {
  id: string;
  url: string;
  targetType: TargetType;
  isPrimary: boolean;
  createdAt: Date;
}
