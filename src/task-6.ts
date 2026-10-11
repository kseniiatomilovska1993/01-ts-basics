function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

// Масив змішаних типів без відповідного типу викличе помилку:
// getFirstElement<number>([1, "b", true]);
