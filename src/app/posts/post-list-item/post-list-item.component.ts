import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit,OnDestroy {

  posts:Post[];
  postSubscribe:Subscription;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscribe=this.postService.subjectPost.subscribe(
      (posts:Post[])=>{
        this.posts=posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }
onLoveIt(index:number){
  this.postService.loveIt(index);
 
}
onDontLoveIt(index:number){
  this.postService.doNotLoveIt(index);
}

ngOnDestroy(){
  this.postSubscribe.unsubscribe();

  
}
onDeletePost(index:number){
  this.postService.deletePost(index);

}
}
