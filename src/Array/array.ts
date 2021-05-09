export class ArrayList {
    private items:number[]
    private count = 0
    constructor(length: number){
    this.items = new Array(length)
    }



    public print() :void {
        for( let i = 0; i<this.count;i++){
            console.log(this.items[i]);
        }
    }

    public insert(item : number): void{
        
        // double the length of array
        if(this.items.length == this.count){
            let newArray = new Array(this.items.length * 2);

            for(let i = 0; i<this.count;i++){
                newArray[i] = this.items[i]
            }
            this.items = newArray;
        }

        this.items[this.count++] = item;
        console.log(this.items)
    }

    public removeAt(index:number) :void {
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