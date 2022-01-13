import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  response : any;
  responseArr: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.search();

  }


  search() {
    //TODO services
    this.http.get('https://testapicrone1331.000webhostapp.com/')
    .subscribe((response) => {
      this.response = response;
      this.responseArr = JSON.parse(this.response);
      //console.log(this.responseArr)
    })
  }
}
