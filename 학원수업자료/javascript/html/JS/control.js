//js에서는 js 엔진에 의해 암묵적으로 타입이
//자동변환되기도 한다.

console.log(1+null)


// 비교연산자 : 좌우항 피연산자를 비교해서 T OR F를 리턴하는 연산자

// 동등연산자(==) 
// 좌우항의 피연산자를 비교할때 암묵적 타입변환을 통해 
// 타입을 일치시킨후 같은 값을 같는지 비교.

// 예측하기 어려운 결과가 나오기 때문에 수많은 부작용을 야기할수 있음


// console.log(10==10)
// console.log(10=='10')

// 일치비교 연산자(===)
// 좌우항의 피연산자가 타입도 같고 값도 같은 경우에 한해 True를 반환

// console.log(10===10)
// console.log(10==='10')

// 번외(NaN)

// console.log(NaN===NaN)
// 결과예측 -> F
// JS에서 NaN은 자신과 일치하지 않는 유일한 값.
// isNaN을 이용해서 NaN인지 아닌지를 구분!
// var test= NaN;
// console.log(isNaN("1"));

// 부 동등 비교연산자(!=)
// 값만 다른지 비교

// 불일치 비교 연산자(!==)
// 타입까지 다른경우에만 true

// typeof
// 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 리턴

// console.log(typeof '');
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof function(){});
// console.log(typeof null);

// 조건문 
// 자바와 흡사. if, switch 둘다 사용가능.

// var test = 50;
// if(test>=50)
//     console.log("test1");
// else
//     console.log("test2");

// var test2= 'B';

// switch(test2){
//     case 'A':
//         console.log("a");
//         break;
//     case 'B':
//         console.log("b");
//         break;
//     default:
//         console.log("?")
//         break;
// }

//반복문 
//자바와 흡사
// for, while을 사용가능.

let arr1 = ['pink','grape', 'orange'];
// for (let i=0; i<arr1.length; i++){
//     console.log(arr1[i])
// }

// forEach
// 배열의 모든 요소에 대해 특정 코드블럭을 수행하는 방법
// arr1.forEach(function(value){
//     console.log(value);
// });

//arrow function을 이용한 간략화 예제
//arr1.forEach(value => console.log(value));

//for-in, for-of

//for-in
// 객체의 모든 열거 가능한 속성에 대해 반복
// 배열뿐만 아니라 일반적인 객체의 속성 반복시에도 사용가능
// key값에는 접근이 가능하지만 value에는 접근 불가.

for(var i in arr1){
    console.log(arr1[i]);
}

//for-of
//object를 대상으로 하지 않고 객체의 속성을 순회시(for-in)
//object를 대상으로 사용할떄는 key값을 구해서 순회하면서 출력.

for(var i of arr1){
    console.log(i);
}