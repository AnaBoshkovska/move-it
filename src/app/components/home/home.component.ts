import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent{
    public message: string;

    constructor() {
        this.message = "Welcome to Move It";
     }
}
