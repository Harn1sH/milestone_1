import { Component, Input, OnInit,AfterViewInit } from '@angular/core';
import { GitHubUser } from '../card-list/types';


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit,AfterViewInit {

  @Input('user') user!:GitHubUser


  constructor() {
    
  }
  ngAfterViewInit(): void {  }

  ngOnInit(): void {}
}
