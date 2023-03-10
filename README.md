# NextJS Introduction

### 라이브러리와 프레임워크의 차이
- 라이브러리: 개발자가 불러와서 사용하는 코드 ex) ReactJS
    - 개발자가 사용하고 싶을 때 자율적으로 불러와서 사용가능
    - 개발자가 선택해서 사용할 수 있는 코드나 컴포넌트, 파일구조

- 프레임 워크: 개발자의 코드를 불러와서 동작하게 하는 것 ex) Next.js
    - 개발자가 코드를 적절한 곳에 집어넣기만 하면 프레임 워크가 코드를 호출하여 정상적으로 작동하게 함

### NextJS의 기능
#### 1. pages 폴더 안에 react.js component를 export 하고 있는 파일 넣어두기만 하면 next.js가 파일의 이름을 가져다가 url 이름으로 씀
- router DOM을 사용하지 않아도 됌
- 파일 이름 = url 주소 (컴포넌트 이름!= url 주소)
- export default로 컴포넌트를 만들어줘야함
###### 🌀 예외사항
    -  pages/index파일은 애플리케이션의 홈페이지로 연결
    - jsx를 사용하고 있다면 react.js를 import 하지 않아도 됌 (useEffect이나 useState를 사용하려면 import 해와야함)

#### 2. Static Pre Rendering
- CRA(create-react-app) 과 next.js의 차이점
    - CRA: client-side render
        - 브라우저(클라이언트)가 유저가 보는 UI를 만들어지게끔 모든 과정을 수행
        - 브라우저가 HTML을 가져올 때 비어 있는 div로 가져오고 -> 브라우저가 자바스크립트와 react.js를 실행시켜 화면을 구성(UI 완성)
        `<div id="root"></div>`
    - next.js: server-side render   
        - 브라우저가 페이지를 요청하면 완성된 HTML 그대로 받게됌
        - 연결속도가 느리거나 자바스크립트가 비활성화 되어도 진짜 알맹이가 있는 HTML을 미리 넘겨 받을 수 있음

- Hydration
    - 유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 미리 볼 수 있다고 했는데 react.js가 로딩된 후에는 일반적인 react.js앱이 됌 => 모든 상호작용이 정상적으로 이루어짐
    - 유저가 코드를 다운 받아 react를 실행되길 기다리지 않아도 됌
    - <b>⭐️ SEO와 구글 검색 엔진, 유저에게 좋음</b>

#### 3.Routing
- react.js에서 React Router Link를 사용하는 것 처럼 routing 기능을 하는 특정 Link 컴포넌트가 존재함

- useRouter: 라우터와 연결할 수 있게 하는 Hook
    - 라우터에 대한 정보를 얻을 수 있음
    - 라우터를 설치하거나 따로 렌더링 하지 않아도 작동

#### 4. CSS 
- module 파일 사용하기
    - ` NavBar.module.css` -> `className={styles.nav}`
    - 페이지가 빌드 되면 NextJS가 클래스 이름을 무작위로 바꿔주기 때문에 클래스 이름이 충돌되지 않음
    - class 이름을 중복 고민 없이 재사용 가능

- 2개 이상의 className을 사용하여 모듈과 연결할 때
    - 문자열 리터럴
    - 배열을 만들어 .join을 사용

##### 🌀 단점
- module.css 파일을 분리해서 저장해야 하며,
- className을 외워야 하는 번거로움이 있음

- styled jsx를 사용하면 컴포넌트 내에 한정되어 적용됌

#### 5. _app.js
- 전역 스타일링(global Style) 가능
    - pages 폴더 안에서 가장 우선적으로 실행

- Component와 pageProps를 인자로 넘겨받아서 렌더링


#### 6. 패키지
- 흔하게 쓰이는 기능들을 내장 패키지를 이용하여 편리하게 구현 가능
ex) next/head
ex) next/image

#### 7. data fetching & redirect
- API key 숨김기능
    

#### 8. redirect, rewrite
- config 파일에서 쉽게 처리 가능
- redirect
    - ```{source: "/oldpath/:path*",
        destination: '/newpath/:path*",
        permanent: false,}```
    
- rewrite
    - user가 url 변화를 확인할 수 없기 때문에 숨겨야 하는 url에 나타나는 API키를 숨길 수 있음 +env파일 활용(깃에서 숨김)
    - url 마스킹 기능
    
#### 9. 서버사이드 렌더링
- 클라이언트 쪽에서는 작동하지 않고 서버(백엔드) 쪽에서만 작동

- getServerSideProps()는 객체를 리턴
    - props: results을 반환값으로 갖는다.
    - props를 키 값으로 갖는 객체 -> MyApp 컴포넌트에서 pageProps로 받아와서 `<Component {...pageProps}/>`안에 넘겨주게 된다. 
    - `export default function Home({ results })` 서버사이드 렌더링을 통해 받아온 pagesProps는 각 컴포넌트에서 results로 받아오게 된다.

- 서버사이드렌더링-> 데이터가 유효할 때 화면이 보여지게?
    - or 데이터가 유효하지 않을 땐 로딩, 데이터가 유효할 때 화면 렌더링

- 백엔드에서 받아온 props를 return(results 배열로), 소스코드에 명시 -> results배열을 가지고 reactJs가 내용물을 흡수해서 화면 구성 (hydratation)


#### 10. 동적 라우팅(동적 url)
- url에 변수를 삽입하여 동적으로 라우팅이 가능하게
- pages 폴더 안에 abc.js 파일을 만들게 되면 /abc url에 접속했을때 보여지는 페이지를 만들 수 있다.
- /abc/cdf로 라우팅되길 원한다면 pages>abc> index.js와 cdf.js파일을 만들면 된다. index.js파일은 /abc로 라우팅 했을 때 보이는 페이지를 만든다.

- url에 변수 넣는 방법
    - pages폴더 안에 [변수명].js 파일을 만들면 된다.
    - 파일명에 쓰인 변수명과 query 프로퍼티의 이름이 동일하다.

- query에 나타난 정보를 숨길 수 있음
- router를 통해 query 정보를 변수처럼 사용 가능(detail 페이지)
- router.query.title 정보는 home에서 영화를 선택했을 때에만 받아올 수 있음
    - 임의로 url을 바꿔서 상세페이지로 들어가면 router로 정보를 받아올 수 없음

- onClick -> router.push({pathname:'', query:{}, },'마스킹할 url')
- href -> href={{pathname:"", query:{},}} as=마스킹할 url

##### catch all url
    