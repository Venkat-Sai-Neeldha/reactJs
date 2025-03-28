package com.questk2.SupportTickets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.questk2.SupportTickets.entity.UserRole;
//@Repository
public interface UserRoleRepository extends JpaRepository<UserRole,Long> {

}
