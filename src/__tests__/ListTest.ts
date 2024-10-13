export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);

    while (list.length > 0) {
        list.removeAt(list.length - 1); // Continuously remove the last element
    }

    for (let j = 0; j < 10; ++j) {
        list.insertAt(j, j);
    }
    list.insertAt(1, 5);

    while (list.length > 0) {
        list.removeAt(list.length - 1); // Continuously remove the last element
    }

    for (let i = 10; i <= 50; i += 10) {
        list.append(i);
    }

    // List should now be [10, 20, 30, 40, 50]
    expect(list.length).toEqual(5);
    expect(list.get(4)).toEqual(50);
    list.removeAt(4);
    expect(list.get(3)).toEqual(40);
    list.removeAt(3);
    expect(list.length).toEqual(3);
    // Confirm the list is now [10, 20, 30]
    expect(list.get(2)).toEqual(30);

    // Test removing and appending in a loop
    while (list.length > 0) {
        list.removeAt(0); // Continuously remove the first element
    }
    // The list should now be empty
    expect(list.length).toEqual(0);

    // Repopulate the list and test prepend after removals
    for (let i = 1; i <= 3; i++) {
        list.append(i * 2); // Appends 2, 4, 6
    }
    // List should now be [2, 4, 6]
    list.remove(4); // Remove the middle element
    // Test the order is maintained correctly after removals
    expect(list.get(0)).toEqual(2);
    expect(list.get(1)).toEqual(6);
    list.prepend(8); // Prepend an element to the start
    // Confirm prepend works correctly, list should be [8, 2, 6]
    expect(list.get(0)).toEqual(8);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(6);
    expect(list.length).toEqual(3);

    // Test more edge cases if necessary
    // For instance, removing an element that doesn't exist
    expect(list.remove(10)).toEqual(undefined); // Assuming remove returns undefined for non-existent elements
    // Confirm the operation did not affect the list size unexpectedly
    expect(list.length).toEqual(3);

    // Further confirm the integrity after all operations
    list.append(10);
    expect(list.get(3)).toEqual(10);
    list.removeAt(2); // Remove '6', which is now at index 2
    expect(list.length).toEqual(3);
    // Final state expected: [8, 2, 10]
    expect(list.get(0)).toEqual(8);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(10);
}
