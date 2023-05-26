import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  mobileQueryMax!: MediaQueryList;
  private _mobileQueryListener!: () => void // ตัวแปรแบบฟังชั่น void

  // CDK การดักขนาดหน้าจอเพื่อทำ Responsive
  // การทำ DI ทำให้เราไม่ต้องใช้ keyWord new ทำให้ไม่เกิดการผูกมัด
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQueryMax = media.matchMedia('(max-width: 850px)')
    this.mobileQueryMax.addListener(this._mobileQueryListener)
  }

  // OnDestroy จะทำการเคลียรค่าที่เราไม่ได้ใช้ออก
  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this._mobileQueryListener)
  }
}
