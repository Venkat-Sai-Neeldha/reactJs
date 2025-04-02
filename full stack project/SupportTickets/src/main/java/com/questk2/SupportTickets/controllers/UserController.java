package com.questk2.SupportTickets.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import com.questk2.SupportTickets.entity.LoginResponse;
import com.questk2.SupportTickets.entity.User;
import com.questk2.SupportTickets.entity.UserRole;
import com.questk2.SupportTickets.entity.UserRoleRequest;
import com.questk2.SupportTickets.repository.UserRepository;
import com.questk2.SupportTickets.repository.UserRoleRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.questk2.SupportTickets.entity.User;
/**
 * @author venkatsai
 * @apiNote controller class for user entity operations
 * */
@RestController
@RequestMapping("/users")
@Tag(name = "User Controller", description = "APIs for managing users, including retrieval, creation, and updates.")
public class UserController {
 
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;
 
    /**
     * Retrieves all users.
     * @apiNote method to fetch all users
     * @return List of all users.
     */
    @Operation(summary = "Retrieve all users", description = "Fetches all user details from the database.")
    @ApiResponse(responseCode = "200", description = "Users retrieved successfully.")
    @ApiResponse(responseCode = "404", description = "No users found.")
    @ApiResponse(responseCode = "500", description = "Internal server error.")
    @GetMapping
    @CrossOrigin(origins = "http://localhost:5173/")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
 
    /**
     * Creates a new user along with their role.
     * @param userRoleRequest Object containing user details and role information.
     * @return The created User entity.
     */
    @Operation(summary = "Retrieve all users", description = "Fetches all user details from the database.")
    @ApiResponse(responseCode = "200", description = "Users retrieved successfully.")
    @ApiResponse(responseCode = "404", description = "No users found.")
    @ApiResponse(responseCode = "500", description = "Internal server error.")
    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:5173")
    @ResponseStatus(code = HttpStatus.CREATED)
    public User createUserWithRole(@RequestBody UserRoleRequest userRoleRequest) {
    	  User user = new User();
    	    user.setUserName(userRoleRequest.getUserName());
    	    user.setPassword(userRoleRequest.getPassword()); 
    	    user.setName(userRoleRequest.getName());
    	    user.setEmail(userRoleRequest.getEmail());
    	    user.setPhoneNumber(userRoleRequest.getPhoneNumber());
    	    user.setDepartment(userRoleRequest.getDepartment());

    	   
    	    user = userRepository.save(user);

    	    if (userRoleRequest.getRoles() != null && !userRoleRequest.getRoles().isEmpty()) {
    	        for (UserRoleRequest.Role roleRequest : userRoleRequest.getRoles()) {
    	            UserRole userRole = new UserRole(user, roleRequest.getRole());
    	            userRoleRepository.save(userRole);
    	        }
    	    }

    	    return user;
    }
    
    /**
     * login for user and admin
     * @param userRoleRequest Object containing user details and role information
     * @return dashboard page after successful login
     * 
     * */
    @Operation(summary = "login for user", description = "login user if user is found.")
    @ApiResponse(responseCode = "200", description = "login successful.")
    @ApiResponse(responseCode = "404", description = "login failed.")
@PostMapping("/login")
public ResponseEntity<Object> login(@RequestBody UserRoleRequest loginRequest) {

    	 Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());

    	    if (optionalUser.isPresent()) {
    	        User user = optionalUser.get();

    	        if (user.getPassword().equals(loginRequest.getPassword())) {
    	            List<UserRole> userRoles = userRoleRepository.findByUserId(user.getId());

    	            List<UserRoleRequest.Role> roles = new ArrayList<>();
    	            for (UserRole userRole : userRoles) {
    	                UserRoleRequest.Role role = new UserRoleRequest.Role();
    	                role.setRole(userRole.getRole());
    	                roles.add(role);
    	            }

    	            loginRequest.setRoles(roles); 
    	            loginRequest.setEmail(user.getEmail());
    	            loginRequest.setUserName(user.getUserName());
    	            loginRequest.setName(user.getName());
    	            loginRequest.setPhoneNumber(user.getPhoneNumber());
    	            loginRequest.setDepartment(user.getDepartment());
    	            loginRequest.setId(user.getId());

    	            if (roles.stream().anyMatch(role -> role.getRole().equals("ADMIN"))) {
    	                return ResponseEntity.ok(new LoginResponse("Admin", loginRequest, user.getId()));
    	            } else {
    	                return ResponseEntity.ok(new LoginResponse("User", loginRequest, user.getId()));
    	            }
    	        } else {
    	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    	        }
    	    } else {
    	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    	    }

}
}



