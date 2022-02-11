package com.groupby.groupbybackend.controllers;


import com.groupby.groupbybackend.models.AppGroup;
import com.groupby.groupbybackend.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
public class GroupController {

    GroupService groupService;

    @Autowired
    GroupController(GroupService groupService){
        this.groupService = groupService;
    }

    @GetMapping("/all")
    public List<AppGroup> findAllGroups() {
        return groupService.findAll();
    }
}
