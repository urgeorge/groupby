package com.groupby.groupbybackend.repository;

import com.groupby.groupbybackend.models.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GroupRepository extends JpaRepository<Group,Long> {
}
