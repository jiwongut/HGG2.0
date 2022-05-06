## 네이밍 컨밴션

1. 컴포넌트이름은 전체이름의 첫 문자를 포함한 각 단어의 문자를 대문자로 작성하는 파스칼 케이스(Pascal case) 규칙을 적용하여 작성한다.
  - ex) Navigation, Header, goodsCard

2. jsx문법으로 코드를 작성할 때 className은 BEM을 준수하여 작성한다.
  - ex) navbar__logo, navbar__icon-review

3. 컴포넌트를 제외한 파일명은 카멜케이스(Camel Case)로 작성한다.
  - ex) goodsCards.css, faqIcon.svg


# 깃 커밋 타입
add: 코드나 테스트, 예제, 문서 등의 추가 생성이 있을 때
modify: 코드를 약간 변경할 때
fix: 버그 해결
refector: 코드 리펙토링
style: formatting, 세미콜론 누락하여 추가할 때, 코드 변경이 없을 때
test: 테스트코드 추가 혹은 리팩토링 테스트 코드 추가
chore: 패키지 매니저 구성, 빌드 작업 업데이트 / 코드 변경은 없음