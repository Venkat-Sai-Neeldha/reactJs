package com.questk2.SupportTickets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.questk2.SupportTickets.entity.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole,Long> {
	List<UserRole> findByUserId(Long userId);
}
