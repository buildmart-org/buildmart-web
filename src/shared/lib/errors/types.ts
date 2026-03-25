export interface ApiDataError {
  message?: string;
  detail?: string;
}

export interface RTKQueryError {
  status: number | 'FETCH_ERROR' | 'PARSING_ERROR' | 'CUSTOM_ERROR';
  data?: unknown;
}
