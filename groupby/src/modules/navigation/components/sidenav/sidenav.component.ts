import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
