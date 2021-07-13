package com.example.raina.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // 게터 세터 투스티링 이퀄 해시코드 자동생성
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class UserDTO {

    private Long uId;
    private String name;
    private String gender;
    private String part;
}
