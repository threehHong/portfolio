window.addEventListener("DOMContentLoaded", imageFn);

function imageFn(){

    console.log('로딩 완료');

    let prevArrow = document.querySelector('.prev-arrow');
    let nextArrow = document.querySelector('.next-arrow');
    let slide = document.querySelector('.slide');

    prevArrow.onclick = () => {
    
        console.log('왼쪽 버튼 클릭');

        let li = slide.querySelectorAll('.img');
        
        // 맨뒤요소 맨앞 이동 : insertBefore(넣을놈, 넣을놈전놈);
        slide.insertBefore(li[li.length-1], li[0]);

        /* slide.style.left = '-100%'; */

        slide.style.left = '0';

        setTimeout(() => {
            slide.appendChild(slide.querySelectorAll('.img'[0]));
        }, 300);
        
    }

    nextArrow.onclick = () => {

        console.log('오른쪽 버튼 클릭');

        slide.style.left = '-100%';

        slide.style.left = '0';
        
        /* slide.style.transition = 'left .4s ease-in-out' */

        setTimeout(() => {
            slide.appendChild(slide.querySelectorAll('.img')[0]);
        }, 300);

    }

};

