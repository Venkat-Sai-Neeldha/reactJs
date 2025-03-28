package com.questk2.SupportTickets;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
/**
 * @author venkat sai
 * @apiNote CORS configuration class
 * 
 * */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
   
        registry.addMapping("/**")  // Apply to all endpoints
                .allowedOrigins("http://localhost:5173")  // Allow the origin of your frontend app
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow certain HTTP methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);  // Allow credentials such as cookies or authentication headers
    }
}