import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Formats a number as Colombian currency (COP).
 *
 * @param {number | null} value - The numeric value to format. If null, it defaults to 0.
 * @returns {string} The formatted currency string in "es-CO" locale.
 *
 * @example
 * formatCurrency(1500); // "$ 1.500,00"
 * formatCurrency(null); // "$ 0,00"
 */
export const formatCurrency = (value: number | null) => {
   return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
   }).format(value ?? 0);
};
