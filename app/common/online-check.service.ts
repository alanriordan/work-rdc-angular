import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import {Headers} from '@angular/http';

@Injectable()
export class OnlineService{

   
    constructor(private http:Http){};

    checkIfOnline():Promise<boolean>{
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
       // return this.http.get("http://localhost:3000/dashboard")
       // .toPromise().then((r:Response) => r.ok);
        
        return Promise.resolve(true);
    }

}