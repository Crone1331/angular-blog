import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../services/post-data.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public idPost: number = 0;
  public thisDataPost: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostDataService,
  ) { }

  ngOnInit(): void {
    this.idPost = this.route.snapshot.params['id'];
    this.thisDataPost = this.postService.postsData.filter(post => {
      return post.id == this.idPost;
    })
  }
}
