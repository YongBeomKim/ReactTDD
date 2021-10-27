# TypeScript 리액트 개발 환경
- [타입스크립트(TypeScript) 타입 선언](https://velog.io/@recordboy/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8TypeScript-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8)
- [TypeScript Declaration for SVG Assets](https://duncanleung.com/typescript-module-declearation-svg-img-assets/)
- [Using Jest with React and TypeScript](https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/)
- [Cannot use JSX unless the '--jsx' flag is provided](https://www.icatpark.com/entry/typescript-Cannot-use-JSX-unless-the-jsx-flag-is-provided)
- [typed-css-modules](https://www.npmjs.com/package/typed-css-modules)

<br>

# package.json
- [bj퍼블릭 GitHub](https://github.com/bjpublic/reactdd)
- [TDD 를 TypeScript 활용하기](https://velog.io/@xortm854/TDD%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90-2%ED%8E%B8TDD-%EC%84%A4%EC%A0%95ReactTypescript#tdd%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0%EC%A0%84-%EC%84%A4%EC%A0%95%EB%B6%80%ED%84%B0-)

```r
$ yarn add -D typescript @types/react @types/react-dom
$ yarn add -D web-vitals @types/node @types/jest
$ yarn add -D jest jest-cli ts-jest
$ yarn add -D @testing-library/react
$ yarn add -D @testing-library/jest-dom@
$ yarn add -D @babel/plugin-syntax-jsx
```

<br>

# JEST
- JEST 테스트 함수 : `*.test.js` 를 자동으로 검색 후 실행
- `index.js`, `index.test.js` 를 활용하여 자동으로 테스트 실행
- [.toBeInTheDocument() not a function | setupTest.tsx](https://newbedev.com/react-testing-library-why-is-tobeinthedocument-not-a-function)
- [JEST cannot load svg file](https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file)
- [React Testing | css](https://velog.io/@_woogie/%EC%B2%98%EC%9D%8C%EC%9D%B4%EB%9D%BC-%EC%96%B4%EB%A0%A4%EC%9A%B4-React-Testing#css%EC%98%A4%EB%A5%98-feat%EC%98%88%EC%83%81%EC%B9%98-%EB%AA%BB%ED%95%9C-%EC%A0%90)
- [How to resolve “Cannot use import statement outside a module” in jest](https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest)
- [JEST Version: 27.1 Expects](https://jestjs.io/docs/expect)

```r
# 테스트 코드 중 실테 테스트 범위 확인
$ yarn test --coverage
 PASS  src/components/__tests__/index.test.js
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |      100 |     100 |     100 |                   
 components/__tests__ |     100 |      100 |     100 |     100 |                   
  index.js            |     100 |      100 |     100 |     100 |                   
----------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Done in 3.18s.
```

<br>

# React Testing Library 
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/setup/)
- [Testing React Testing Library github](https://github.com/testing-library/react-testing-library)

<br>

# Styled Component
- [Lint Staged 살펴보기](https://www.huskyhoochu.com/how-to-use-lint-staged/)
- [[React] Styled Components 사용기](https://dkje.github.io/2020/10/13/StyledComponents/)
- [Syntax Highlighting is default import is `styled` and nothing else](https://github.com/styled-components/vscode-styled-components)
- vscode 에서 `import styled` 소문자로 불러와야 highlighting and IntelliSense 작동된다

<br>

# Props 와 State
- [Void : undefined 를 호출하는 함수](https://m.blog.naver.com/skydoor2014/221141848372)

<br>

# React Router
- [You should not use <Switch> outside a <Router> 해결 방법](https://hellowworlds.tistory.com/62)

<br>

# 스무디 한 잔 마시며 끝내는 리액트+TDD

![MicrosoftTeams-image (6)](https://user-images.githubusercontent.com/21074282/122349943-b63e4180-cf87-11eb-8759-749e5a864f2b.png)

- 부제: 테스트 주도 개발로 리액트 프로젝트 완성하기
- 저자: 김정헌
- 출간/배본가능일: 2021년 6월 25일
- 정가: 32,000원
- 페이지: 524