const { sum, person, toggle, range } = require('./index.js');

// Jest 의 테스트 함수
// *.test.js 함수를 자동으로 찾아서 테스트를 실시한다

// describe( '테스트를 설명하는 함수', () => {
//   it('테스트 명세 내용' () => {
//     expect( Test함수 ).toBe( Test결과 );
//   }); 
// });

describe('test index.js file', () => {

  // >> Matcher 함수 1 : .toBe()
  it('sums 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  
  // >> Matcher 함수 2 : .toEqual()
  // Object 동일여부를 확인
  it('make a person', () => {
    expect(person('Kim', 20)).toEqual({
      name: 'Kim',
      age: 20,
    });
  });

  // >> Matcher 함수 3 : .toBeTruthy, toBeFalsy
  // Boolean 을 확인할 때 사용하는 Matcher 함수
  // 1) .toBeTruthy() : Boolean 이 True 여부 확인
  // 2) .not : Boolean 반대조건 추가
  it('returns false', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });

  // > Matcher 함수 4 : .toContain
  // Array 객체내 포함된 데이터 확인
  it('has 2', () => {
    expect(range(1,5)).toContain(2);
  })

});
