package com.ecommerce.project.config;

<<<<<<< HEAD
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images/**").addResourceLocations("file:images/");
    }
=======
public class WebMvcConfig {
>>>>>>> 9924d3a70839117855ca8ecf295f62d5c92a9b4c
}
