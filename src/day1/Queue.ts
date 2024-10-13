type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {}

    enqueue(item: T): void {
        const node = { value: item };
        if (!this.tail) this.head = node;
        else this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) return (this.tail = undefined);
        const head = this.head;
        this.head = head.next;
        this.length--;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
