export function fillUndefinedProps<T>(obj: T, initialObj: T): T {
  Object.entries(initialObj).forEach(([key, value]) => {
    if (typeof obj[key as keyof T] === 'undefined') {
      obj[key as keyof T] = value;
    }
  });
  return obj;
}
