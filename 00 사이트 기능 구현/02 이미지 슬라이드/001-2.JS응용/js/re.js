window.addEventListener("DOMContentLoaded", loadFn);

function loadFn(){

    console.log('로딩 완료');
    
    let abtn = document.querySelectorAll('.abtn');
    let slide = document.querySelector('#slide');

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
        
          
        }, 400)
    }
}