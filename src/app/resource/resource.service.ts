import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Resource} from "./resource.model";

@Injectable()
export class ResourceService {
  private url: string = 'http://34.245.166.43:3000/opportunities';

  constructor (
    private httpClient: HttpClient
  ) {}

  public getResources (): Observable<Resource[]> {
    return this.httpClient.get<Resource[]>(this.url);
  }
}
