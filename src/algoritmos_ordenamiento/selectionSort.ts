import { swap } from '../helpers/swap'

// Algoritmo de clasificación de selección O(n^2)
export function selectionSort(array: number[], size: number): number[] {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    swap(array, i, minIndex)
  }
  return array
}
