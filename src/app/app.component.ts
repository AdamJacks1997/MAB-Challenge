import { Component, ViewChild } from '@angular/core';
import { LeaderboardService } from 'src/services/leaderboard.service';
import * as Players from 'src/players.json';
import { Player } from 'src/interfaces/player';
import { LeaderboardItem } from 'src/interfaces/leaderboardItem';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Scrabble Leaderboard';
  
  @ViewChild(MatSort) sort: MatSort;
  
  public players: Player[] = Players.Players;
  public leaderboardItems: LeaderboardItem[];
  public dataSource = new MatTableDataSource<LeaderboardItem>();
  public displayedColumns: string[] = ['name', 'totalScore', 'gamesPlayed', 'averageScore'];

  constructor(private leaderboardService: LeaderboardService) {
    this.leaderboardService.getLeaderboardData().subscribe(results => {
      this.leaderboardItems = results;

      this.leaderboardItems.forEach(item => {
        let player = this.players.find(player => player.playerId == item.playerId);
        item.name = player.name;
        item.averageScore = Math.round(item.totalScore / item.gamesPlayed * 10) / 10;
      });

      this.dataSource.data = this.leaderboardItems;
      this.dataSource.sort = this.sort;

      console.log(this.dataSource.data);
    });
  }
}
