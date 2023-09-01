package com.kosalberk.todo.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {
    @Bean
    public ModelMapper modelMapperMethod(){
        return new ModelMapper();
    }

}
