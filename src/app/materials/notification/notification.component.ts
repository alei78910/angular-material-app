import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  title: string = '测试标题';
  message: string = '测试消息';
  duration: number = 3000;
  position: any;
  type: string;
  horizontalPosition: any = "right";
  verticalPosition: any = "top";

  constructor(private _notification: NotificationService) {
  }

  ngOnInit() {
  }


  show() {
    console.log(this.position);
    switch(parseInt(this.position)){
      case 2:
      this.horizontalPosition = 'start';
      this.verticalPosition = 'top';
      break;
      case 3:
      this.horizontalPosition = 'center';
      this.verticalPosition = 'top';
      break;
      case 4:
      this.horizontalPosition = 'end';
      this.verticalPosition = 'top';
      break;
      case 5:
      this.horizontalPosition = 'left';
      this.verticalPosition = 'top';
      break;
      case 1:
      this.horizontalPosition = 'right';
      this.verticalPosition = 'top';
      break;
      case 6:
      this.horizontalPosition = 'start';
      this.verticalPosition = 'bottom';
      break;
      case 7:
      this.horizontalPosition = 'center';
      this.verticalPosition = 'bottom';
      break;
      case 8:
      this.horizontalPosition = 'end';
      this.verticalPosition = 'bottom';
      break;
      case 9:
      this.horizontalPosition = 'left';
      this.verticalPosition = 'bottom';
      break;
      case 10:
      this.horizontalPosition = 'right';
      this.verticalPosition = 'bottom';
      break;
    }

    this._notification.open(this.message, this.title, {
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    }, this.type);
  }

  success() {
    this._notification.success('测试消息', '测试标题');
  }

  warn() {
    this._notification.warn('测试消息', '测试标题');
  }

  clear() {
    this._notification.dismiss();
  }

}
