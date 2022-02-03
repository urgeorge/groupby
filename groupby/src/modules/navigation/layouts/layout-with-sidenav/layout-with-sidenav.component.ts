import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
    selector: 'layout-with-sidenav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-with-sidenav.component.html',
    styleUrls: ['layout-with-sidenav.component.css'],
})
export class LayoutWithSidenavComponent implements OnInit {
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
  }

  toggleSideBar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("open");
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("/")
  }
}
