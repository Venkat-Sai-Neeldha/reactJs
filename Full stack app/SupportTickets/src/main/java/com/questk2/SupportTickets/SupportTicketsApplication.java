package com.questk2.SupportTickets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
/**
 * @author venkat sai
 * @apiNote main class of spring boot appllication
 * */
@OpenAPIDefinition(info = @Info(title = "Support Ticket Management System", version = "1.0", description = "This API manages the tickets from users and admin."))
@SpringBootApplication(scanBasePackages = "com.questk2.SupportTickets")
@EnableJpaRepositories(basePackages = "com.questk2.SupportTickets.repository")
@EntityScan(basePackages = "com.questk2.SupportTickets.entity")
public class SupportTicketsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SupportTicketsApplication.class, args);
	}

}
