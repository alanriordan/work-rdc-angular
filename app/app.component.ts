import { Component, OnInit, OnDestroy } from '@angular/core';
import {OnlineService} from './common/online-check.service';
import {Observable, Subscriber} from 'rxjs/Rx';
import {Response} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    offline: boolean;
    sub: Subscriber<boolean>;
    constructor(private onlineService: OnlineService) {

    }

    onlineSubscriber() {
        return Observable
            .interval(5000).timeInterval()
            .map(() => {
                return this.onlineService.checkIfOnline();
            });
    }

    ngOnInit(): void {
        this.onlineSubscriber().subscribe((status) => {
            status.then((value) => { this.offline = value;});

        });
    }

}
