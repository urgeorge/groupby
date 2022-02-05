import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services";
import {Group} from "../../models";

@Component({
  selector: 'app-find-new-group',
  templateUrl: './find-new-group.component.html',
  styleUrls: ['./find-new-group.component.css']
})
export class FindNewGroupComponent implements OnInit {

  groupService: GroupService;
  group: Group | undefined;

  constructor(groupService: GroupService) {
    this.groupService= groupService;
  }

  ngOnInit(): void {
    let groups = this.groupService.getAllGroups().subscribe(groups => this.group = groups[0]);


  }

}
