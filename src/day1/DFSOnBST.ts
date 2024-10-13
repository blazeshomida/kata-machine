function search<T>(node: BinaryNode<T> | null, value: T): boolean {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) return search<T>(node.left, value);
    else return search<T>(node.right, value);
}

export default function dfs<T>(head: BinaryNode<T>, needle: T): boolean {
    return search(head, needle);
}
