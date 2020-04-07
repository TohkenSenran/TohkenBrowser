export function fillUndefinedProps<T>(newObj: T, initialObj: T): T {
  const obj: T = { ...newObj };
  Object.entries(initialObj).forEach(([key, value]) => {
    if (typeof obj[key as keyof T] === 'undefined') {
      obj[key as keyof T] = value;
    }
  });
  return obj;
}
