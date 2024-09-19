import { Component, OnInit } from "@angular/core";
import { GitHubUser } from "./types";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  userArray: GitHubUser[] = [];

  borderStyle = { border: "1px black solid" };
  gridStyle = { "margin-inline:": "20px" };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<GitHubUser[]>("https://api.github.com/users")
      .subscribe(resp => {
        this.userArray = resp;
      });
  }
}
