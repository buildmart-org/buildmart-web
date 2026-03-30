import type { PaginationMeta, ServerResponse } from '@/shared/api/types.ts';

/**
 * Type Guard to check for pagination metadata.
 * Uses 'unknown' to satisfy strict linting and performs runtime structure validation.
 */
const hasMeta = <T>(
  response: unknown,
): response is Required<ServerResponse<T, PaginationMeta>> => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'meta' in response &&
    'data' in response &&
    (response as Record<string, unknown>).meta !== undefined &&
    (response as Record<string, unknown>).meta !== null
  );
};

/**
 * Overload 1: If the response contains metadata.
 * Returns the full ServerResponse where 'meta' is guaranteed to be present (Required).
 */
export function unwrap<T, M extends PaginationMeta>(
  response: ServerResponse<T, M>,
): Required<ServerResponse<T, M>>;

/**
 * Overload 2: If the response has no metadata (undefined or never).
 * Returns only the data payload (T).
 */
export function unwrap<T>(response: ServerResponse<T, undefined | never>): T;

/**
 * Implementation: Handles the unwrapping logic using type narrowing and unknown type.
 */
export function unwrap<T>(response: unknown): unknown {
  if (hasMeta<T>(response)) {
    // Return the whole object if metadata exists to preserve pagination
    return response;
  }

  if (typeof response === 'object' && response !== null && 'data' in response) {
    // Return only the data payload if no metadata is present
    return (response as ServerResponse<T>).data;
  }

  // Fallback: return the response as is if it doesn't match the ServerResponse structure
  return response;
}
