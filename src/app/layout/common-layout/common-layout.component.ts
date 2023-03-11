import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {
  
  isCollapsed = false;
  userInfo: any;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    const userInfoString = this.storage.get('userInfo');
    if (userInfoString != null) {
      this.userInfo = JSON.parse(userInfoString);
    }
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
