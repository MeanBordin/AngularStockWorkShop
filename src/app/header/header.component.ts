import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input("media_query") mobileQueryMax!: boolean
  @Output("toggle") navToggle = new EventEmitter()
  // @Output() sayHi = new EventEmitter<string>()
  
  demoMailNoti = 10
  demoNoti = 30

  onClickNavToggle() {
    this.navToggle.emit() // ส่งแบบ void ไม่มีการ return ค่ากลับ
    // this.sayHi.emit("MeanBordin")
  }
  
}
