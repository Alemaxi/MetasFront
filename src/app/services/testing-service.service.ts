import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs'
import { environment } from 'src/environments/environment';

import { Testing } from '../../Entities/Testing.interface'

@Injectable({
  providedIn: 'root'
})
export class TestingServiceService {

  endpoint: string = "Testing"

  constructor(protected http: HttpClient) { }

  GetValues(): Subject<string[]> | undefined {

    var item = this.http.get<Testing>(environment.url + this.endpoint + '/1');

    var returner: Subject<string[]> = new Subject<string[]>;

    this.http.get<Testing>(environment.url + this.endpoint + '/1').subscribe(
      x => item.subscribe(y => {
        returner.next([x.texto, y.texto]);
      }));



    return returner;
  }
}
