import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
postForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private postService:PostService
    ,private route:Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
onSavePost(){
  
  const title = this.postForm.get("title").value;
  const content = this.postForm.get("content").value;
  const created_at=new Date();
  const post=new Post(title,content,0,created_at.toLocaleString());
 




  this.postService.addPost(post);
  this.route.navigate(["/posts"])
}
}
