class LRUNode<T> {
    constructor(
        public value: T,
        public prev?: LRUNode<T>,
        public next?: LRUNode<T>,
    ) {}
}

export default class LRU<K, V> {
    private length = 0;
    private head?: LRUNode<V>;
    private tail?: LRUNode<V>;
    private lookup = new Map<K, LRUNode<V>>();
    private reverseLookup = new Map<LRUNode<V>, K>();
    constructor(private capacity: number) {}

    update(key: K, value: V): void {
        let node = this.lookup.get(key);
        if (!node) {
            node = new LRUNode(value, undefined, this.head);
            this.length++;
            this.trimCache();
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else this.detach(node);
        node.value = value;
        this.prepend(node);
    }
    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if (!node) return;
        this.detach(node);
        this.prepend(node);
        return node.value;
    }

    private detach(node: LRUNode<V>) {
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail = this.tail.prev;
    }

    private trimCache() {
        if (this.length <= this.capacity) return;
        const tail = this.tail!;
        this.detach(tail);
        const key = this.reverseLookup.get(tail);

        this.lookup.delete(key!);
        this.reverseLookup.delete(tail);
        this.length--;
    }

    private prepend(node: LRUNode<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
}
