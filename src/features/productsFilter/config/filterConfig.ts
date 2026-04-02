export const filterConfig = {
  category: {
    parse: (v: string | null) => v ?? undefined,
    serialize: (v: string | undefined) => v,
  },
  priceFrom: {
    parse: (v: string | null) => {
      if (!v) return undefined;
      const n = Number(v);
      return isNaN(n) ? undefined : n;
    },
    serialize: (v: number | undefined) =>
      v !== undefined ? String(v) : undefined,
  },
  priceTo: {
    parse: (v: string | null) => {
      if (!v) return undefined;
      const n = Number(v);
      return isNaN(n) ? undefined : n;
    },
    serialize: (v: number | undefined) =>
      v !== undefined ? String(v) : undefined,
  },
  rating: {
    parse: (v: string | null) => {
      if (!v) return undefined;
      const n = Number(v);
      return isNaN(n) ? undefined : n;
    },
    serialize: (v: number | undefined) =>
      v !== undefined ? String(v) : undefined,
  },
} as const;
