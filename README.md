# TypeScript 리액트 개발 환경
- [TypeScript Declaration for SVG Assets](https://duncanleung.com/typescript-module-declearation-svg-img-assets/)
- [Using Jest with React and TypeScript](https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/)
- [Cannot use JSX unless the '--jsx' flag is provided](https://www.icatpark.com/entry/typescript-Cannot-use-JSX-unless-the-jsx-flag-is-provided)
- [typed-css-modules](https://www.npmjs.com/package/typed-css-modules)

<br/>

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

<br/>

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

<br/>

# React Testing Library 
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/setup/)
- [Testing React Testing Library github](https://github.com/testing-library/react-testing-library)

<br/>

# Styled Component
- [[React] Styled Components 사용기](https://dkje.github.io/2020/10/13/StyledComponents/)
- [Syntax Highlighting is default import is `styled` and nothing else](https://github.com/styled-components/vscode-styled-components)
- vscode 에서 `import styled` 소문자로 불러와야 highlighting and IntelliSense 작동

https://raw.githubusercontent.com/styled-components/vscode-styled-components/master/demo.gif



[![License: MIT](https://img.shields.io/github/license/marcelovicentegc/django-react-typescript)](LICENSE)
![Build and Test app](https://github.com/marcelovicentegc/django-react-typescript/workflows/Build%20and%20Test%20app/badge.svg)

# 스무디 한 잔 마시며 끝내는 리액트+TDD

![MicrosoftTeams-image (6)](https://user-images.githubusercontent.com/21074282/122349943-b63e4180-cf87-11eb-8759-749e5a864f2b.png)

- 부제: 테스트 주도 개발로 리액트 프로젝트 완성하기
- 저자: 김정헌
- 출간/배본가능일: 2021년 6월 25일
- 정가: 32,000원
- 페이지: 524












```r
$ yarn tcm src/
Wrote static/src/App.css.d.ts
Wrote static/src/index.css.d.ts
Done in 0.21s.
```

## References

### vscode
- [React JSX VS CODE Settings](https://velog.io/@hotdari90/VS-CODE-Settings)
- [Visual Studio Code에서의 TypeScript 개발 환경 구축](https://poiemaweb.com/typescript-vscode)

### Gits
- [react-redux-typescript-webpack-starter-kit](https://github.com/yunusunver/react-redux-typescript-webpack-starter-kit)
- [minimal-react-webpack-babel-eslint-prettier-setup](https://github.com/junagao/minimal-react-webpack-babel-eslint-prettier-setup)
- [django-react-typescript](https://github.com/marcelovicentegc/django-react-typescript)

### Babel
- [Async 사용시 regeneratorRuntime is not defined](https://velog.io/@haebin/React-regeneratorRuntime-is-not-defined-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0)

### React.js
- [CSS Module for React](https://react.vlpt.us/styling/02-css-module.html)
- [React Styled Components](https://styled-components.com/docs/basics)
- [Objects are not valid as a React child 해결](https://velog.io/@leemember/Objects-are-not-valid-as-a-React-child-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)

### TypeScript
- [typed-css-modules | yarn tcm](https://www.npmjs.com/package/typed-css-modules)
- [typed-scss-modules | yarn tsm](https://www.npmjs.com/package/typed-scss-modules)
- [React App using Webpack, Babel and TypeScript](https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927)
- [Using `process.env` in TypeScript](https://stackoverflow.com/questions/45194598/using-process-env-in-typescript)
- [Typescript: Cannot find module 'react'](https://stackoverflow.com/questions/40899868/typescript-cannot-find-module-react)
- [GITHUB Django Typescript Boilerplate](https://github.com/marcelovicentegc/django-react-typescript)

### Django Restful Framework
- [Routers App Names](https://www.django-rest-framework.org/api-guide/routers/#routers)
- [DRF 에서 App Name 사용시 주의할 점](https://devlog.jwgo.kr/2019/11/08/how-to-set-default-url-field-when-using-appname-in-drf/)
- [DRF using view name 'user-detail'](https://stackoverflow.com/questions/20550598/django-rest-framework-could-not-resolve-url-for-hyperlinked-relationship-using)
- [Simple JWT Authentication](https://blog.viralsangani.me/django-rest-framework-and-jwt-authentication/)
- [Simple JWT with INSOMNIA](https://velog.io/@hyeon4137/React-DRF-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-velog-%EB%94%B0%EB%9D%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0-4%EC%9E%A5)

### Static Folders
- [Static Customizing the ignored pattern list](https://runebook.dev/ko/docs/django/ref/contrib/staticfiles)
- [Static folder Customize](https://itinerant.tistory.com/144)
- [Static Customizing Ignored Patten](https://stackoverflow.com/questions/57921970/example-for-customizing-the-ignored-pattern-list-in-djangos-collectstatic)
- [Example of Deploying of HEROKU for YouTube](https://youtu.be/kBwhtEIXGII)
- [Heroku Fixing the Static Errors](https://stackoverflow.com/questions/29082028/heroku-django-oserror-errno-2-no-such-file-or-directory-static-static)


## Settings

### Frontend

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
react-testing-library/intro)
- [Webpack](https://webpack.js.org/)

### Backend

- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- Django CORS Headers

---

<h1 align="center" style="margin-top:100px">
<img src="https://files.realpython.com/media/django-pony.c61d43c33ab3.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104732205-f043b700-574d-11eb-84fe-3842f9f26530.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104730908-f173e480-574b-11eb-8c4d-4b3398fc8e2b.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104730913-f2a51180-574b-11eb-83e5-734e21526429.png" width="100" height="100%" display="inline">
</h1>