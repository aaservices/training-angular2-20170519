export class account {
    public name:string;
    public friendlyname? :string;
    public amount:number;

    // constructor(name:string, friendlyname:string, amount:number){
    //     this.name=name;
    //     this.friendlyname=friendlyname;
    //     this.amount = amount; 
    // }

    public getRundomAccount(i:number) : account {
        let a = new account();
        a.amount = Math.random() * 1000;
        a.name = "Type: " + i.toString();
        a.friendlyname = "Fname: " + Math.random();
        return a;
    }
}