export default class MinHeap<T> {
    private data: T[] = [];
    public length: number = 0;

    constructor() {}

    insert(value: T): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        ++this.length;
    }
    delete(): T {
        if (this.length === 0) throw new Error("No elements in array");
        const value = this.data[0];
        --this.length;
        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this.heapifyDown(0);
        } else this.data = [];
        return value;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const p = this.parent(idx);
        const parentV = this.data[p];
        const childV = this.data[idx];

        if (parentV > childV) {
            this.data[idx] = parentV;
            this.data[p] = childV;
            this.heapifyUp(p);
        }
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);
        if (idx >= this.length || lIdx >= this.length) return;
        const lValue = this.data[lIdx];
        const rValue = this.data[rIdx];
        const value = this.data[idx];

        if (lValue > rValue && value > rValue) {
            this.data[idx] = rValue;
            this.data[rIdx] = value;
            this.heapifyDown(rIdx);
        }
        if (rValue > lValue && value > lValue) {
            this.data[idx] = lValue;
            this.data[lIdx] = value;
            this.heapifyDown(lIdx);
        }
    }
}
