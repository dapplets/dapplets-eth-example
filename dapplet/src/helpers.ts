export default function isValidJSON(x: string) {
  try {
    JSON.parse(x);
    return true;
  } catch (err) {
    return false;
  }
}
