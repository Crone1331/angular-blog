import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: PostDataService["postsData"] = [];
  constructor(
    private postsService: PostDataService,
  ) { }

  ngOnInit(): void {
    this.posts = this.postsService.postsData;
  }

}
