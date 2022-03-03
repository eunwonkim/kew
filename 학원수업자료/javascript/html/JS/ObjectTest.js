//객체타입 생성(객체 리터럴 방식으로 생성하기)
// var dog = {
//     name : '뽀삐', // 프로퍼티 (key: name /value:'뽀삐') 프로퍼티의 구분은 ,로진행 
//     dogType : '사모에드',
//     bowWow: function(){
//         console.log('왈왈왈왈왈x1000000');
//     }
// };

// console.dir(dog);

// dog.bowWow();

// 빈 객체 만들기?(생성자 함수.)
// object : 객체를 생성해주는 함수. 만약 생성자의
//          인수값이 없다면 빈 객체를 리턴.
// var cat = new Object();

// // 빈객체에 프로퍼티 추가
// cat.name = '야옹이';
// cat.catType = '렉돌';
// cat.mew = function(){
//     console.log("야오옹");
// };
// cat.mew();
// console.log(cat.name);

// 반드시 object 생성자 함수를 통해 빈 객체를 생성해야하는건 아니다.
// -> 객체생성 방법은 객체 리터럴을 사용하는게 더 간편.
// -> 앞으로 자주 쓸일 없는 방법.

// 생성자 함수.
// 마치 인스턴스를 생성하기위한 클래스처럼 사용되는 함수.

// 1. 생성자 함수는 첫글자는 대문자로 시작하여 
//    생성자 함수임을 인식시킨다.
// 2. this를 통해 각각 연결된 프로퍼티와 메서드를 구분.
// 3. this에 연결된 프로퍼티와 메서드는 public타입.
// 4. 생성자 함수 내에서 선언한 지역변수는 외부에서 참조 불가능
//    내부에서는 접근이 가능하지만 외부는 접근 불가.

// function Dog(name, type){
//     var eatSomething = true; // 생성자 함수의 지역변수.
//     this.name = name;// ?
//     this.type = type;
//     this.bowdow = function(){
//         console.log("왈왈왈")
//     }
// }
// // 인스턴스의 생성.
// var Dog1 = new Dog('왈왈이', '시베리안 허스키');
// var Dog2 = new Dog('말썽쟁이', '비글');
// console.log(Dog1.eatSomething);

// console.log(Dog1.name);
// console.log(Dog2.name);

// JS 생성자함수 vs JAVA 생성자
// JAVA의 생성자는 형식이 정해져 있음.
// JS 생성자함수 : 이름 그대로 객체를 생성해주는 함수.
//  -> 일반 함수에 new 연산자를 붙여서 호출하면?
//     (생성자 함수처럼 동작시킬수 있음.)

// 객체 프로퍼티 접근
// 
var dog = {
    name : '뽀삐', // 프로퍼티 (key: name /value:'뽀삐') 프로퍼티의 구분은 ,로진행 
    'dog-Type' : '사모에드', // -을 연산자가 있는 표현식으로 인식.
    1 : 10,
    bowWow: function(){
        console.log('왈왈왈왈왈x1000000');
    }
};

console.log(dog.name);
console.log(dog['name']); // 호출시 대괄호를 쓴다면 대괄호 표기법으로 
                          // 인식해야한다.

dog.name = '크왈왈이';
console.log(dog.name);

// dog.age = 10;
// console.log(dog.age);

// delete dog.age;
// console.log(dog.age);

// 처음실행될때 순서 보장 x
// for (var d in dog){
//     console.log(d + ':' + dog[d]);
// }

// 프로토 타입
// 객체지향 언어의 종류
// 1. 클래스기반 객체지향 프로그래밍.

// 2. 프로토타입기반 객체지향 프로그래밍.
//  -> JS

// 둘의 차이는 무엇?
// 클래스의 유무

// JS의 상속?
// JS의 모든객체는 자신의 부모역할을 담당하는 객체와 연결.
// 클래스기반 객체지향 상속 처럼 부모 객체의 프로퍼티나
// 메서드를 상속받아 사용 가능하도록 한다.
// 프로토타입 : 어떠한 객체의 부모객체

// 프로토타입의 사용법?
// 생성자 함수에 의해 생성된 각각의 객체에 공유 프로퍼티를
// 제공하기 위함.

// JS의 모든 객체는 [[Prototype]] <-- 와 같은 인터널 슬롯을 가진다.
// [[Prototype]]의 값 : null / object -> 상속 구현
// [[Prototype]] 객체의 데이터 프로퍼티는 get메서드의 접근을 위해
// 상속되어 자식 객체의 프로퍼티처럼 사용할수 있다.


var student ={
    name : 'Kim',
    score : 80
};

console.dir(student.hasOwnProperty('name'));

console.dir(student);
// 부모 객체로 접근하기
// __proto__ <--- 접근 프로퍼티 
// 부모의 get.prototypeof 라는 메서드 호출.
// console.log(student.__proto__ === Object.prototype)

// 모든 객체는 자신의 프로토타입 객체를 가리키는 [[prototype]]를 가진다
// 그리고 이것은 상속을 위해 사용된다.
// 하지만 함수 객체는 일반 객체와는 다르다.
// 일반적으로 함수객체는 prototype 이라는 프로퍼티를 가져가고
// -> 함수가 생성자로 사용될때 이 함수를 통해 생성될 객체의
//    부모역할을 하는 객체를 가리킨다.

// function Test1(param){
//     this.param = param;
// }

// var test = new Test1('testWord');
// console.dir(Test1);
// console.dir(test);

// 생성자 프로퍼티(constructor property)
// 객체입장에서 자신을 생성한 객체를 가리키는 프로퍼티.

// function Cat(name){
//     this.name = name;
// }

// var mew = new Cat('괭이');

// Cat 생성자 함수에 의해 생성된 객체를 생성한 객체는 누구인가?
//console.dir(Cat.prototype.constructor);

// 위의 코드에서 mew 인스턴스를 생성한 객체는 Cat 생성자 함수.
// mew 입장으로 바라본다면
// 1. mew 인스턴스를 생성한 객체는 누구인가?
//   - Cat() 생성자 함수
// 2. mew의 프로토타입 객체 -> 누구?
//   - Cat.prototype
// 3. Cat.prototype 객체의 생성자 프로퍼티는 Cat() 함수를 가리킨다.
// console.log(cat1.constructor);


// 프로토타입 체인
// 특정한 객체의 프로퍼티나 메서드에 접근하려할때 해당 객체에
// 접근하려는 프로퍼티나 메서드가 없다면 [[prototype]]이 가리키는
// 링크를 따라 자신의 부모역할을 하는 객체의 프로퍼티나 메서드를
// 검색하는 것.

var people = {
    name: 'test'
}
//Object.prototype.hasOwnProperty()
// console.log(people.hasOwnProperty('name'));
console.log(people.__proto__ === Object.prototype);
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

// 리터럴 방식으로 생성된 객체의 프로토타입 체인 exam
// object 생성자 함수는 일반객체와는 다르게 프로토타입이 존재.
//var person = new Object();
// var person = {
//     name : 'Lee',
//     gender : 'male',
//     sayHello : function(){
//         console.log("my name is " + this.name)
//     }
// };

// console.log(person.__proto__ === Object.prototype)
// console.log(Object.prototype.constructor === Object)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)

//함수 생성자와 프로토타입.
//함수 객체 생성시 모든 함수 객체의 프로토타입 객체는
// Function.prototype/
// 생성자 함수도 함수 객체. (생성자 함수의 프로토타입 객체는)
// Function.prototype이다. 
// function person(name,gender){
//     this.name = 'Lee';
//     this.gender = 'male';
//     this.sayHello = function(){
//         console.log("my name is " + this.name)
//     };
// }

// var test = new person('test1', 'test2');

// 프로토타입 객체의 확장
// 일반 객체처럼 프로퍼티를 추가/삭제할수 있음.
// 추가/삭제된 프로퍼티는 즉시 프로토타입 체인에 반영.

// 생성자 함수 TEST는 프로토타입 객체 test.prototype과 
// prototype 프로퍼티에 의해 바인딩 되어 있음.
// test.prototype 객체는 프로퍼티의 추가와 삭제가 가능하다.
//  -> 아래의 코드는 hello 메서드를 추가.
//  -> hello 메서드는 프로토타입 체인에 반영되고 
//  -> 생성자 함수 Test에 의해 생성된 모든 객체는 hello 메서드를 사용할수
//  -> 있도록 처리되었다. 
// function Test(param){
//     this.param = param; 
// }

// var test1 = new Test('아무거나');
// Test.prototype.hello = function(){
//     console.log(this.param);
// }

// test1.hello();

// 원시 타입의 확장.(★★★★)
// 원시타입은 원시타입일 뿐(프로퍼티, 메서드를 가질수 없다.)
// 원시타입으로 프로퍼티나 메서드를 호출할때 원시타입과 연관된 객체로
// 일시적으로 변환하여 프로토타입 객체를 공유할수 있음.
// var test333 = 'test';

// String.prototype.testMethod = function(){
//     console.log('이거 ㄹㅇ됨?');
// }

// test333.testMethod();
// 'string'.testMethod();


// var test234 = new String('test');
// console.log(test234);

// 프로토타입 체인에 의해 대부분의 객체가 Object.prototype 객체의 메서드를
// 사용한다는 사실을 확인했었다.(hasOwnProperty)
// String, Number, Array등 가지고 있는 표준 메서드는 
// 프로토타입 객체인 String.prototype 등에 정의되어있다.

// JS는 표준 내장 객체의 프로토타입 객체에 개발자가 정의한
// 메서드의 추가를 허용.

// 프로토타입 객체의 변경.
// 객체생선 -> 프로토타입이 결정됨. -> 다른 임의 객체 변경 가능
// -> 프로토타입을 동적으로 변경시킬수 있다.

// 프로토타입 객체 변경시 주의사항
// 객체 변경 시점 이전에 생성된 객체는
// 기존 프로토타입 객체만 바인딩 시킨다.

function person(name,gender){
    this.name = name;
}

var test4 = new person('test');

// 프로토타입 객체 변경
person.prototype = {gender : 'male'};

var test5 = new person('kim');
console.log(test4.gender);
console.log(test5.gender);
console.log(test4.const);
console.log(test4.gender);
