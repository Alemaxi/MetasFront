import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

import { Testing } from '../../Entities/Testing.interface'

@Injectable({
  providedIn: 'root'
})
export class TestingServiceService {

  endpoint: string = "Testing"

  constructor(protected http: HttpClient) { }

  GetValues(): Observable<Testing> {
    return this.http.get<Testing>(environment.url + this.endpoint + '/1');
  }
}
