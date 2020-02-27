export function fillUndefinedProps<T>(obj: T, initialObj: T): T {
  Object.entries(initialObj).forEach(([key, value]) => {
    if (obj[key] === undefined) {
      obj[key] = value;
    }
  });
  return obj;
}
