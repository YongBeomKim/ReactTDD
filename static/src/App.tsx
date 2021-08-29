import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
// https://www.npmjs.com/package/typed-css-modules
import './index.css'

const test = process.env.HI

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <a href="#">Learn React</a>
    </>
  )
}