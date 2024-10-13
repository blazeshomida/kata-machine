type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number = 0;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {}

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        if (this.head) this.head.prev = node;
        else this.tail = node;
        this.head = node;
        ++this.length;
    }

    insertAt(idx: number, item: T): void {
        if (idx === 0) return this.prepend(item);
        if (idx === this.length) return this.append(item);
        const selectedNode = this.getNodeAt(idx);
        if (selectedNode) {
            const node: Node<T> = {
                value: item,
                next: selectedNode,
                prev: selectedNode.prev,
            };
            if (selectedNode.prev) selectedNode.prev.next = node;
            selectedNode.prev = node;
            ++this.length;
        }
    }

    append(item: T): void {
        const node: Node<T> = { value: item, prev: this.tail };
        if (this.tail) this.tail.next = node;
        else this.head = node;
        this.tail = node;
        ++this.length;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        while (current !== undefined) {
            if (current.value !== item) {
                current = current.next;
                continue;
            }
            this.removeNode(current);
            return current.value;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getNodeAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        const selectedNode = this.getNodeAt(idx);
        if (selectedNode) this.removeNode(selectedNode);
        return selectedNode?.value;
    }

    private getNodeAt(idx: number) {
        if (idx < 0 || idx >= this.length)
            throw new Error("Invalid index passed");
        if (idx === 0) return this.head;
        if (idx === this.length - 1) return this.tail;

        let currentNode = this.head;
        let steps = idx;
        let target: Exclude<keyof Node<T>, "value"> = "next";
        const mid = getMid(this.length);

        if (idx > mid) {
            currentNode = this.tail;
            steps = this.length - 1 - idx;
            target = "prev";
        }

        for (let i = 0; i < steps && currentNode; ++i) {
            currentNode = currentNode?.[target];
        }

        return currentNode;
    }

    private removeNode(node: Node<T>) {
        if (node.prev) node.prev.next = node.next;
        else this.head = node.next;

        if (node.next) node.next.prev = node.prev;
        else this.tail = node.prev;

        --this.length;
        if (this.length === 0) this.head = this.tail = undefined;
    }
}

function getMid(length: number, low: number = 0, high: number = length) {
    return Math.floor(low + (high - low) / 2);
}
