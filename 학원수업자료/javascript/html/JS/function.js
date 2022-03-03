// 함수의선언
// 기본적으로 function 이라는 키워드와 함께 선언한다.
// 선언부에 리턴 데이터에 대한 선언은 없다.
// 필요하다면 함수 바디에서 return문을 사용해 값을 리턴.

// 파라미터도 타입없이 갯수에따라 변수명을 나열
// function calc(a,b){
//     //최근 함수 내부의 지역변수들은
//     // 대부분 let or const를 사용
//     let result1 = a+b;
//     return result1;
// }
// console.log(calc(20, 30));

// 일급객체
// 아래의 조건을 만족하는 객체.
// 1. 변수나 데이터 구조안에 담을수 있다.
// 2. 파라미터로 전달할수 있다.
// 3. 리턴값으로 사용할수 있다.
// 4. 고유한 구별이 가능하다.
// 5. 동적 속성 할당이 가능.

// 함수의 여러 형태

// 1. 함수 표현식 형태
//    함수의 일급 객체 특성을 이용한 리터럴 방식으로 함수를 정의
//    변수에 할당할수 있는데 이러한 방식을 함수 표현식이라 한다.

// 기명함수 표현식
// var func1 = function test(num){
//     return num * num;
// }
//익명함수 표현식
// var func1 = function(num){
//     return num * num;
// }

// 함수표현식을 이용한 변수의 특징 
// - 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하고 있음.

// var func1 = function(num){
//     return num * num;
// }

// 함수가 할당된 변수를 사용해 함수를 호출하지 않고
// 기명함수의 함수명을 사용한다면 에러가 발생한다.
// why? : 함수표현식에서 사용한 함수명은 외부코드에서 
//        접근 불가하기떄문.
// 기명함수의 이름은 자바스크립트 디버거가 해당함수를
// 구분할수 있는 식별자 역할을 해주기도 한다.
// var test = function test(num){
//     return num * num;
// }
// console.log(test(20));

//함수명과 함수 참조값을 가진 변수명이 일치해서 함수명으로
//호출하는것처럼 보일수 있지만. 사실은 변수명으로 호출.
// 함수의 선언문도 표현식과 동일하게 리터럴 방식으로 정의.


//다양한 함수의 형태.

// 1. 즉시 실행 함수
// 함수의 정의와 동시에 실행되는 함수.
// 최초 브라우저 오픈시 한번 호출.
// 다시 호출이 매우 어렵기 때문에 이런 특징을 이용해
// 최소 한번만 실행이 필요한 초기화 처리에 사용가능.

// 기명 즉시실행함수
// 아래의 함수는 호출부 없이 처음 브라우저가 오픈될떄 실행된다.
// (function testFunction(){
//     // let a = 10;
//     // let b = 20;
//     // return a*b;
//     alert("1234");
// }());

//익명 즉시실행함수
// (function (){
//     // let a = 10;
//     // let b = 20;
//     // return a*b;
//     alert("1234");
// }());

// 자바스크립트의 문제점
// 파일이 분리되어있다 하더라도 전역범위는 하나.
//  -> 전역범위에서 선언된 변수나 함수는 어디서든 접근 가능.
//  -> 만약 다른 스크립트 파일 내에서 동일한 이름의 변수, 함수가
//     같은 영역에 존재해버리면 원하지 않는 결과를 출력할수 있음.

// 즉시 실행함수에 처리할 코드를 모아두면 변수명이나 함수명의
// 충돌을 방어 할수 있음.
// 라이브러리들의 경우 코드를 즉시실행함수 내에 정의해두면
// 라이브러리의 변수들이 독립된 영역 내에 존재하게 되서
// 변수명 충돌과 같은 문제를 방지 할수 있음.

// (function (){
//    let test = 10;
//    console.log("함수 내부"+test);
// }());

// let test =100;
// console.log("함수외부" + test);

// 내부함수.
// 함수 내부에 정의된 함수.
// 내부함수는 부모함수의 외부에서 접근 불가능.
function parent(param){
    var par = param;
    function child(){
        var chi = 'test';
        console.log(par + '' + chi);
    }
    child();
    console.log(par + '' + chi);
}
parent('test12');