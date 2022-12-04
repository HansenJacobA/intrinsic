export default function setValueByKey(
  key: string,
  value: Record<string, never>
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
