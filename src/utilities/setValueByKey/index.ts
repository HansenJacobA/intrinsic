export default function setValueByKey(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
