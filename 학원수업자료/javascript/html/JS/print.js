// document.write("어디에 출력될꼬!");
// alert("경고메세지!");
// console.log("test");


window.onload = function(){

// 아래의 코드는 위의 메서드 오버라이딩 없이는
// 에러가 발생한다
// 그 이유는 dom에 있는 html 요소들은 로딩이 안됐는데
// 해당 코드들을 찾고 있었기 때문에 NULL이 결과일수 밖에 없었음.
// 즉 위의 메서드를 호출하여 웹 브라우저의 모든 요소가 준비됐을때
// 아래의 코드를 실행하도록 처리.
    var test = document.getElementById("result");
    test.style.color = "red";

}


