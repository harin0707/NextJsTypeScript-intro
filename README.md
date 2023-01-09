# NextJS Introduction

### 라이브러리와 프레임워크의 차이
- 라이브러리: 개발자가 불러와서 사용하는 코드 ex) ReactJS
    - 개발자가 사용하고 싶을 때 자율적으로 불러와서 사용가능
    - 개발자가 선택해서 사용할 수 있는 코드나 컴포넌트, 파일구조

- 프레임 워크: 개발자의 코드를 불러와서 동작하게 하는 것
    - 개발자가 코드를 적절한 곳에 집어넣기만 하면 프레임 워크가 코드를 호출하여 정상적으로 작동하게 함

### NextJS의 기능
1. pages 폴더 안에 react.js component를 export 하고 있는 파일 넣어두기만 하면 next.js가 파일의 이름을 가져다가 url 이름으로 씀
    - router DOM을 사용하지 않아도 됌
    - 파일 이름 = url 주소 (컴포넌트 이름!= url 주소)
    - export default로 컴포넌트를 만들어줘야함
    - ☑️ 예외사항
        -  pages/index파일은 애플리케이션의 홈페이지로 연결
        - jsx를 사용하고 있다면 react.js를 import 하지 않아도 됌 (useEffect이나 useState를 사용하려면 import 해와야함)

2. Static Pre Rendering
    - CRA(create-react-app) 과 next.js의 차이점
        - CRA: client-side render
            - 브라우저(클라이언트)가 유저가 보는 UI를 만들어지게끔 모든 과정을 수행
            - 브라우저가 HTML을 가져올 때 비어 있는 div로 가져오고 -> 브라우저가 자바스크립트와 react.js를 실행시켜 화면을 구성(UI 완성)
            `<div id="root"></div>`
        - next.js: server-side render