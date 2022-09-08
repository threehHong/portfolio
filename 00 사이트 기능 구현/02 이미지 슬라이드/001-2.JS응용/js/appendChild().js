window.addEventListener("DOMContentLoaded", loadFn);

function loadFn(){

    console.log('로딩 완료');
    
    let abtn = document.querySelectorAll('.abtn');
    let slide = document.querySelector('#slide');

    // appendChild() 예시 코드
    let p = document.querySelector('.a');
    let div = document.querySelector('.b');

    abtn[1].onclick = () => {

        console.log('오른쪽 버튼 클릭')

        slide.style.left = '-100%'; 
        // -는 왼쪽 방향을 의미(x축에서 음수 방향).
        // % 추후 탐구 및 정리.
        slide.style.transition = 'left .4s ease-in-out';
        // .은 0 대신 사용.

        setTimeout(()=>{
            // 맨 앞 요소 맨뒤 이동
            slide.appendChild(slide.querySelectorAll('li')[0]);
        
             // appendChild() 예시 코드
            div.appendChild(p);

          
        }, 400)
    }
}

/* 

1.
appendChild();
DOM(개발자 도구>요소) 내 태그에 자식 태그를 ㅁ추가하는 메소드

DOM 내부에서 A라는 태그를 다른 B태그의 자식 태그로 추가하면 A라는 태그는 B태그의 하위 태그로 이동된다(기존에 A태그가 있던 위치에 A태그는 존재하지 않고 B태그의 하위 태그로 존재한다). 

2.
07GREEN / 001-2.JS응용 / js / appendChild().js 
07GREEN / 001-2.JS응용 / appendChild().html 
파일 참고

*/

