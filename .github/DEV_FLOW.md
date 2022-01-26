# 프로젝트 작업 흐름

이슈 할당부터 풀 리퀘스트(Pull Request)까지 전체적인 프로젝트 작업 흐름에 대해 설명합니다.

## ISSUE 선정 또는 신규 이슈의 등록

이미 등록된 이슈가 있다면 레이블을 잘 살펴보세요. 작업하고 싶은 내용이 이슈 목록에는 없지만 내가 발견한 버그, 사이트 툴링 등에 해당한다면 이슈를 새로 등록합니다. 이때 레이블을 달아두면 어떤 내용인지 목록에서 한눈에 알아볼 수 있겠죠?

이슈의 내용에는 이 이슈에 대한 간략한 설명이나 배경, 이슈 해결을 위해 참고할 만한 링크를 달아 놓으면 좋습니다.

## Issue의 할당

등록한 이슈중 내가 해결하고자 하는 이슈를 나에게 할당합니다. 이렇게 함으로써 해당 리포지토리에 어떤 작업들이 진행되고 있는지 쉽게 파악할 수 있습니다.

<img width="572" alt="스크린샷 2021-08-11 오후 10 45 52" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/issue.png">

## 코드의 작성

이제 등록한 이슈에 대한 실제 코드를 작성합니다.

보통 오픈소스 리포지토리는 자유롭게 클론할 수 있지만 브랜치에 직접 푸시할 수 있는 권한은 제한되어 있는 경우가 많습니다. 이럴 경우 어떻게 브랜치를 생성하고 푸시를 해야 할까요?

### 1. 리포지토리 포크(fork)하기

기여하고 싶은 리포지토리를 포크하여 내 깃헙 계정으로 가져올 수 있습니다.

<img width="991" alt="스크린샷 2021-08-11 오후 10 57 58" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/fork.png">

위 이미지의 우측 상단의 Fork 버튼을 누르면 `HGG`을 내 리포지토리로 복사 할 수 있습니다.

<img width="978" alt="스크린샷 2021-08-11 오후 10 59 46" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/fork2.png">

포크가 완료되면 내 계정 하위에 새로운 리포지토리가 생긴 것을 볼 수 있습니다.

<img width="437" alt="스크린샷 2021-08-11 오후 11 01 10" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/fork3.png">

이제 내 계정에 속한 리포지토리이기 때문에 자유롭게 브랜치를 생성하거나 푸시할 수 있습니다. `git clone` 명령어로 리포지토리를 로컬에 내려 받고 코드를 수정/추가 합니다.

### 2. Fork 된 후에 원본 Repository 최신화 (중요)

레포지토리 포크 이후 원본 레포지토리에 많은 변경사항이 생길텐데요, 이를 반영해주기 위해서 우선 로컬 환경에 클론한 포크 레포지토리 기준으로 원본 프로젝트의 저장소를 `upstream` 브랜치로 등록해줍니다.

<img width="481" alt="스크린샷 2021-08-11 오후 11 09 14" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/upstream.png">

`git remote -v show` 명령어를 통해 업스트림 브랜치 등록 여부를 확인합니다. (업스트림 브랜치는 원본 레포지토리 주소를 참조해야합니다.) 이후 변경사항 업데이트를 위해서는 아래 명령어를 실행해 주면 됩니다.

<img width="481" alt="스크린샷 2021-08-11 오후 11 09 14" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/fetch-upstream.png">

`git fetch upstream` 명령어를 실행하면 원본 레포지토리의 `upstream` 브랜치로부터 추가된 변경사항들을 **로컬상의 포크 레포지토리에 불러옵니다.** 불러올 때의 브랜치 명은 `upstream/main` 혹은 master브랜치를 이용하시는 분들은 `upstream/master`의 이름으로 불러옵니다.

변경사항들을 로컬 상에 반영하기 위해서는 `git merge upstream/main` 명령어를 입력하면 됩니다.

로컬 상에 원본 레포의 변경사항이 모두 반영되면 이제 **포크 레포지토리에 push하여 포크한 원격 저장소에까지 변경사항을 모두 반영해주면 됩니다.**

**Fork 레포지토리 최신화 작업은 개발 시작 전 항상 체크해주시기 바랍니다!**

## Branch 생성 및 소스 수정

자 이제 코드를 작성할 모든 준비는 끝났습니다. 커밋 타입에 맞춰 메세지를 작성합니다.

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- test: 테스트 코드, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정

커밋 메세지는 **과거형으로 작성하지 않고, 첫 글자는 대문자로 작성하며, 마침표를 붙이지 않는 것을 일반적인 컨벤션으로 사용합니다.**

추가적인 컨벤션은 정리 예정입니다. [링크](https://doublesprogramming.tistory.com/256)

하나의 커밋은 가능하면 커밋 메시지가 의미하는 하나의 내용을 담는 것이 좋습니다. [(커밋의 원자성)](https://palindrom615.dev/git-know-how/#git_add_-p%EB%A1%9C_%EC%9B%90%EC%9E%90%EC%A0%81_%EC%BB%A4%EB%B0%8B%ED%95%98%EA%B8%B0)

이는 풀 리퀘스트를 리뷰할 때나 이후 히스토리를 파악할 때 큰 도움이 됩니다.

**브랜치 컨벤션 추가 예정**

## Create Pull Request

내용을 수정하고 커밋까지 마쳤으면 이제 코드를 remote에 푸시합니다. 이때 푸시의 대상은 포크 받은 내 계정의 리포지토리인 'origin' 입니다.

```
git push origin {브랜치명}
git push origin feature/implement-api
```

remote에 푸시한 후 깃헙으로 돌아가서 포크된 리포지토리의 `New Pull Request`를 누르면

<img width="481" alt="스크린샷 2021-08-11 오후 11 09 14" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/pr.png">

아래와 같이 Username/Repository & branch -> Owner/Repository & branch로 경로가 설정됩니다.

<img width="481" alt="스크린샷 2021-08-11 오후 11 09 14" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/pr2.png">

PR 템플릿에 맞추어 작업 내역을 설명한 뒤 PR을 등록하고 코드리뷰를 진행합니다.

<img width="481" alt="스크린샷 2021-08-11 오후 11 09 14" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/pr3.png">
