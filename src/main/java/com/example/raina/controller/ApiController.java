package com.example.raina.controller;

import com.example.raina.dto.UserDTO;
import com.example.raina.entity.Users;
import com.example.raina.service.ApiService;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController // Restful 방식의 컨트롤러 Bean
@Log4j2
@RequestMapping("react")
@RequiredArgsConstructor // 자동 주입 어노테이션
public class ApiController {

    private final ApiService service;

    @PostMapping("insert.do")
    public void response(@RequestBody UserDTO userDTO){ // @RequestBody : 받은 인자를 뒤에 선언하는 클래스에 맞춰 받을 것.
        log.info("react to spring...");
        System.out.println(userDTO.toString());
        service.insert(userDTO);
    }

    @GetMapping("getList.do")
    public HashMap getUserList(Gson gson){ // 인자로 받는 것이 없는데도 매개변수 선언 => 그냥 선언임
        log.info("getUserList to react");
        List<UserDTO> dtoList = service.getList();
        HashMap map = new HashMap();
        map.put("users",dtoList); // react 에서도 잘 받을 수 있게
        System.out.println(map.toString());
        return map;
    }
}
