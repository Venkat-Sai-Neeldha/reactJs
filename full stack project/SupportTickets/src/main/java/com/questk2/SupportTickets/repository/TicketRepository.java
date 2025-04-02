package com.questk2.SupportTickets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.questk2.SupportTickets.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket,Long> {
    List<Ticket> findByCreatedById(Long userId);
    List<Ticket> findByAssignedToId(Long userId);
    List<Ticket> findByIsDeletedTrue();
}
