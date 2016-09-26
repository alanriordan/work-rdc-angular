import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector : 'inspection-staus',
    templateUrl:'app/common/progress.component.html'
})
export class ProgressComponent implements OnInit{

    @Input()
    numOfSmr:number;

    @Input()
    completedSmr:number;

    smrTotal:number;

    percentageComplete:number;

    ngOnInit():void{
        this.smrTotal = this.numOfSmr;
        this.percentageComplete = Math.floor(this.completedSmr/this.smrTotal * 100);
    }

    isInpsectionComplete():boolean{
        return (this.percentageComplete >= 100);
    }

    getStatusText():string{
        var text = `Percentage Complete ${this.percentageComplete}%`
        if (this.isInpsectionComplete()){
            text = "Complete";
        }
        return text;
    }
}