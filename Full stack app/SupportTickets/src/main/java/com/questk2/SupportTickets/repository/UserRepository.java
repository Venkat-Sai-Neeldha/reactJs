package com.questk2.SupportTickets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.questk2.SupportTickets.entity.User;
//@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	User findByEmail(String email); 
}
