//DOM Query
window.onload = function(){
// const domTest = document.getElementById('one');

// // CSS 셀렉터를 사용해 요소노드를 선택하는 메서드
// const domTest2 = document.querySelector('li.test');

// // 받아온 요소에 부여된 클래스명을 변경.
// domTest.className = 'blue';
// domTest2.className = 'test2';

// console.log(domTest);
// console.log(domTest.__proto__);

//여러개의 요소노드 선택하기
// const domTest3 = document.getElementsByClassName('test');
// console.log(domTest3);
// for(let i = 0; i<domTest3.length; i++){
// //        domTest3[i].className = 'test2';
// //    domTest3.item(i).style.backgroundColor='aqua';
// }

// 제대로 동작하지 않은 이유
// 1. HTML은 실시간으로 노드의 상태 변경을 반영.
// 2. i가 0일때 domTest3의 첫요소 class 속성값이 background color 부여로
//    변경이 됨 -> 기존 class값 test는 제거.
// 3. i가 1일때 domTest3의 첫번째 요소는 제거

// 즉 html은 실시간으로 노드의 상태 변경을 반영하기떄문에
// loop가 필요하다면 주의해야한다.



// for(let i = 0; i<domTest3.length; i++){
//     domTest3[i].className = 'test2';
// }

// for(let i = domTest3.length-1; i>=0; i--){
//     domTest3[i].className = 'test2';
// }
// let i =0;
// while(domTest3.length > i){
//     domTest3[i].className = 'test2';
// }

// 
// const domTest4 = document.querySelectorAll('li.test');
// [... domTest4].forEach(domTest4 => domTest4.className = 'test2')

// DOM 탐색
// ParentNode : 부모 노드를 탐색.

// const domTest5 = document.querySelector('div');
// domTest5.parentNode.style.backgroundColor = 'red';

// firstChild, lastChild
// 자식노드 탐색

const domTest6 = document.querySelector('ul');

// first Child
// domTest6.firstChild.className = 'test2';
// // last Child
// domTest6.lastChild.className = 'test2';

// 위의 코드는 제대로 동작하지 않았음
// -> 대부분의 브라우저들이 요소 사이의 공백 또는 개행을 텍스트노드로
//    취급해서.

// 해결방안
// 1. 코드의 개행라인을 제거 -> html 코드 가독성 하락
// 2. jquery의 메서드 활용
// 3. firstElementChild, lastElementChild를 이용
domTest6.firstElementChild.className = 'test2';
domTest6.lastElementChild.className = 'test2';

//hasChildNodes()
// 자식노드가 있는지 확인하고 T or F 값을 리턴.
const domTest7 = document.querySelector('ul');
if (domTest7.hasChildNodes()){
    // childNodes
    // 텍스트 요소를 포함한 모든 자식요소를 리턴.
    console.log(domTest7.childNodes); //-> 배열 형태

    // children
    // 자식요소중 element 타입 요소만 리턴.
    console.log(domTest7.children);
}

// const domTest8 = document.querySelector('div');

// //previousSibling
// //console.log(domTest8.previousSibling);
// console.log(domTest8.nextSibling);

// 
// const one = document.getElementById('one');

//텍스트 노드 접근 및 수정
// const one = document.querySelector('#one');

// console.dir(one);

// console.log(one.nodeName); // LI
// console.log(one.nodeType); // 1 : 요소노드
// // 노드의 값을 리턴
// console.log(one.nodeValue);

// // firstchild 프로퍼티를 통한 텍스트 노드 탐색
// const textNode = one.firstChild;

// console.log(textNode);
// console.log(textNode.nodeName); 
// console.log(textNode.nodeType);
// console.log(textNode.nodeValue);

// textNode.nodeValue = "워싱턴";

// 속성 노드로 접근과 수정

//const heading1 = document.querySelector('h1');

//console.dir(heading1);
//console.log(heading1.firstChild.nodeValue);

// console.dir(heading1);
// heading1.id = 'heading';
// console.log(heading.id);

// const domtest10 = document.querySelectorAll('li');

// [... domtest10].forEach(domtest10 => {
//     if (domtest10.className =='test'){
//         domtest10.className = 'test2';
//     }
// });

// hasAttribute(attribute)
// 지정한 속성을 가지고 있는지 검사.
// getAttribute(attribute)
// 속성값 취득
// setAttribute(attribute, value)
// 속성과 속성값 설정.
// removeAttribute(attribute)
// 지정한 속성 제거.

const inputBox = document.querySelector('input[type=text]');
console.log(inputBox);


if (!inputBox.hasAttribute('value')){
    //value 속성을 추가하고 값으로 hello로 설정.
    inputBox.setAttribute('value', 'hello');
}
// value 속성값 가져오기
console.log(inputBox.getAttribute('value'));
// value 속성 제거
inputBox.removeAttribute('value');
// value 속성 존재확인
console.log(inputBox.hasAttribute('value'));


const ulTag = document.querySelector('ul');

console.log(ulTag.innerHTML);
//innerText : 요소의 텍스트 컨텐츠에 접근하는 프로퍼티
// -> 기존 스타일에 hidden 처리가되어있다면 텍스트값을 못받아온다.

//innerHTML : 해당 요소의 모든 자식요소를 포함하는 컨텐츠를
//            하나의 문자열로 취득 할수 있음. 

ulTag.innerHTML += '<li class="test2">여수</li>';

// DOM 조작방식
// -> DOM을 조작해서 한개의 요소를 추가하는 경우에 사용.

//1. 요소노드 생성 createElement() 메서드를 이용
//2. createTextNode() 메서드를 이용해서 새로운 텍스트노드 생성
//3. appendChild() 메서드를 사용해 생성된 노드를 추가.

//createElement
const newEl = document.createElement('li');
//textnode
const newtxt = document.createTextNode('세종');

newEl.appendChild(newtxt);
const container = document.querySelector('ul');
container.appendChild(newEl);

// 크로스 스크립팅 공격
const test3 = document.querySelector('body');

// 스크립트 태그를 추가해서 JS의 강제실행.
// innerHTML로 추가되는 코드들이 문제발생이 제기.
// 크롬 상위버전에서는 innerHTML을 통해 삽입된 js코드를 방어
test3.innerTHML = '<script>alert("test");</script>';

// test3.innerHTML = '<img sre="#" onerror="alert(\"test\")'

// xss 방어 방법
// 1. spring을 이용해서 xss에 대한 필터 생성.
// 2. xss 디펜딩 라이브러리 다운로드.



}

function change(){
    const t1 = document.querySelector('body');
    t1.style.backgroundColor = 'red';
}