package com.questk2.SupportTickets.entity;
/**
 * @apiNote  DTO class for user login
 * @return login response object for verification
 * */
public class LoginResponse {
    private String userType; 
    private UserRoleRequest userDetails;
    private Long userId;
/**
 * constructor for login response
 * */
    public LoginResponse(String userType, UserRoleRequest userDetails,Long userId) {
        this.userType = userType;
        this.userDetails = userDetails;
        this.userId = userId;
    }

   /**
    * getters and setters for login response class
    * */
    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public UserRoleRequest getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserRoleRequest userDetails) {
        this.userDetails = userDetails;
    }
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
