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
    serverID: number = 7;
    serverStatus: String = "Online";

    getServerStatus() {
        return this.serverStatus;
    }
}