export default function two_crystal_balls(breaks: boolean[]): number {
    // Calculate jump amount based on the square root of the array's length.
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    // Initialize 'i' to the first jump position.
    let i = jmpAmount;

    // First loop: Jump through the array in increments of jmpAmount to find the upper bound.
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            // A 'true' value found, indicating a potential breakpoint; exit loop to adjust search area.
            break;
        }
    }

    // Adjust 'i' to the start of the current search block to find the lower bound of the potential breakpoint.
    i -= jmpAmount;

    // Second loop: Perform a linear search from the lower bound to find the exact breakpoint.
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            // The exact breakpoint found; return the index.
            return i;
        }
    }

    // If no breakpoint is found, return -1.
    return -1;
}
