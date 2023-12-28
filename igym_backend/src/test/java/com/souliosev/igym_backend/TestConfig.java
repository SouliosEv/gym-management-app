package com.souliosev.igym_backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@Configuration
public class TestConfig {

    @Bean
    public MockMvc mockMvc() {
        return MockMvcBuilders.standaloneSetup().build();
    }
}