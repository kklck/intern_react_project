package com.example.raina.service.impl;

import com.example.raina.dto.UserDTO;
import com.example.raina.entity.Users;
import com.example.raina.repository.UsersRepository;
import com.example.raina.service.ApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.catalina.LifecycleState;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service // Service Bean
@Log4j2
@RequiredArgsConstructor
public class ApiServiceImpl implements ApiService {

    private final UsersRepository repository;

    @Override
    public void insert(UserDTO userDTO) {
        Users users = dtoToEntity(userDTO);
        // JPA 에서 제공하는 insert/update, 매개변수는 entity
        repository.save(users);
    }

    @Override
    public List<UserDTO> getList() {

        // Hibernate 에서 제공하는 쿼리메소드, 인텔리에서는 자동완성 지원
        List<Users> result = repository.findAll();
        // List 를 entity to dto 하는 함수
        Function<Users, UserDTO> fn = (this::entityToDto);
        // dto 로 만들어 return
        return result.stream().map(fn).collect(Collectors.toList());
    }
}
