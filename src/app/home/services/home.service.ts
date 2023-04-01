import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CoinsModel } from '../model/coins.model';

@Injectable()
export class HomeService {
  private coinApi = environment.coinBaseApi;

  constructor(private http: HttpClient) {}

  getCoinByName(coinName: string): Observable<CoinsModel> {
    return this.http
      .get<CoinsModel>(`${this.coinApi}/${coinName}/ticker`)
      .pipe(pluck('ticker'));
  }
}
