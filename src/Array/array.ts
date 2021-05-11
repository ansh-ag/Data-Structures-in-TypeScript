export class ArrayList<T> {
    private items:T[]
    private count = 0
    constructor(length: number){
        this.items = new Array(length)
    }



    public print() :void {
        for( let i = 0; i<this.count;i++){
            console.log(this.items[i]);
        }
    }

    public push(item : T): void{
        
        // double the length of array
        if(this.items.length == this.count){
            let newArray = new Array(this.items.length * 2);

            for(let i = 0; i<this.count;i++){
                newArray[i] = this.items[i]
            }
            this.items = newArray;
        }

        this.items[this.count++] = item;
    }

    public indexOf(item:T): number {
        for(let i = 0; i<this.count;i++){
            if(this.items[i] == item)
                return i;
        }
        return -1;
    }

    public pop():T[] {
        if(this.count == 0)
            throw 'no items in array found to pop'
        this.items[--this.count] =null
        return this.items;    
    }

    public remove(index:number) :void {
        // validate index
        if(index < 0 || index >= this.count){
            throw "bad index"
        }

        // shift items, fill the hole
        for(let i =index; i<this.count;i++){
            this.items[i] = this.items[i+1];
        }
        this.count--;
        
    }
}