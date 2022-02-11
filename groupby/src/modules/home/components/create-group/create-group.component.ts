import { Component, OnInit } from '@angular/core';

import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  faUsername = faUser;
  faPassword = faLock;
  faMail = faEnvelope;
  faCalendar = faCalendarAlt;
  faGender = faVenusMars;

  constructor() { }

  ngOnInit(): void {
  }

}
