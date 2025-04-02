package com.questk2.SupportTickets.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * @apiNote ticket priority entity class 
 * 
 * */
@Entity
@Table
public class TicketPriority {
    @Id
    private Integer id;

    @Column(nullable = false)
    private String description;

	public TicketPriority(Integer id, String description) {
		this.id = id;
		this.description = description;
	}
	

	/**
	 * @apiNote empty constructor
	 */
	public TicketPriority() {
	
	}
    /**
     * @apiNote getters and setters for ticket priority class
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
