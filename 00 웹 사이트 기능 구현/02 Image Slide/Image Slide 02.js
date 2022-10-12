let imageSlideIndex = 1;
showImageSlides(imageSlideIndex);

/* 이미지 자동 넘김 */
function imageSlideTimer(){
    plusImageSlides(1);
}
let imageTimer = setInterval(imageSlideTimer, 3000);


function plusImageSlides(n){
    /* imageTimer 함수 초기화 및 재시작 */
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    /* showImageSlides 함수 실행 괄호안에 n값 전달 */
    showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n){
     /* imageTimer 함수 초기화 및 재시작 */
     clearInterval(imageTimer);
     imageTimer = setInterval(imageSlideTimer, 3000);
 
    /* showImageSlides 함수 실행 괄호안에 n값 전달 */
    showImageSlides(imageSlideIndex = n)
}

function showImageSlides(n){
    let slides = document.getElementsByClassName('image');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length) { imageSlideIndex = 1 };
    if(n < 1) { imageSlideIndex = slides.length };
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    slides[imageSlideIndex - 1].style.display = "block";
    dots[imageSlideIndex - 1].className += ' active';
}

/* 버튼 클릭시 이미지 전환 */
document.querySelector('.prev-arrow').addEventListener('click', plusImageSlides.bind(null, -1));
document.querySelector('.next-arrow').addEventListener('click', plusImageSlides.bind(null, 1));

/* 블릿 버튼 눌렀을 때 이미지 전환 */
let dot = document.querySelectorAll(".dot");
dot[0].addEventListener('click', currentImageSlide.bind(null, 1));
dot[1].addEventListener('click', currentImageSlide.bind(null, 2));
dot[2].addEventListener('click', currentImageSlide.bind(null, 3)); 
dot[3].addEventListener('click', currentImageSlide.bind(null, 4));