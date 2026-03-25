let toastFn: ((message: string) => void) | null = null;

export const setToast = (fn: (message: string) => void) => {
  toastFn = fn;
};

export const showToast = (message: string) => {
  toastFn?.(message);
};
