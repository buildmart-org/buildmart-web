import { useGetDealsQuery } from './api/dealApi';
import type { Deal } from './model/types/types';
import { DealsList } from '@/entities/deal/ui/DealsList/DealsList.tsx';

export { useGetDealsQuery, DealsList };
export type { Deal };
