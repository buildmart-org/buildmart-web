export interface ServerResponse<T, M = unknown> {
  data: T;
  meta?: M;
}

export interface PaginationMeta {
  limit: number;
  currentPage: number;
  lastPage: number;
  total: number;
}
