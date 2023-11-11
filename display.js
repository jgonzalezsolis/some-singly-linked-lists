class SLLNode {
    constructor(val){
        this.value =val;
        this.next =null;
    }
}

class SLL {
    constructor(){
        this.head = null; 
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if(this.head == null){
            return this.head
        }

        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next =null;
        return this.head
    }

    front(){
        if (this.head == null){
            return null;
        }else{
            return this.head.value
        }
    }
    
    
    display(){
        var listStr = "";
        if (this.head == null){
            return "list is empty";
        }
        listStr += this.head.value;
        var runner = this.head.next;
        while (runner != null){
            listStr +=  "," + runner.value;
            runner = runner.next;
        }
        return listStr;
    }
}




var mySSL = new SLL ();
// console.log(mySSL.front())
mySSL.addFront(10);
mySSL.addFront(1);
// console.log(mySSL.front())
mySSL.addFront(7);
console.log(mySSL.display())
// console.log(mySSL);
// console.log(mySSL.head);
// console.log(mySSL.head.next);
// mySSL.removeFront();
// console.log(mySSL)
// mySSL.removeFront();
// console.log(mySSL)


