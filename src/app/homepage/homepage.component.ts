import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public imagesPath = '/assets/images/'
  public start = true;
  public game: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  tictactoe() {
    this.start = false;
    this.game = "tictactoe";
  }
  exit(value: any) {
    this.start = value ? true : false;
  }
}
