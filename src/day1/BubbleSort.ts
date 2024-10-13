export default function bubble_sort(arr: number[]): void {
    // 'i' tracks the amount of items sorted at the end of the array.
    for (let i = 0; i < arr.length; ++i) {
        // 'j' represents the current index of the array.
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            // If the current element is greater than the next, swap them.
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

