import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LeaderboardItem } from 'src/interfaces/leaderboardItem';
import { Observable } from 'rxjs';

@Injectable()
export class LeaderboardService {
    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private httpClient: HttpClient
    ) { }

    public getLeaderboardData(): Observable<LeaderboardItem[]> {
        return this.httpClient.get<LeaderboardItem[]>(
            `https://run.mocky.io/v3/985bbb67-2f7b-4d90-a401-62e115f38a13`,
            { headers: this.headers }
        );
    }
}
