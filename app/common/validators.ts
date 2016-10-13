import {FormControl} from '@angular/forms';
export class RdcValidators{
    static isCorrectLpisNum(control:FormControl): { [s: string]: boolean }{
        let match = 
        control.value.match(/^[a-zA-Z][0-9][0-9][0-9][0-9a-zA-Z][0-9][0-9a-zA-Z][0-9][0-9]/)||
        control.value.match(/^[a-zA-Z][0-9][0-9][0-9][0-9a-zA-Z][0-9][0-9a-zA-Z][0-9][0-9][,][a-zA-Z][0-9][0-9][0-9][0-9a-zA-Z][0-9][0-9a-zA-Z][0-9][0-9]/)||
        control.value.match(/^[a-zA-Z][0-9][0-9][0-9][0-9a-zA-Z][0-9][0-9a-zA-Z][0-9][0-9][,][a-zA-Z][0-9][0-9][0-9][0-9a-zA-Z][0-9][0-9a-zA-Z][0-9][0-9][,][a-zA-Z][0-9][0-9][0-9][0-9a-zA-Z][0-9][0-9a-zA-Z][0-9][0-9]/)
        if (!match){
             return {invalidLpis: true}
        }       
    }  
}