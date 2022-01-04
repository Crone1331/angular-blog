import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public img : string = '';
  constructor() { }

  ngOnInit(): void {
    this.img = 'assets/img/posts/cat.jpg'

  }

}
