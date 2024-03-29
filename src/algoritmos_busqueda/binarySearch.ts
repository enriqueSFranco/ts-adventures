export function binarySearch (list: number[], low: number, high: number, query: number): number {
  if (low > high) return -1

  const mid = low + Math.floor(high - low / 2)

  if (list[mid] === query) return mid

  if (list[mid] < query) { // right
    return binarySearch(list, mid + 1, high, query)
  } else { // left
    return binarySearch(list, low, mid - 1, query)
  }
}
