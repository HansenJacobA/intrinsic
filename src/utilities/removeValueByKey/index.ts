import getValueByKey from "../getValueByKey";

export default function removeValueByKey(key: string) {
  const valueToRemove = getValueByKey(key);
  if (valueToRemove === null) {
    return new Error("Key does not exist in storage");
  }
  localStorage.removeItem(key);
  return valueToRemove;
}
