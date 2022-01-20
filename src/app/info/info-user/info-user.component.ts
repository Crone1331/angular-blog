import { Component, OnInit } from '@angular/core';
import { InfoUserService } from 'src/app/services/info-user.service';
import { IDeviceInfo, IUserInfo } from 'src/app/interfaces/user.interface';
import { DeviceDetectorService } from 'ngx-device-detector';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  responseArr!: IUserInfo;
  infoDevice!: IDeviceInfo;
  resp: any;
  pageReady: boolean = true;

  constructor(
    private infoUser: InfoUserService,
    private deviceService: DeviceDetectorService
  ) {

  }

  ngOnInit(): void {
    this.pageReady = true;
    this.infoFromUser();
    this.epicFunction();
  }

  private infoFromUser(): void {
    this.infoUser.getResponseUser()
    .subscribe((response) => {
      this.pageReady = false;
      this.resp = response;
      this.responseArr = this.resp;

    })

  }

  private epicFunction(): void {
    const deviceInfo = this.deviceService.getDeviceInfo();
    this.infoDevice = {
      device: deviceInfo.browser.toUpperCase(),
      browser: deviceInfo.deviceType.toUpperCase()
    }
  }
}
