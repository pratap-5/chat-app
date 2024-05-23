export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const mins = padZero(date.getMinutes());
  return `${hours}:${mins}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
