package com.example.raina.entity;

import lombok.*;

import javax.persistence.*;

@Entity // 엔티티를 위한 클래스(클래스 내 인스턴스를 JPA로 관리)
@Table(name = "users") // name으로 지정한 이름으로 테이블 생성
@ToString
@Getter
@Builder // 객체 생성
@AllArgsConstructor
@NoArgsConstructor
public class Users{

    @Id // PK 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성번호, 시퀀스
    private Long uId;

    private String name;

    private String gender;

    private String part;

}
