package com.questk2.SupportTickets.controllers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.questk2.SupportTickets.entity.Ticket;
import com.questk2.SupportTickets.repository.TicketRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
/**
 * @apiNote class of controllers for ticket entity
 * */
@RestController
@RequestMapping("/tickets")
@Tag(name = "Ticket Controller", description = "APIs for managing tickets, priorities, and statuses.")
public class TicketContoller {
	@Autowired 
	private TicketRepository ticketRepository;
    
	/**
	 * @apiNote method to add new ticket
	 * @return adds new ticket to the ticket table
	 * */
	@Operation(summary = "adds ticket", description = "adds ticket to table.")
	@ApiResponse(responseCode = "200", description = "Priorities retrieved successfully")
	@ApiResponse(responseCode = "500", description = "Internal server error")
	@PostMapping("/addTicket")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addTicket(@RequestBody Ticket ticket) {
		ticketRepository.save(ticket);
	}
	
	 
	 /**
	  * @apiNote method to fetch all tickets
	  * @return all tickets in table
	  * 
	  **/
	@Operation(summary = "Retrieve all tickets", description = "Fetches all ticket records from the database.")
    @ApiResponse(responseCode = "200", description = "Tickets retrieved successfully")
    @ApiResponse(responseCode = "500", description = "Internal server error")
	@GetMapping("/getAllTickets")
	public List<Ticket> getAllTickets() {
		  return ticketRepository.findAll(); 
	}
    
	/**
	 * @apiNote method to get tickets based by id
	 * @return returns tickets based on id
	 * */
	@Operation(summary = "Retrieve all tickets by id", description = "Fetches all ticket records from the database based on id.")
    @ApiResponse(responseCode = "200", description = "Tickets retrieved successfully")
    @ApiResponse(responseCode = "500", description = "Internal server error")
	@GetMapping("/getById/{id}")
	public List<Ticket> getTicketsById(@PathVariable Long id){
		List<Ticket> tickets = new ArrayList<>();
		 
	    tickets.addAll(ticketRepository.findByCreatedById(id));
	    
	   
	    tickets.addAll(ticketRepository.findByAssignedToId(id));

	    return tickets;
	}
	/**
	 * @apiNote method to update the existing ticket
	 * @return updates the ticket data into existing ticket
	 * */
	@Operation(summary = "Updates tickets", description = "updates records from table and updates it .")
    @ApiResponse(responseCode = "200", description = "Tickets retrieved successfully")
    @ApiResponse(responseCode = "500", description = "Internal server error")
	@PutMapping("/update/{id}")
	public Ticket updateTicket(@PathVariable Long id,@RequestBody Ticket updatedTicket) {
		return ticketRepository.findById(id).map(ticket -> {
			ticket.setAssignedTo(updatedTicket.getAssignedTo());
			ticket.setCreatedBy(updatedTicket.getCreatedBy());
			ticket.setCreatedDate(updatedTicket.getCreatedDate());
			ticket.setDeleted(updatedTicket.isDeleted());
			ticket.setDeleteDate(updatedTicket.getDeleteDate());
			ticket.setModifiedDate(updatedTicket.getModifiedDate());
			ticket.setPriority(updatedTicket.getPriority());
			ticket.setStatus(updatedTicket.getStatus());
			ticket.setTicketComment(updatedTicket.getTicketComment());
			ticket.setTitle(updatedTicket.getTitle());
			System.out.println("Updated ticket: " + ticket);
			return ticketRepository.save(ticket);
			
		}).orElseThrow(()->new RuntimeException("User not found : "+ id));
	}
	
	/**
	 * @apiNote method to delete the existing ticket
	 * @return deletes the existing ticket from database
	 * */
	@Operation(summary = "deletes tickets based on id", description = "deletes  ticket records from the database by id.")
    @ApiResponse(responseCode = "200", description = "Tickets retrieved successfully")
    @ApiResponse(responseCode = "500", description = "Internal server error")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> removeTicket(@PathVariable Long id) {
	   
	    Ticket ticket = ticketRepository.findById(id).orElseThrow(() -> new RuntimeException("Ticket not found: " + id));
	    System.out.println("Before soft delete: " + ticket);
	    ticket.setDeleted(true);
	    
	    
	    ticket.setDeleteDate(LocalDateTime.now());
	    
	    
	    ticketRepository.save(ticket);

	    System.out.println("After soft delete: " + ticket);
	    return ResponseEntity.noContent().build();
}
	
	/**
	 * @apiNote method to retrieve deleted tickets 
	 * @return deleted tickets
	 * */
	@Operation(summary = " get deleted  tickets", description = "gets tickets deleted by persons")
    @ApiResponse(responseCode = "200", description = "Tickets retrieved successfully")
    @ApiResponse(responseCode = "500", description = "Internal server error")
	@GetMapping("/deleted")
    public ResponseEntity<List<Ticket>> getDeletedTickets() {
        List<Ticket> deletedTickets = ticketRepository.findByIsDeletedTrue();
        
        if (deletedTickets.isEmpty()) {
            return ResponseEntity.noContent().build(); 
        }
        
        return ResponseEntity.ok(deletedTickets); 
    }
}
