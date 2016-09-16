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
        var online = true;       
       return Promise.resolve(online);
        //return online;
    }

}