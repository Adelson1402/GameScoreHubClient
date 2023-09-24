import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/app/interfaces/game-info';
import { GameScoreHubService } from 'src/app/services/game-score-hub.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome!: string;
  gameInfo: GameInfo[] = [];

  anyy: any;
 
  constructor(private gsch: GameScoreHubService){}

  ngOnInit() {
    
  }

  searchGame(name: string){
    this.gsch.searchGame(name).subscribe(resp => {
      
      console.log(resp);

      this.gameInfo = resp;

    });
  }

}
