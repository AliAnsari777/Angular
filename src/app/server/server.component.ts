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
}