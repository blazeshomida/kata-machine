type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        this.head = node;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) return this.prepend(item);
        if (idx >= this.length) return this.append(item);
        let current = this.head;
        for (let i = 1; i < idx && current !== undefined; i++) {
            current = current.next;
        }

        if (current) {
            const node: Node<T> = { value: item, next: current.next };
            current.next = node;
            this.length++;
        }
    }
    append(item: T): void {
        const node: Node<T> = { value: item, next: undefined };
        if (this.tail) this.tail.next = node;
        if (!this.length) this.head = node;
        this.tail = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        if (this.head.value === item) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            if (this.length === 1) this.tail = undefined;
            this.length--;
            return removedValue;
        }

        let current: Node<T> | undefined = this.head;
        let prev = undefined;
        while (current !== undefined && current.value !== item) {
            prev = current;
            current = current.next;
        }

        if (current && current.value === item) {
            if (this.tail === current) {
                this.tail = prev;
            }

            if (prev) {
                prev.next = current.next;
            }

            this.length--;
            return current.value;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        let current = this.head;
        for (let i = 0; i < this.length; ++i) {
            if (i === idx) break;
            current = current?.next;
        }
        return current?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || !this.head) return undefined;
        if (idx === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            if (this.length === 1) this.tail = undefined;
            this.length--;
            return removedValue;
        }

        let current: Node<T> | undefined = this.head;
        let prev = undefined;
        for (let i = 0; current != undefined && i < idx; i++) {
            prev = current;
            current = current.next;
        }

        if (current) {
            const removedValue = current.value;
            if (prev) prev.next = current.next;
            if (this.tail === current) this.tail = prev; // If removing the last item
            this.length--;
            return removedValue;
        }
        return undefined;
    }
}
