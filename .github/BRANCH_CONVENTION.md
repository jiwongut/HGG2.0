# 브랜치 컨벤션

[블로그 글](https://velog.io/@kim-jaemin420/Git-branch-naming) 을 참조하여 깃헙 브랜치 컨벤션에 대해 정리합니다.

## 1. main branch

혹 본인의 기본 브랜치 명이 master로 되어 있다면 협업 과정에서 오류가 발생할 수 있으니 `main` 브랜치로 변경해주시는 것을 권유합니다! Black lives matter운동 이후 `master`브랜치라는 용어는 사용하지 않는 것으로 문화가 조성되고 있습니다.

main branch는 **배포 가능한 상태만 관리합니다.** 절대 메인 브랜치상에서 작업하지 않도록 주의 부탁드립니다!

## 2. develop branch

다음 출시 버전을 개발하는 브랜치입니다. 보통의 개발은 위 브랜치 기반으로 분기하여 진행하며 버그 수정이 모두 완료된 뒤에 메인 브랜치에 머지(merge)하여 배포합니다.

## Supporting branches

`Supporting branch`는 `develop` 브랜치로부터 분기됩니다.

### 1. feature branch

feature 브랜치는 develop 브랜치로부터 분기합니다.

`git checkout -b feature/login`, `git checkout -b feature/delete`와 같은 양식으로 브랜치명을 설정합니다.

### 2. release branch

<img width="572" alt="스크린샷 2021-08-11 오후 10 45 52" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/branch.png">

<figcaption>출처 : https://velog.io/@kim-jaemin420/Git-branch-naming</figcaption>

`git checkout -b release/버전 넘버..`

`feature` 브랜치로 여러 기능들을 구현한 뒤 `develop` 브랜치에 병합하고, 당장 더 개발할 기능이 없으면 출시를 위한 `release`브랜치를 `develop` 브랜치로부터 생성하여 최종 버그 수정, 문서 추가 등 마무리 작업 뒤에 `main` 브랜치로 병합시킵니다.

**release브랜치에는 추가적인 `feature` 브랜치를 병합시키지 않습니다!**

### 3. hotfix branch

`git checkout -b hotfix/버그발생 버전넘버..`

release후 메인 브랜치에서 발생한 버그를 **긴급하게 수정해야할 때 사용하는 브랜치입니다.** `main`으로부터 분기하여 버그를 수정, `main`에 다시 병합시킵니다.

`hotfix` 브랜치 변경사항은 **develop 브랜치에도 병합시킵니다.**

<img width="572" alt="스크린샷 2021-08-11 오후 10 45 52" src="https://raw.githubusercontent.com/Parkjju/files/main/img/github/hotfix.png">

<figcaption>출처 : https://velog.io/@kim-jaemin420/Git-branch-naming</figcaption>
