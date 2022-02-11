import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services";
import {Group} from "../../models";

@Component({
  selector: 'app-find-new-group',
  templateUrl: './find-new-group.component.html',
  styleUrls: ['./find-new-group.component.css']
})
export class FindNewGroupComponent implements OnInit {

  /*to delete when functionality of checking if user joined to group works*/
  clicked = false;

  groupService: GroupService;

  groups: Group[] = [];

  constructor(groupService: GroupService) {
    this.groupService= groupService;
  }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(groups => this.groups = groups);

  }

  JoinGroup(group: Group) {
    var element = <HTMLInputElement> document.getElementById(group.name);
    element.disabled = true;
    element.textContent = "Succesfully joined";
    element.style.color = "#000";
    element.style.backgroundColor = "#c4c4c4";

  }
}
