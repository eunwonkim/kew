/*js에서의 변수선언
1. 변수 이름은 대소문자를 구별
2. 여러 변수를 한번에 선언할수 있음.
3. 지역,전역변수가있음,
4. 기본적으로는 CamelCase를 적용



자료형 
기본형
Number : 숫자형, 정수, 무리수, 무한대, NaN(숫자가 아님 ㅋㅋ)
Boolean : 참, 거짓
Null : 빈 값 표현.
undefined : 값을 할당하지 않은 변수가 가진값
String : 문자열

레퍼런스형
Object
자바스크립트에 존재하는 클래스, 배열, 함수들은 모두 object 형태.

var, let, const 
*/

// var test1 = 123;

// console.log(test1);
// {
//     var test1 = 456;
// }
// console.log(test1);

// let test1 = 123;//전역변수

// console.log(test1);
// {
//     let test2 = 456; //지역변수.
// }
// console.log(test1);
// console.log(test2);

// var vs let vs const 
// 1) var 는 블록 영역을 적용받지 않는다.(어디서 선언해도 전역변수)
// 2) var 는 선언한 변수의 중복선언이 가능하다.
//     -let은 변수의 중복선언이 불가능하다.
// 3) const의 경우 재선언과 재할당이 둘다 불가능하다.

// const test2 = 122;
// console.log(test2);
// const test2 = 455;
// console.log(test2);


// var test2 = 122;
// console.log(test2);
// var test2 = 455;
// console.log(test2);

// let test3 = 333;
// console.log(test3);
// let test3 = 446;
// console.log(test3);

// let test3 = 333;
// console.log(test3);
// test3 = 446;
// console.log(test3);

// 호이스팅(hoisting) / 끌어올리기
// JS에서 모든 변수선언은 호이스트된다.
// 함수의 경우 선언형식은 호이스팅되며 변수에 할당된 형태는
// 호이스팅 되지 않는다

if(true){
    //일반적인 언어의 경우는 아래의 코드는 에러가 발생
    //하지만 JS는 test1 변수가 호이스트되어
    // 변수 선언까지는 되었지만 값도, 타입도 할당되지 않은 상태가 된다.
    // 즉 Undefined 가 우선 적용되어있다.

    // 경우에 따라서 호이스팅은 사소한 문제를 일으키지 않아
    // 유용하게 느껴지기도 한다. 하지만 복잡한 코드에서는
    // 오류의 가능성이 높아진다.

    // 호이스팅의 문제 최소화
    // var, let, const를 상황에 맞게 잘 쓰자!
    // console.log(test1);
    // var test1 = 'what?';
    // console.log(test1);
}

//함수선언이 호이스팅되어 변수에 할당.
var varTest1;

console.log(typeof varTest1);
function varTest1(){
    
}

console.log(typeof varTest1);