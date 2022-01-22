import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { NotificationService } from "@progress/kendo-angular-notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentDocument = this.socket.fromEvent<Document>('document');
  message: any;
  private hideAfter = 3000;

  constructor(private socket: Socket, private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.socket.emit('getDoc');
    this.socket.on('document', (message: any) => {
      this.message = message;
      if (this.message !== null) {
        this.notificationService.show({
          content: this.message,
          cssClass: "button-notification",
          animation: { type: "slide", duration: 400 },
          position: { horizontal: "right", vertical: "top" },
          type: { style: "success", icon: true },
          hideAfter: this.hideAfter,
        });
      }
    });
  }


}