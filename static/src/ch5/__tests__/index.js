const sum = (a, b) => {
  return a + b;
};

// Object 함수
const person = (name, age) => {
  return {
    name, age
  };
};

// Boolean 함수
const toggle = (a) => {
  return !a;
}

// Array 생성함수 (시작, 끝)
const range = (start, end) => {
  let result = [];
  for (let i=start; i<=end; i++){
    result.push(i)
  }
  return result;
}

module.exports = {
  sum,
  person,
  toggle,
  range,
};
