import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function fetchHandler(
  url: string,
  options: {
    method: string;
    headers?: any;
    body?: any;
  } = { method: "GET" }
) {
  const response = await fetch(url, {
    method: options.method,
    headers: options.headers,
    body: JSON.stringify(options.body),
  });
  const data = await response.json();
  return data;
}
