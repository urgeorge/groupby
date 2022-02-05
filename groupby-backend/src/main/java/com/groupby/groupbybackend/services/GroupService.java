package com.groupby.groupbybackend.services;

import com.groupby.groupbybackend.models.AppGroup;
import com.groupby.groupbybackend.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    private GroupRepository groupRepository;

    @Autowired
    GroupService(GroupRepository groupRepository){
        this.groupRepository = groupRepository;
    }

    public List<AppGroup> findAll() {
        return groupRepository.findAll();
    }
}