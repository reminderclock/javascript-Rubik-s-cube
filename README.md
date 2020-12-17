# 🎲 자바스크립트 루빅스 큐브 구현하기

### 루빅스 큐브 정보

- 윗면: `O`(주황색)
- 앞면: `R`(빨간색)
- 왼쪽면: `W`(흰색)
- 오른쪽면: `G`(초록색)
- 바닥면: `Y`(노란색)
- 뒷면: `B`(파란색)
- `U2`의 경우 180도 회전이므로 조작개수가 2개 카운트 된다.
- 조작은 `U` `U'` `U2` `L` `L'` `R` `R'` `F` `F'` `Q` 조합만 가능하다.
- 출력은 콘솔로 구현.

### 주어진 요구사항

- [참고 링크](https://cube3x3.com/%ED%81%90%EB%B8%8C%EB%A5%BC-%EB%A7%9E%EC%B6%94%EB%8A%94-%EB%B0%A9/#notation)를 참고해서 루빅스 큐브를 구현한다.
- 큐브는 W, B, G, Y, O, R의 6가지 색깔을 가지고 있다.
- 입력: 각 조작법을 한 줄로 입력받는다.
- 출력: 큐브의 6면을 펼친 상태로 출력한다.
- Q를 입력받으면 프로그램을 종료하고, 조작 받은 명령의 갯수를 출력시킨다.

### 주어진 추가 요구사항

- [클린 코딩] 모든 함수의 크기가 20줄 이하로 작성.
- [클린 코딩] 모든 코드의 들여쓰기는 최대 3단계로 구현.
- [클린 코딩] 무작위 섞기 구현
- [클린 코딩] 모두 맞추었을 경우 축하 메세지 나오도록 구현

### 루빅스 큐브 구현 동작(함수 별)

1. 처음 출력될 큐브의 2차원배열 생성 `main.createInfo()`
2. 2차원 배열로 첫 큐브 구현할 `main.makefrist()`
3. 무작위 버튼 클릭시, 무작위로 큐브를 섞어줄 `main.makeRandom()`
4. 큐브 이동시켜 조작어 입력 받는 부분 `setData()`
5. 문자열일 경우, 조작어 조합만 받는 `limitRange()`
6. 연속된 문자열을 한조작어씩 처리해주는 `makeinput()`
7. 현상태의 배열로 임시저장할 배열을 생성해줄 `makeTemp()`
8. 입력된 조작면에 실행될 함수 호출시켜주는 `decideCase()`
9. 앞면 조작(시계, 반시계) `rotateFront()`
10. 오른면 조작(시계, 반시계) `rotateRight()`
11. 왼면 조작(시계, 반시계) `rotateLeft()`
12. 윗면 조작(시계, 반시계, 180도) `rotateUp()`
13. 조작된 배열을 출력시켜줄 `createNewCube()`
14. 모두 맞추었을 시, 축하메세지 출력할 `addMessage()`
15. 종료시 시간, 조작개수, 종료인사를 출력시켜줄 `endGame()`

### 구현한 기능

- [x] 큐브의 펼친 그림이 정상적으로 출력된다.
- [x] 조작어를 `한글자`, 또는 `문자열`로 받아 큐브를 조작할수 있다.
- [x] `Q`를 눌러 게임을 `종료`할수 있다.
- [x] 큐브를 다 맞추었을 경우, 종료시 `축하메세지`를 출력한다.
- [x] 종료시 `조작개수`, `종료시간`, `종료인사`을 출력한다.
- [x] `무작위` 섞기로 큐브를 섞을 수있다.
- [x] [클린 코딩] 모든 함수의 크기가 20줄 이하로 작성
- [x] [클린 코딩] 모든 코드의 들여쓰기는 최대 3단계로 구현

### 출력결과

<img width="419" alt="초기창" src="https://user-images.githubusercontent.com/71510362/102019953-98660900-3db9-11eb-907e-6c8506e0d41b.PNG">

<img width="306" alt="결과창" src="https://user-images.githubusercontent.com/71510362/102019989-c3e8f380-3db9-11eb-9b27-c1eb547da8a1.PNG">
