import { Timestamp } from 'rxjs';

export class Post{
    constructor(public title:string,public content:string,public loveIts:number,public created_at:string){     
        console.log(created_at);
    }

    toString(){
        return "title "+ this.title + " date_creattion "+ this.created_at;
    }
}