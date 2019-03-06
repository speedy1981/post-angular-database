import { OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

import * as fireBase from 'firebase';

export class PostService {

    posts:Post[]=[];
    subjectPost=new Subject<Post[]>();

    emitPosts(){
        this.subjectPost.next(this.posts);
    }
    savePosts(){
        fireBase.database().ref("/posts").set(this.posts);
    }
    getPosts(){
        fireBase.database().ref("/posts").on('value',(data)=>{
            this.posts=data.val()?data.val():[];           
            this.emitPosts();
        }
        
        )
    }

    deletePost(id:number){
         this.posts.splice(id,1);
         this.savePosts();
         this.emitPosts();
       }
    
    loveIt(index:number){
        this.posts[index].loveIts+=1;
        this.savePosts();
        this.emitPosts();
    }

    doNotLoveIt(index:number){
        this.posts[index].loveIts-=1;
        this.savePosts();
        this.emitPosts();
    }

    addPost(post:Post){
        this.posts.push(post);
        this.savePosts();       
        this.emitPosts();
    }
}