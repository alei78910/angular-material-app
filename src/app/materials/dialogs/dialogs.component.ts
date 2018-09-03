import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../component/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
  constructor(private dialog: DialogService) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogsComponent, {
      // width: '100px',
      // height: '100px'
      width: '80%',
      height: '80%'
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(`confirm:${result}`);
      if(result){

      }
    });
  }

  openAlert() {
    const dialogRef = this.dialog.alert({
      title: 'title',
      message: 'message',
      closeButton: '确定'
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(`confirm:${result}`);
      if(result){

      }
    });
  }

  openConfirm() {
    const dialogRef = this.dialog.confirm({
      title: 'title',
      message: 'message',
      cancelButton: '取消',
      acceptButton: '确定'
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(`confirm:${result}`);
      if(result){

      }
    });
  }
}
