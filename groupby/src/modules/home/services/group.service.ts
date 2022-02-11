import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../models";

const GROUP_API = 'http://localhost:8080/api/groups/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  constructor(private http: HttpClient) { }

  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(GROUP_API + 'all');
  }
}
