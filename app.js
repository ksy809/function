// 함수 생성
function sayHello() {
  console.log("Hello!");
}

function sayHelloo(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age + ".");
}

sayHelloo("nico", 10);
sayHelloo("dal", 23);

// 계산기 (덧셈)
function plus(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}
plus(8, 60);

// 나눗셈
function divide(a, b) {
  console.log(a + " / " + b + " = " + a / b);
}
divide(8, 3);

//object 안에 function 만들기
const player = {
  name: "nico",
  sayHellooo: function (otherPersonName) {
    console.log("Hello " + otherPersonName + "! nice to meet you");
  },
};

console.log(player.name);
player.sayHellooo("dal");
