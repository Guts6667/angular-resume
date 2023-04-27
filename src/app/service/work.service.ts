import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Work } from '../interface/work';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor(private httpClient: HttpClient) {}

  public getWorks(): Observable<Work[]> {
    return this.httpClient.get<Work[]>('/assets/data/work.json').pipe(
      map((works: Work[]) => {
        return works;
      })
    );
  }
}
