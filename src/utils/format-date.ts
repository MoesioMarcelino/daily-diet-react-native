export function formatDateToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatTimeToHHMM(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function formatDateToDDMMYY(date: string) {
  const [day, month, yyyy] = date.split("/");
  const [, , y, yy] = yyyy.split("");
  const year = `${y}${yy}`;
  return `${day}.${month}.${year}`;
}

export function parseDate(dateStr: string): Date {
  try {
    // Verifica se a string está no formato ISO
    if (dateStr.includes("-") && dateStr.includes("T")) {
      return new Date(dateStr);
    }

    // Verifica se a string está no formato DD/MM/YYYY HH:MM
    if (dateStr.includes("/") && dateStr.includes(" ")) {
      const [datePart, timePart] = dateStr.split(" ");
      const [day, month, year] = datePart.split("/").map(Number);
      const [hours, minutes] = timePart.split(":").map(Number);
      return new Date(year, month - 1, day, hours, minutes);
    }

    // Verifica se a string está no formato DD/MM/YYYY
    if (dateStr.includes("/")) {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month - 1, day);
    }

    throw new Error("Formato de data não reconhecido");
  } catch (error) {
    throw error;
  }
}
