package com.questk2.SupportTickets.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * @apiNote Ticket status entity class
 * 
 * */
@Entity
@Table
public class TicketStatus {
    @Id
    private Integer id;

    @Column(nullable = false)
    private String description;
    
    

	/**
	 * @param id
	 * @param description
	 * constructor with fields
	 */
	public TicketStatus(Integer id, String description) {
		super();
		this.id = id;
		this.description = description;
	}
	

	/**
	 * empty constructor
	 */
	public TicketStatus() {
	
	}

    /**
     * Getters and setters for ticket Status class
     * */
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
    
    
}