## mongoDB

### 1. mongoDB란

비관계형 데이터베이스
sql언어를 사용하지 않고 복잡한 데이터 유형을 효율적으로 저장할 수 있다.

## 순서

1. 프로젝트 생성
2. 클러스터 생성

   - 클러스터 : mongoDB 데이터 저장소

3. 유저 생성 (시큐리티탭에서 확인가능)
4. 데이터베이스 연결

### Database

1. 컬렉션의 집합(모음)

### Collection

1. 문서(doucment)의 집합
2. RDB에서 table에 해당
3. 스키마를 강제하지 않기때문에 유연하게 데이터 저장가능

### document

1. 키-벨류 의 집합
2. RDB에서 Row에 해당
3. JSON과 유사한 BJSON형태로 저장
4. 모든 문서에는 고유값인 \_id가 자동생성
