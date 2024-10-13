type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number = 0;
    private head?: Node<T>;
    constructor() {}

    push(item: T): void {
        this.length++;
        const node: Node<T> = { value: item, prev: this.head };
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) return (this.head = undefined);
        const head = this.head;
        this.head = head.prev;
        this.length--;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
