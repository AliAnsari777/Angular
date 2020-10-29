import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        h1{
            color: green;
        }
    `]
})
export class serverComponent {
    userName: String;
    isEmpty: boolean = true;

    onClean() {
        this.userName = "";
        this.isEmpty = true;
    }

    check(event: Event) {
        if ((<HTMLInputElement>event.target).value != "") {
            this.isEmpty = false;
        }
    }
}