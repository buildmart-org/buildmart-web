export interface ServerResponse<T, M = unknown> {
  data: T;
  meta?: M;
}
