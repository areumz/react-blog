# :pushpin: React Blog
>HTML/CSS로 제작된 블로그 페이지 리액트로 다시 제작하기

>https://react-blog-wine.vercel.app/

</br>

## 1. 제작 기간 & 참여 인원
- 2022년 7월 1일 ~ 4일
- 개인 프로젝트

</br>

## 2. 사용 기술
### `Front-end`
#### `React.js` `JSX`

</br>

## 3. 프로젝트 목적
* HTML/CSS로 마크업 되어있는 페이지를 React로 다시 제작하여 배포했습니다   
    * React 기준으로 다시 폴더 나누기, 컴포넌트화를 중심으로 했고 기타 기능은 동작하지 않습니다
* 메인에 있는 각 포스트를 클릭하면 포스트 상세 내용으로 이동하도록 라우터 처리했습니다
* Login <-> Logout 버튼을 클릭시 토글처럼 상태 변화되도록 처리했습니다
* SNS 아이콘 클릭시 각 외부 링크로 연결됩니다

</br>

## 4. 에러 핸들링
### 배포시 메인 페이지가 바로 뜨지 않는 현상
* gh-pages로 배포할 때의 문제로, '/' 라우터 처리가 잘 안됨
* GitHub이 기본적으로 SPA 기능을 제공하지 않아 발생하는 문제라고함. Hash Router를 사용하면 문제가 없음
* 이번에는 Hash Router 사용이 아닌 vercel로 재배포 해보기로 함  

### React-Uncaught SyntaxError: unexpected token '<'
* vercel 배포시 에러가 떠서 `CI='' npm run build`를 오버라이드하여 해결했고, 배포 성공 메세지가 떴지만 빈 화면
* 콘솔을 열어보니 위와 같은 에러 메세지가 오고 있음
* 빌드할 때 웹팩이 chukFile을 JS가 아닌 HTML 구문으로 인식해서 생기는 문제   
프로젝트 작업시에도 html 파일 첫줄이 왜 계속 에러가 나는지 궁금했는데, `<DOCTYPE`으로 시작하는 html의 `<`를 인식하지 못한다고 함   
* 해결 방법 3가지
    * html file head에 no-cache 넣어주기 ❌
    * html head에 <base href="/" /> 넣어주기 ❌
    * package.json에 "homepage": "." 경로 설정 ⭕
      ➡️ 기존에 github으로 배포했기 때문에 github 배포 주소가 남아있어서 삭제 후 변경하니 잘 배포됨 
      
### SNS 아이콘에 외부 링크 연결
```
<li>
    <button onClick={()=> window.open('www.instagram.com', '_blank')}>
        <img src={instagram} alt="Instagram" />
    </button>
</li>
```
* 기존에 이렇게 되어있었는데, 배포 url 뒤에 /www.~ 주소가 붙는 식으로 이상하게 작동함
* 본 페이지가 SPA 페이지이지만, 위의 링크는 외부 링크이므로 a 태그 써도 상관 없을 것 같아 수정함
* `https://` 붙이지 않았을 때 여전히 이상하게 열려서 `https://` 붙여서 수정
      
## 5. 추가로 하고싶은 것들
* 6개의 post 부분에 Link를 달다보니, 라우터 연결이 잘 안되어 불필요한 반복을 6번 하고 있음
    * map으로 처리하기
* 로그인 기능을 Firebase로 추가해도 좋을듯함
* Gatsby로 실제 나의 블로그 만들어보기

## 6. 회고 / 느낀점
> 기존에 HTML/CSS로만 되어있는 페이지를 리액트로 다시 바꾸려하니 생각보다 간단하지 않았다   
폴더 구조도 다시 잡고, css 부분도 분리하고 마크업도 수정하다보니 바꾸는 것이 쉽지 않았지만   
그래도 HTML/CSS로 마크업된 페이지를 컴포넌트화하니 리액트 사용하는 법을 더 익힐 수 있었다


