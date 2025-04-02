package com.questk2.SupportTickets.entity;

import java.util.List;

/**
 * @apiNote DTO class for using User and User role
 * 
 * */
public class UserRoleRequest {
	private String userName;
	private String password;
	private String name;
	private String email;
	private Double phoneNumber;
	private String department;
	private String role;
	private List<Role> roles; 
	private Long id;

	/**
	 * Getters and setters for the User role request class
	 * */
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Double getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Double phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	 public List<Role> getRoles() {
	     return roles;
	}

	public void setRoles(List<Role> roles) {
	     this.roles = roles;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	 public static class Role {
	        private Long id;  // Role ID
	        private String role;
	        
			public Long getId() {
				return id;
			}
			public void setId(Long id) {
				this.id = id;
			}
			public String getRole() {
				return role;
			}
			public void setRole(String role) {
				this.role = role;
			}
	        
	        
	        
	 }
	
}