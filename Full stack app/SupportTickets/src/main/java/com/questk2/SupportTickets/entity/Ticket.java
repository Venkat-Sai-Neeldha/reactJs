package com.questk2.SupportTickets.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
/**
 * @author Venkt sai
 * @apiNote Ticket entity class for operations
 * */
@Entity

public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "title")
	private String title;

	@ManyToOne
	@JoinColumn(name = "priority_id")
	private TicketPriority priority;

	@ManyToOne
	@JoinColumn(name = "status_id")
	private TicketStatus status;

	@ManyToOne
	 
	@JoinColumn(name = "created_by_id")
	private User createdBy;

	private LocalDateTime createdDate;

	private LocalDateTime modifiedDate;

	@ManyToOne
	 
	@JoinColumn(name = "assigned_to")
	private User assignedTo;

	@Column(name = "ticket_comment")

	private String ticketComment;

	private boolean isDeleted;

	private LocalDateTime deleteDate;
    
	/**
	 * @param id
	 * @param title
	 * @param priority
	 * @param status
	 * @param createdBy
	 * @param createdDate
	 * @param modifiedDate
	 * @param assignedTo
	 * @param ticketComment
	 * @param isDeleted
	 * @param deleteDate
	 */
	public Ticket(Long id, String title, TicketPriority priority, TicketStatus status, User createdBy,
			LocalDateTime createdDate, LocalDateTime modifiedDate, User assignedTo, String ticketComment,
			boolean isDeleted, LocalDateTime deleteDate) {
		super();
		this.id = id;
		this.title = title;
		this.priority = priority;
		this.status = status;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
		this.modifiedDate = modifiedDate;
		this.assignedTo = assignedTo;
		this.ticketComment = ticketComment;
		this.isDeleted = isDeleted;
		this.deleteDate = deleteDate;
	}
	/**
	 * Empty constructor
	 */
	public Ticket() {
	
	}
	/**
	 * getters and setter for ticket class
	 * */
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	public TicketPriority getPriority() {
		return priority;
	}
	
	public void setPriority(TicketPriority priority) {
		this.priority = priority;
	}

	public TicketStatus getStatus() {
		return status;
	}

	public void setStatus(TicketStatus status) {
		this.status = status;
	}

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(LocalDateTime modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public User getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(User assignedTo) {
		this.assignedTo = assignedTo;
	}

	public String getTicketComment() {
		return ticketComment;
	}

	public void setTicketComment(String ticketComment) {
		this.ticketComment = ticketComment;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public LocalDateTime getDeleteDate() {
		return deleteDate;
	}
	
	public void setDeleteDate(LocalDateTime deleteDate) {
		this.deleteDate = deleteDate;
	}
}
