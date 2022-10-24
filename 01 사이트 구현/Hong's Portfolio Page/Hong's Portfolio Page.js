function menuToggle(){
    document.querySelector('.nav-menu').classList.toggle('show');
}
document.querySelector('.head-icon').addEventListener('click', menuToggle);

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
}

/******************** body > section >imageslide ********************/
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

/******************** About이랑 Service는 js 없음 ********************/

/******************** body > section > PORTFOLIO AREA ********************/
/* filter 메뉴에서 all 부분 클릭되게 해서 내용 보이게 하는 함수 */
filterSelection('all');

function filterSelection(id) {
    let a = document.querySelectorAll('.listItem');
    for(i=0; i<a.length; i++){
        /* removeClass(a[i], 'active'); */
        /* removeClass() 되지 않음 추후 탐구 및 정리, jquery 문법이라서 그런것인가 */
        a[i].classList.remove('active');
    } 
    /* addClass(document.getElementById(id), ' active'); */
    document.getElementById(id).classList.add("active");

    a = document.querySelectorAll('.filterItem');
    if(id == 'all') { id='' };
    for(i=0; i<a.length; i++){
        /* removeClass(a[i], 'show'); */
        /* removeClass() 되지 않음 추후 탐구 및 정리, jquery 문법이라서 그런것인가 */
        a[i].classList.remove('show');

        if(a[i].className.indexOf(id) > -1){ /* indexOf(공백)은 0을 리턴함 */
            console.log(a[i].className.indexOf(id));
            addClass(a[i], ' show');
        }
    }
}

function addClass(element, name){
    if(element.className.indexOf(name) == -1){
        element.className += '' + name;
    }
}

function removeClass(element, name){
    let arr;
    arr = element.className.split('');

    while(arr.indexOf(name) > -1){
        arr.splice(arr.indexOf(name), 1);
    }

    element.className = arr.join('');
}

/* filter 메뉴 클릭시 filter item 보이게 하는 함수 */
document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('webfunc').addEventListener('click', filterSelection.bind(null, 'webfunc'));
document.getElementById('website').addEventListener('click', filterSelection.bind(null, 'website'));
/* document.getElementById('etc').addEventListener('click', filterSelection.bind(null, 'etc')); */

/* modal페이지 관련 함수 */
function viewPortfolio(event){
    let polyNode = event.target;
    /* 1. event는 함수 호출시 이벤트 발생시 호출되는 함수에 자동으로 전달되는 데이터를 저장하는 변수. 2. target은 이벤트가 발생한 태그를 의미. 3. event.target 객체의 target 속성에 접근하겠다는 의미. 3. querySelector와 같은 효과. */
    
    console.log(polyNode);
    
    /* polyNode는 클릭 이벤트가 발생한 태그를 나타낸다. */

    if(polyNode.tagName.toLowerCase() == 'i'){
        polyNode = polyNode.parentNode;
    }
    /* i태그를 클릭해도 부모태그인 overay가 선택되게 하는 코드 */

    let overayNode = polyNode;
    let imageNode = overayNode.nextElementSibling;
    /* overay의 바로 옆 형제 태그 사용시 nextElementSibling 사용 
       imageNode에는 overay의 바로 옆 형제 태그인 img 태그 선택 */

    let itemNode = overayNode.parentNode;
    /* img태그의 부모태그인 portfolioImage 선택 */
    let mainNode = itemNode.nextElementSibling;
    /* portfolioImage의 바로 옆 형제 태그인 main 선택 */
    let subNode = mainNode.nextElementSibling;
    /* main의 바로 옆 형제 태그인 sub 선택 */
    let textNode = subNode.nextElementSibling;
    /* sub의 바로 옆 형제 태그인 text 선택 */

    console.log(imageNode);
    console.log(imageNode.src);
    /* 위의 선택한 태그들 제대로 설정됐는지 콘솔로 확인하기. */
    
    let goto = document.getElementById('modalImage').src = imageNode.src;
    document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
    document.getElementById('modalSub').innerHTML = subNode.innerHTML;
    document.getElementById('modalText').innerHTML = textNode.innerHTML;

    document.getElementById('portfolioModal').style.display = 'block';

    /* modalImage 클릭시 해당 페이지로 이동 */
    document.getElementById('modalImage').addEventListener('click', () => {
        /* console.log(goto.slice(-5, -4))
        if(goto.slice(-5, -4) == 1){
            location.href = "01 대한민국 지역 정보 검색기(keyCode의 활용)/00 keyCode의 활용.html"
        } */
        let gotoTemp = goto.match('portfolioImage01')
        if(gotoTemp[0] == 'portfolioImage01'){
            location.href = "01 대한민국 지역 정보 검색기(keyCode의 활용)/01 대한민국 지역 정보 검색기(keyCode의 활용).html"
        }
    })
    document.getElementById('modalImage').addEventListener('click', () => {
        /* console.log(goto.slice(-5, -4))
        if(goto.slice(-5, -4) == 2){
            location.href = "02 Image Slide/Image Slide.html"
        } */
        let gotoTemp = goto.match('portfolioImage02')
        if(gotoTemp[0] == 'portfolioImage02'){
            location.href = "02 Image Slide/Image Slide 02.html"
        }
    })
    document.getElementById('modalImage').addEventListener('click', () => {
        /* console.log(goto.slice(-5, -4))
        if(goto.slice(-5, -4) == 3){
            location.href = "Hong's Portfolio Page.html"
        } */
        let gotoTemp = goto.match('portfolioImage03')
        if(gotoTemp[0] == 'portfolioImage03'){
            location.href = "Hong's Portfolio Page.html"
        }
    })
    /* document.getElementById('modalImage').addEventListener('click', () => { */
        /* console.log(goto.slice(-5, -4))
        if(goto.slice(-5, -4) == 3){
            location.href = "Hong's Portfolio Page.html"
        } */
        /* let gotoTemp = goto.match('portfolioImage04')
        if(gotoTemp[0] == 'portfolioImage04'){
            location.href = "https://github.com/threehHong"
        }
    }) */
    
}

document.getElementById('modalClose').addEventListener('click', function(){
    document.getElementById('portfolioModal').style.display = 'none';
})
/* modal 페이지의 x를 클릭했을 때 모달페이지를 닫는 코드 */

let filterItems = document.getElementsByClassName('overlay');
for(i=0; i<filterItems.length; i++){
    filterItems[i].addEventListener('click', viewPortfolio);
} 
/* overay 클릭시 viewPortfolio 함수 실행, 참고로 overay는 image 영역 크기랑 똑같음. */


/******************** body > section > ETC ********************/
let reviewSlideIndex = 0;

/* 이미지 3초마다 자동 전환 코드 */
function reviewSlideTimer() {
    plusReviewSlides(1);
}
let reviewTimer = setInterval(reviewSlideTimer, 3000);

/* stop버튼 클릭시 이미지 자동 전환 멈춤 */
function reviewTimerStop() {
    clearInterval(reviewTimer);
}

function plusReviewSlides(n) {
    /* 클릭 이벤트와 셋인터벌에 따른 매끄럽지 않은 이미지 전환 방지 코드 */
    clearInterval(reviewTimer);
    reviewTimer = setInterval(reviewSlideTimer, 3000);

    /* 이미지 전환 함수 호출 */
    showReviewSlides(reviewSlideIndex += n);
}

function showReviewSlides(n) {
    let review_slides = document.getElementsByClassName('etc-slide');

    if(n > review_slides.length - 3) {
        reviewSlideIndex = 0;
    }

    if(n < 0) {
        reviewSlideIndex = review_slides.length - 3;
    }

    for(i = 0; i < review_slides.length; i++) {
        /* removeClass(review_slides[i], 'show');
        removeClass(review_slides[i], 'hide'); */

        review_slides[i].classList.remove('show');
        review_slides[i].classList.remove('hide');
        
        addClass(review_slides[i], ' hide');
    }

    /* removeClass(review_slides[reviewSlideIndex], 'hide'); */
    review_slides[reviewSlideIndex].classList.remove('hide');
    addClass(review_slides[reviewSlideIndex], ' res-show');
    
    /* removeClass(review_slides[reviewSlideInde+1], 'hide'); */
    review_slides[reviewSlideIndex+1].classList.remove('hide');
    addClass(review_slides[reviewSlideIndex+1], ' show');
    
    /* removeClass(review_slides[reviewSlideInde+2], 'hide'); */
    review_slides[reviewSlideIndex+2].classList.remove('hide');
    addClass(review_slides[reviewSlideIndex+2], ' show');
    
}

document.getElementById('etcPrev').addEventListener('click', plusReviewSlides.bind(null, -1));
document.getElementById('etcNext').addEventListener('click', plusReviewSlides.bind(null, 1));
document.querySelector('.stop').addEventListener('click', reviewTimerStop);

/******************** navbar anchor ********************/
/* 네비게이션 메뉴를 클릭했을 때, 그에 대응하는 영역으로 스크롤을 옮겨주는 코드 */
function moveTo(id) {
    if(id == 'brand') {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.getElementById(id).offsetTop);
    }

    document.getElementById('menu').classList.remove('show');
    /* scrollTo를 통해 해당 영역으로 이동시 width 1029 이하 일 때 등장하는 메뉴 사라지게 하는 코드 */
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
document.getElementById('navbarIntroduce').addEventListener('click', moveTo.bind(null, 'introduce'));
document.getElementById('navbarCareer').addEventListener('click', moveTo.bind(null, 'career'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
document.getElementById('navbarEtc').addEventListener('click', moveTo.bind(null, 'etc'));