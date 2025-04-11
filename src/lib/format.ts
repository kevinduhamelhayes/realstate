/**
 * Format a price with the appropriate currency symbol
 * @param price - The price to format
 * @param isRental - Whether the price is for a rental (monthly) or a sale
 * @returns The formatted price
 */
export function formatPrice(price: number, isRental: boolean = false): string {
  // For prices over 1 million, format as X.XX M
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(2)}M`;
  }
  
  // For prices over 1000, format with thousands separator
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Format a date in a human-readable format
 * @param date - The date to format
 * @returns The formatted date
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Truncate a string to a specified length and add an ellipsis
 * @param str - The string to truncate
 * @param length - The maximum length before truncation
 * @returns The truncated string
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
} 