# 커밋

commit 23f983dd96ab6e98a4b919d5081ff39dd8c34cad <-- **firebase 브랜치** firestore와의 비동기 통신, 미들웨어 작성
<br>
commit 23f983dd96ab6e98a4b919d5081ff39dd8c34cad <-- redux 전역관리 구현 / styled-components는 detail페이지에만 작성

## 컴포넌트 구조

대부분은 지난 주차 과제에서 변동이 없고 새롭게 추가한 요소는 리덕스 공식 튜토리얼 문서를 참조하여 배치했습니다.
<br>
app폴더 하위에 store, duck 구조상 기능에 따라 리듀서를 나누기 위해 features폴더를 만들었으며 하위 todostate폴더에 todolist에 관한 액션 함수와 리듀서를 작성했습니다. 상세페이지는 컴포넌트가 아니므로 pages폴더에, firebase관련 코드는 api폴더에 넣었습니다.

## 특이사항

+ redux 관리버전에서는 uuid 모듈을 사용해 아이디를 부여했지만 firebase 구현에서는 따로 아이디를 부여하지 않고 가져왔습니다. 
+ ReadTodo 기능은 구현했으나 힌트에 주어진 getTodoById(action creater)는 생성하지 않았습니다. 이름상 id로 state를 받아오는 것을 말하는 것 같아 Todo컴포넌트에 구현했습니다.
