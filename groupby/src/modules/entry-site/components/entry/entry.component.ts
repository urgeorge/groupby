import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';

import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../../auth/services";
import {TokenStorageService} from "../../../auth/services/token-storage.service";

const container = document.getElementById('container');

@Component({
    selector: 'entry',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './entry.component.html',
    styleUrls: ['entry.component.css'],
})
export class EntryComponent implements OnInit {

  formLogin: any = {
    username: null,
    password: null
  };

    faUsername = faUser;
    faPassword = faLock;
    faMail = faEnvelope;
    faCalendar = faCalendarAlt;
    faGender = faVenusMars;

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {

    }
    ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      }
    }

    goLeft(){
      let container = document.getElementById('container');
        container?.classList.add("right-panel-active");
    }
    goRight(){
      let container = document.getElementById('container');
        container?.classList.remove("right-panel-active");
    }

  onSubmit(): void {
    const { username, password } = this.formLogin;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
