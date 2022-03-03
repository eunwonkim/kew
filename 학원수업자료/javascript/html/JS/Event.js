// function han1(){
//     alert('test');
// }
// function han2(){
//     alert("test12345");
// }

window.onload = function(){
// addEvertListener 메서드
// 대상 DOM요소에 이벤트를 바인딩하고 해당 이벤트 발생시
// 실행될 이벤트 핸들러를 지정,
// 이벤트타겟.addEventListener('이벤트타입', 함수, '캡처링 사용여부')


   //  document.querySelector('.btn').addEventListener('click', function(){
   //      alert('addEvertListener');
   //   });
   //   document.querySelector('.btn').addEventListener('click', function(){
   //      alert('10분있으면 집감 끼얏호');
   //   });

     const input = document.querySelector('input[type=text]');
     const msg = document.querySelector('.msg');
     // 규칙을 상수화 하여 함수의 인수를 전달되게 처리하거나
     // 상수화된 변수를 사용하여 코드의 에러를 최소화.
     const MIN_ID_LENGTH = 6;

      console.dir(input);
      
   //    input.addEventListener('blur', function(){
   //       // input 태그에 입력된 값을 기준으로 
   //       // 이벤트 제어.
   //       if(input.value.length < MIN_ID_LENGTH){
   //          msg.innerHTML = '이름은 6자 이상 입력해야합니다.'
   //       }else{
   //          // 입력하신 id는 ~ 입니다.
   //          msg.innerHTML = '입력하신 id는'+input.value +'입니다.'
   //       }

   //    });

   // 이벤트의 우회
   // 만약 사이트가 개편되서 규칙이 변경된다면?
   // 규칙을 일일히 수정해주기에는 편하지 않다
   // -> 사람은 누구나 실수를 할수 있기 떄문에 행여 실수가 발생하면
   //    코드 점검에 자원의 낭비가 발생.
   function chkUserIdLen(rule){
      if(input.ariaValueMax.length <rule){
          msg.innerHTML = '이름은 6자 이상 입력해야합니다.'
      }else{
               // 입력하신 id는 ~ 입니다.
            msg.innerHTML = '입력하신 id는'+input.value +'입니다.'
      }

   }

   input.addEventListener('blur', function(){
      chkUserIdLen(MIN_ID_LENGTH);
   });
 
   // 문제
   // event.html에 password와 confirm password를 추가했습니다.
   // 둘의 암호가 같다면 암호는 똑같습니다 라는 메세지를 출력.
   // 다르면 암호가 다르니 확인 바랍니다 라는 메세지를 출력.

   // 문제풀이
   const pw = document.querySelector('#pw');
   const conpw = document.querySelector('#conpw');

   conpw.addEventListener('blur', function(){
      if(pw.value == conpw.value){
         alert('패스워드가 일치합니다.') 
     }else{
              // 입력하신 id는 ~ 입니다.
              alert('패스워드가 불일치합니다.') 
     }
   });
 
   //이벤트 핸들러의 this
   // 인라인 이벤트 핸들러 방식은
   // 일반 함수로 호출되는 형식이기 떄문에
   // 이벤트 핸들러 내부의 this는 전역객체 중 회상위 window를 지칭
    function chkThis(){
    console.log(this);
}
   const property1 = document.querySelector('.property');
   const ael = document.querySelector('.ael');

   property1.onclick = function(evt){
      // 이벤트 핸들러는 메서드 이므로 
      // 이벤트 핸들러 내부의 this는 이벤트에 바인딩된 요소를 가리킨다.

      console.dir(this);
      console.log(evt.currentTarget);
      console.log(this === evt.currentTarget);
   }

   ael.addEventListener('click', function(){
      // addEventListener에 달려있는 함수는 콜백함수이다.
      // 이벤트 핸들러 내부의 this는 리스너에 바인딩된 요소를 가리킨다.
      console.log(this);
   })

   // 이벤트의 흐름
   // 계층적 구조에 포함되어 있는 HTML요소에
   // 이벤트 발생시 연쇄적 반응이 일어날수 있음
   // 이벤트의 전파 방향에 따라 버블링이나
   // 캡쳐링으로 구분할수 있음.

   // 버블링 : 자식요소에서 발생한 이벤트가 body까지 전파되는것
   // 캡쳐링 : 자식요소에서 발생한 이벤트가 부모요소부터
   // - 이벤트를 발생시킨 자식요소까지 도달하는것.
   // 캡처링으로 시작해서 버블링으로 종료

   // 화면 좌표 찍기.
   // Event 객체 : 이벤트를 발생시킨 요소와 발생한 이벤트에 대한 정보를 제공하는 객체
   // -> 이벤트 객체는 이벤트 발생시에 동적으로 생성.
   // -> 이벤트 객체는 이벤트를 처리하는 이벤트 핸들러


   function showcode(evt){
      const msg = document.querySelector('.msg');
      msg.innerHTML = 
         'X축 값 : ' + evt.clientX + '<br>' +
         'Y축 값 : ' + evt.clientY;
   }

   addEventListener('click', showcode);
}
