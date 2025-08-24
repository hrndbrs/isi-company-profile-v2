export function getLocalTime(timeString: string) {
  return new Date(timeString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Jakarta",
  });
}
