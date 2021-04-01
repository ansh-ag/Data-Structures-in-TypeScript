class LinkedListNode {
    constructor(public value, public next: LinkedListNode = null){ };

    public print(){
        console.log("NodeValue: " + this.value);
        if(this.next){
            this.next.print();
        }
    }

}


class LinkedList<T> {
    head:LinkedListNode = null;
    tail:any = null;
    constructor(){}

    public prepend(value:T){
        const listNode = new LinkedListNode(value);
        if(!this.head){
            this.head = listNode;
            this.tail = listNode;
            // return the linkedList after appending
            return this;
        }
        // Attach new node to the end of linked list.
        listNode.next = this.head;
        this.head = listNode;
        return this;
    }
    public append(value : T){
        const listNode = new LinkedListNode(value);
        if(!this.head){
            
            this.head = listNode;
            this.tail = listNode;
            // return the linkedList after appending
            console.log(this)
            return this;
        }
        // Attach new node to the end of linked list.
        this.tail.next = listNode;
        this.tail = listNode;
        console.log(this)
        return this;
    }
}



const a = new LinkedList();
a.append("B");
a.append("C");
a.prepend("A");





console.log(JSON.stringify(a.head))


