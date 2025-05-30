export function capitalize(val: string): string {
  if (!val || val.length === 0) {
    return val;
  }
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
