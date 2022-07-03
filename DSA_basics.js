// Basic node constructor

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (!(node instanceof Node)) {
            throw new Error('Next node must be a member of the Node class');
        }
        this.next = node;
    }

    getNextNode() {
        return this.next;
    }
}


// Next is a lined list class with methods for adding to head, add to tail, remove head and print list
// the LinkedList class is dependent on the Node class above.


class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    removeNode(data) {
        let currentHead = this.head;
        while (currentHead.getNextNode().data !== data) {
            currentHead = currentHead.getNextNode();
        }
        console.log(`Removed ${currentHead.getNextNode().data} from the list.`);
        currentHead.next = currentHead.getNextNode().next;

    }

    printList() {
        let currentNode = this.head;
        let output = "<head> ";
        while (currentNode !== null) {
            output += currentNode.data + " ";
            currentNode = currentNode.getNextNode();
        }
        output += "<tail>";
        console.log(output);
    }
}

