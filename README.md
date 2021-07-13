## REACT 청약 템플릿

> MVC 기반 Spring-boot 웹 프론트를 react 로 Refactoring 하기 위한 템플릿

### 소개

| 프로젝트명 | 청약 신청 리팩토링 템플릿 구축          |
| ---------- | --------------------------------------- |
| 개발기간   | 2021.07.12~                             |
| 인원       | 2명                                     |
| Front-End  | React, 추가바람                         |
| Back-End   | Java, Spring-Boot, MariaDB, JPA, Gradle |
| Tool       | IntelliJ, VSCode, HeidiSQL              |
| OS         | Window 10                               |

### 개발 환경

> JDK : 11
>
> Spring-Boot : 2.5.2
>
> [MariaDB : 10.6.3(x86_64)](https://mariadb.org/download/)
>
> - 환경 변수 설정 : PATH에 bin 설정
>
> - ```properties
>   # 데이터베이스 이름 "raina"
>   spring.datasource.url=jdbc:mariadb://localhost:3306/raina
>   # 계정
>   spring.datasource.username=root
>   spring.datasource.password=root
>   ```

### 서비스

> - 금융기관 별 보험상품 제공
> - 계약관계자 정보 설정
> - 계약 사항 조회
> - 합계 보험료 산정

### REACT?

> **페이스북에서 제공하는 프론트 구축 라이브러리**
>
> SPA : Single Page Application
>
> **JSX**
>
> - JavaScript eXtension : 자바스크립트 확장 버전ES6
> - JavaScript와 html을 혼용하여 작성 => Babel => ES5
> - 속성은 항상 ""
> - 태그는 항상 클로징, 모든 태그 셀프클로징 지원
> - 이어진 형제태그 X
> - render 안에 JavaScript 변수는 {}
>
> **렌더링**
>
> - 어느 컴포넌트 안에서 변경이 있을 때, 전/후의 엘리먼트 비교 => 실제 DOM 업데이트
> - 하지만 모든 변화에 직접 호출하지 않음 => setState() 수행 => 해당 컴포넌트를 변경 대상(Dirty Component)로 등록 => 다음 이벤트 루프에서 배치 작업으로 렌더링
>
> **DOM**
>
> - JavaScript Node 개체의 계층화된 트리로, HTML, XML 문서의 프로그래밍 API
> - 문서의 구조화된 표현을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공

### 하는 이유

> 1. Component로 UI의 개별적인 View 구성
>    - 하나의 Component를 여러 곳에서 사용하여 생산성/재사용성/유지보수 추구
> 2. JavaScript 형태의 Virtual DOM을 사용하여 어플리케이션 성능 향상
>    - 실제 DOM 보다 빠른 가상 DOM
> 3. Rest API를 이용하는 라이브러리
>    - 다른 프레임워크와 연동 가능
> 4. 동적인 동작에 이점이 많다
>    - 상호작용 UI 쉽게 구현 가능
>    - 

### 단점

> 1. 프론트 기능 외에는 직접 구현해야 함
> 2. 문법이 까다로워 학습에 시간 필요