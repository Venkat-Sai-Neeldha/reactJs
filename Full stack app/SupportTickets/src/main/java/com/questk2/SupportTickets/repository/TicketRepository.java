package com.questk2.SupportTickets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.questk2.SupportTickets.entity.Ticket;
//@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long> {

}
