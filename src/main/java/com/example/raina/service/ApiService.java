package com.example.raina.service;

import com.example.raina.dto.UserDTO;
import com.example.raina.entity.Users;
import org.apache.catalina.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public interface ApiService { // Service 는 연관되는 동작을 쉽게 관리하기 위해 인터페이스로 선언 후 상속시킴

    void insert(UserDTO userDTO);

    // dto 를 entity 로 변환
    default Users dtoToEntity(UserDTO dto) {
        return Users.builder()
                .uId(dto.getUId())
                .name(dto.getName())
                .gender(dto.getGender())
                .part(dto.getPart())
                .build();
    }

    // entity 를 dto 로 변환
    default UserDTO entityToDto(Users entity) {
        return UserDTO.builder()
                .uId(entity.getUId())
                .name(entity.getName())
                .gender(entity.getGender())
                .part(entity.getPart())
                .build();
    }

    List<UserDTO> getList();
}
