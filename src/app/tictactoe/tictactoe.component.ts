import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as gamesProp from '../games.properties';
@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {

  @Input()  start: any;
  @Input() public game :any;
  @Output() exitGame = new EventEmitter<string>();
  public val = " ";
  public items: any[3][3] = [[" "," "," "],[" "," "," "],[" "," "," "]];
  public gameProp = gamesProp;
  public count = false;
  public winner: string="";
  constructor() { }

  ngOnInit(): void {
  this.val = " ";
  this.count = false;
}
exit(){
  this.reset();
  this.exitGame.emit(this.gameProp.TIC_TAC);
  }
  enterInput(value: any,i: number,j: number){
    if(value==" " && !this.count){
      this.items[j][i] = " X ";
    }
    if(value==" " && this.count){
      this.items[j][i] = " O ";
    }
    this.count = this.count ? false : true;
    this.result();
  }
  result(){
    if(this.items[0][0]===this.items[1][1] && this.items[1][1]===this.items[2][2] 
      &&(this.items[1][1]===" X " || this.items[1][1]===" O ")){
        if(this.items[0][0]!==" " && this.items[1][1]!==" "){
        this.winner= this.items[0][0] === " X "? "Player 1" : "Player 2";}
     }
     if(this.items[0][2]===this.items[1][1] && this.items[0][2]===this.items[2][0]
       &&(this.items[1][1]===" X " || this.items[1][1]===" O ")){
        if(this.items[1][1]!== " "&&  this.items[0][2]!==" "){
        this.winner= this.items[2][0] === " X "? "Player 1" : "Player 2";}
     }
    if(this.items[2][0]===this.items[2][1] && this.items[2][0]===this.items[2][2] 
      &&(this.items[2][1]===" X " || this.items[2][1]===" O ")){
      if(this.items[2][0]!==" " && this.items[2][1]!==" "){
      this.winner= this.items[2][0] === " X "? "Player 1" : "Player 2";}
    }
    if(this.items[1][0]===this.items[1][1] && this.items[1][0]===this.items[1][2]
       &&(this.items[1][1]===" X " || this.items[1][1]===" O ")){
        if(this.items[1][0]!==" " && this.items[1][1]!==" "){
      this.winner= this.items[1][0] === " X "? "Player 1" : "Player 2";}
    }
    if(this.items[0][0]==this.items[0][1] && this.items[0][0]==this.items[0][2] 
      &&(this.items[0][1]===" X " || this.items[0][1]===" O ")){
        if(this.items[0][1]!==" " && this.items[0][0]!==" "){
        this.winner= this.items[0][2] == " X "? "Player 1" : "Player 2";}
    }
    if(this.items[0][0]==this.items[1][0] && this.items[0][0]==this.items[2][0] 
      &&(this.items[1][0]===" X " || this.items[1][0]===" O ")){
        if(this.items[1][0]!==" " && this.items[0][0]!==" "){
        this.winner= this.items[0][0] == " X "? "Player 1" : "Player 2";}
    }
    if(this.items[0][1]==this.items[1][1] && this.items[0][1]==this.items[2][1] 
      &&(this.items[1][1]===" X " || this.items[1][1]===" O ")){
        if(this.items[0][1]!==" " && this.items[1][1]!==" "){
        this.winner= this.items[0][1] == " X "? "Player 1" : "Player 2";}
    }
    if(this.items[0][2]==this.items[1][2] && this.items[0][2]==this.items[2][2] 
      &&(this.items[0][2]===" X " || this.items[0][2]===" O ")){
        if(this.items[0][2]!==" " && this.items[1][2]!==" "){
        this.winner= this.items[0][2] == " X "? "Player 1" : "Player 2";}
    }
  }
  reset(){
    this.winner = "";
    this.items = [[" "," "," "],[" "," "," "],[" "," "," "]];
    this.count = false;
  }
}
