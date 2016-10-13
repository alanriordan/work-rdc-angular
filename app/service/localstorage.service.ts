import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService{

    saveObjectData(key:string, data:any){
       localStorage.setItem(key, JSON.stringify(data));
    }


    getObjectData(key:string):any{
       return JSON.parse(localStorage.getItem(key));
    }

    saveStringData(key:string, data:string){
       localStorage.setItem(key, data);
    }

    getStringData(key:string):string{       
        return localStorage.getItem(key);
    }


    getUser():string{
        return localStorage.getItem("user");
    }

}