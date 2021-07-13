package com.example.raina.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    //DispatcherServlet 생성할 때
    //생성자 인자로 WebApplicationContext 전달할 주소 매핑
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 허용 경로 지정
        registry.addMapping("/react/**") // Controller 매핑
                .allowedOrigins("http://localhost:3000") // 허용할 주소
        ;
    }
}
