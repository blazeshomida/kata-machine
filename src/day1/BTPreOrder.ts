function walk(curr: BinaryNode<number> | null, path: number[] = []): number[] {
    // 1. Base Case
    if (!curr) return path;

    // 2. Recurse
    // pre
    path.push(curr.value);
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head);
}
