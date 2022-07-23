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

## 3. 핵심 기능
### 인삿말
- 접속 시 현재 시간대를 기준하여 아침 / 오후 / 저녁이 바뀌며 인삿말이 나오도록 구현했습니다

### Boomark
- 각 서비스에 하트 아이콘을 누르면 해당 서비스의 이름이 화면에 나타나도록
구현했습니다

### 반응형 웹페이지
- 부트스트랩 그리드 시스템을 활용하여 레이아웃을 잡았습니다
- 모바일 퍼스트로 작업하였고, 모바일 / 태블릿 / 데스크탑에서 반응하는 웹 페이지를 구현했습니다

### 그 외 HTML & CSS
- HTML 마크업 시 최대한 시맨틱한 마크업이 되도록 신경을 썼고,
CSS 작업이나 유지 보수에 용이하도록 class명을 일관되게 주고자 노력했습니다

</br>

## 4. 디버깅
### 4-1. 핵심 디버깅 (수정중)
<details>
<summary><b>기존 코드</b></summary>
<div markdown="1">

```
코드
```

</div>
</details>

- 

<details>
<summary><b>개선된 코드</b></summary>
<div markdown="1">

```
코드
```

</div>
</details>

- 

</br>


### 4-2. 각종 디버깅
<details>
<summary>화살표 함수 내 if문</summary>
<div markdown="1">

- 좋은, 입니다 만 미리 만들어 두고 시간대별로 중간에 다른 문구가 들어가도록 구현하려함
- 기왕이면 ES6 문법을 사용하고싶어서 화살표 함수로 조건문을 만들었을 때<br/>
시간대에 상관 없이 else 부분만 출력됨 (아래 코드)

```
const date = new Date();
const hours = date.getHours();

const greeting = () => {
if  (hours > 6 && hours < 12) {
    times.innerText = `아침`;
}
else if (hours > 12 && hours < 17) {
    times.innerText = `오후`;
 }
 else if (hours > 17 && hours < 21) {
    times.innerText = `저녁`;
}
    else {
    times.innerText = `밤`;
    }
}
```

- const를 let으로 바꿔도 보고, && 연산자가 문제인가 바꿔도 보고 return을 적어도 봤지만
다 아니었음
- hours는 콘솔로 찍어봤을 때 정상적인 값이 나옴

```
function greeting() {
     if  (hours > 6 && hours <= 12) {
         return times.innerText = `아침`;
     }
    else if (hours > 12 && hours <= 17) {
         return times.innerText = `오후`;
     }
     else if (hours > 17 && hours < 21) {
         return times.innerText = `저녁`;
     }
     else return times.innerText = `밤`;
 }
```

- 이렇게 기존 함수 형태로 바꿨을 때는 무리 없이 잘 작동됨
- 화살표 함수로는 if 문을 못 쓰는건지 구글링 해봤을 때 만족할만한 답을 얻지 못함

```
let greetings = () => {
    if (hours > 6 && hours <= 12) {
        times.innerText = `아침`;
    }
    else if (hours > 12  && hours <= 17) {
        times.innerText = `오후`;
    }
    else if (hours > 17 && hours < 21) {
        times.innerText = `저녁`;
    }
    else {
        times.innerText = `밤`;
    }
}
```
- 이렇게 고치니 작동함
- 위에 hours라는 변수를 이미 선언했는데, 함수 내에 매개변수로 같은 이름을 전달하니
충돌이 일어난듯 함

</div>
</details>
    
</br>

<details>
<summary>for문 사용시 문제</summary>
<div markdown="1">

사소한 실수인데, for문 사용시에 return 써버려서 첫 줄만 작동하고 끝나버림<br/>
return을 삭제하여 해결

</div>
</details>
    
</br>

<details>
<summary>document.querySelectorAll</summary>
<div markdown="1">

document.querySelectorAll을 담은 변수에 addEvenetListner를 달았을 때<br/>
오류가 발생. 노드 리스트 형태로 담겨서 배열은 아니지만 유사 배열이라<br/>
발생한 오류. for문과 변수[i] 뒤에 이벤트 설치하니 잘 작동함

</div>
</details>
    
</br>

## 5. 회고 / 느낀점
> 이전까지 전체 레이아웃 잡는 것, 반응형 웹을 조금씩 연습해오다가 처음으로 제대로 완성을 해봤는데<br/>시간이 많이 걸렸지만 전보다 HTML 마크업과 CSS 배치에<br/>익숙해진 것 같아서 다행이었다. <br/>
자바스크립트로 북마크되는 부분을 일부는 구현했지만, 완벽하게 구현하지는 못한 것이 조금 아쉽다.


> 배포 url : https://react-blog-wine.vercel.app/

* gh-pages 배포상 문제로, '/' 라우터 처리가 잘 안됨   
  * https://areumz.github.io/react-blog/ 링크로 들어갔을 때   
    로고를 한 번 클릭하면 메인 페이지 접속
  * 이 부분 수정 예정
 * vercel로 배포하여 수정함

* SNS 아이콘 클릭시 주소가 이상하게 처리됨
  * 이 부분 수정 예정
