package com.groupby.groupbybackend.repository;

import java.util.Optional;

import com.groupby.groupbybackend.models.role.ERole;
import com.groupby.groupbybackend.models.role.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}