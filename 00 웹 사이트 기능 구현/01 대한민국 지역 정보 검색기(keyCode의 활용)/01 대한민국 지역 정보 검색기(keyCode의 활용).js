function local(event) {
    
    if(event.keyCode === 13) {
        // 1. 호출 확인(콘솔).
        console.log("지역 안내 함수 실행")
        // 2. input 태그 불러오기.
        let local = document.querySelector(".local");
        // 3. input 태그에 입력된 데이터 저장 및 input 태그에 입력한 내용 지우기.
        let localName = local.value;
        local.value = "";
        // 4.입력된 지역명 확인(콘솔) .
        console.log(`지역명 : ${localName}`);
        // 5. h2 태그 불러오기.
        let info = document.querySelector(".info");
        let info1;
        // 6. div 태그 불러오기.
        let im = document.querySelector(".im");
        let img = document.querySelector(".img");
        let exp = document.querySelector(".exp");

        //  7. 입력된 데이터와 일치하는 데이터 출력(switch문).
        switch(localName){
            case "서울": 
            info1 = "02";
            img.style.backgroundImage ="url('./images/서울.jpg')"; 
            exp.innerText = "대한민국의 수도인 서울을 지방자치단체인 특별시로 부르는 명칭이다. 한반도 중앙에 있으며, 한강을 사이에 두고 남북으로 펼쳐져 있다. 북쪽 끝은 도봉구 도봉동, 동쪽 끝은 강동구 상일동, 남쪽 끝은 서초구 원지동, 서쪽 끝은 강서구 오곡동이다. 시청은 중구 을지로1가(태평로1가 31)에 있다."; 
            img.style.transform = "scale(0.9)"; 
            img.style.width = "1000px";
            img.style.height = "566px";
            exp.style.width = "1000px"
            exp.style.height = "90px"
            break;

            case "경기": 
            info1 = "031"; 
            img.style.backgroundImage ="url('./images/경기.jpg')"; 
            exp.innerText = "북쪽은 황해도, 동쪽은 강원도, 남쪽은 충청남도와 접해 있고, 서쪽은 황해에 면해 있으며, 중앙에 서울특별시와 인천광역시가 있다. 동경 126°~127°, 북위 36°~38°에 위치한다. 연장거리는 동서간 양평군 청운면 도원리에서 안산시 풍도동(풍도)까지 130.0km, 남북간 안성시 서운면 청룡리에서 연천군 신서면 도밀리까지 155.4km이다.";
            img.style.transform = "scale(0.7)";
            img.style.width = "1280px";
            img.style.height = "720px";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "인천": 
            info1 = "032"; 
            img.style.backgroundImage ="url('./images/인천.jpg')"; 
            exp.innerText = "동경 124°36′~ 126°47′, 북위 36°55′~ 37°58′에 있다. 동서거리 192.23km, 남북거리 117.60km에 달한다. 북쪽으로 개풍군·황해도 연백군, 동쪽으로 서울특별시·김포시·부천시·시흥시·안산시, 남쪽으로 충청남도 서산시에 접하고, 서쪽으로 서해에 면한다. 2014년 현재 가구수는 113만 6,280가구이며, 행정구역은 8구 2군 1읍 19면 129개동으로 이루어져 있다. 시청은 남동구 구월동에 있다.";
            img.style.width = "1600px";
            img.style.height = "1066px";
            img.style.transform = "scale(0.5)"; 
            exp.style.width = "1100px";
            exp.style.height = "100px";
            break;

            case "부산": 
            info1 = "051"; 
            img.style.backgroundImage ="url('./images/부산.jpg')"; 
            exp.innerText = "대한민국 제2의 도시이자, 제1의 무역항이다. 동쪽과 남쪽은 바다에 면하고, 서쪽은 김해시 장유동과 창원시 진해구, 북쪽은 양산시 물금읍과 김해시 대동면, 동쪽은 울산광역시 서생면·온양읍에 접한다. 대한민국 남동단의 관문으로 서울특별시에서 남동쪽으로 약 450km, 대한해협을 끼고 일본 시모노세키[下關]와 약 250km 떨어져 있다. 1군 15구로 이루어져 있으며, 면적은 765.94㎢이다. 시청 소재지는 부산광역시 연제구 연산5동 1000번지이다.";
            img.style.width = "800px";
            img.style.height = "520px";
            img.style.transform = "scale(1)";
            exp.style.width = "1100px";
            exp.style.height = "100px";
            break;

            case "대구": 
            info1 = "053"; 
            img.style.backgroundImage ="url('./images/대구.webp')";
            exp.innerText = "북쪽으로 경상북도 칠곡군·군위군, 동쪽으로 경상북도 경산시·청도군, 남쪽으로 경상남도 창녕군, 서쪽으로 경상북도 고령군·성주군과 접한다. 영남지방의 중앙에서 서쪽으로 치우친 대구분지의 중앙부, 낙동강(洛東江)과 금호강(琴湖江)의 합류지점 동쪽 금호강 연안에 있다.";
            img.style.width = "800px";
            img.style.height = "533px";
            img.style.transform = "scale(1)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "광주": 
            info1 = "062"; 
            img.style.backgroundImage ="url('./images/광주.jpg')"; 
            exp.innerText = "북동쪽으로 담양군, 북쪽으로 장성군, 서쪽으로 함평군, 남쪽으로 나주시, 남동쪽으로 화순군에 접한다. 서울·부산·대구·인천·대전에 이어 국내 제6위를 차지하는 대도시이며, 호남지방 최대의 도시이다. 2011년 현재 행정구분은 5개 자치구, 93개 행정동으로 이루어져 있으며, 시청 소재지는 광주시 서구 내방로 111이다.";
            img.style.width = "1280px";
            img.style.height = "720px";
            img.style.transform = "scale(0.69)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "전북": 
            info1 = "063"; 
            img.style.backgroundImage ="url('./images/전북.jpg')"; 
            exp.innerText = "동경 125°58′~ 127°54′, 북위 35°18′~ 36°09′에 있다. 동쪽은 경상남도 산청군과 거창군, 경상북도의 김천과 소백산맥의 주 능선으로 경계를 이루고, 남쪽은 전라남도의 영광·장성·담양·곡성·구례군과 접해 있으며, 북쪽은 충청남도의 금산·논산·부여·서천군, 충청북도의 영동군과 접하고, 서쪽으로는 황해에 면한다.";
            img.style.width = "800px";
            img.style.height = "533px";
            img.style.transform = "scale(1)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "전남": 
            info1 = "061"; 
            img.style.backgroundImage ="url('./images/전남.jpg')"; 
            exp.innerText = "동경 125°04′~ 127°54′, 북위 33°54′~ 35°30′에 있다. 동쪽으로 섬진강과 소백산맥을 경계로 경상남도에 접하며, 서쪽으로 황해를 건너 멀리 중국과 마주보고 있다. 남쪽으로는 다도해와 제주해협을 건너 제주도와 마주보며, 북쪽으로는 노령산맥을 경계로 전라북도와 접한다. 남북 길이는 175.9km, 동서 길이는 도서지역을 합쳐 262.8 km에 이른다.";      
            img.style.width = "710px";
            img.style.height = "472px";    
            img.style.transform = "scale(1.1)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "경북": 
            info1 = "054"; 
            img.style.backgroundImage ="url('./images/경북.jpg')"; 
            exp.innerText = "동쪽으로 동해에 면하고, 서쪽으로 충청북도·전라북도, 북쪽으로 강원도·충청북도, 남쪽으로 대구광역시·경상남도에 접한다. 태백산맥·소백산맥과 그 지맥, 동해로 주변지역과 경계를 이루며, 전국에서 가장 원형에 가까운 형상을 취하고 있어, 하나의 행정구역인 동시에 전형적인 지리구(地理區)를 형성하고 있다.";
            img.style.width = "640px";
            img.style.height = "427px";    
            img.style.transform = "scale(1.2)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "경남": 
            info1 = "055"; 
            img.style.backgroundImage ="url('./images/경남.PNG')"; 
            exp.innerText = "동쪽으로는 울산광역시, 남쪽으로는 부산광역시와 남해, 서쪽으로는 전라북도와 전라남도, 북쪽으로는 대구광역시와 경상북도에 접해 있다. 동서 252km, 남북 200km의 연장거리를 가지며, 북위 34°29′~35°54′, 동경 127°35′~129°13′에 있다.";
            img.style.width = "600px";
            img.style.height = "400px";
            img.style.transform = "scale(1.3)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "세종": 
            info1 = "044"; 
            img.style.backgroundImage ="url('./images/세종.jpg')"; 
            exp.innerText = "동쪽은 충청북도 청주시, 서쪽은 충청남도 공주시, 남쪽은 대전광역시, 북쪽은 충청남도 천안시와 경계를 이룬다. 2010년 12월 27일에 공포된 '세종시 설치 등에 관한 특별법'에 따라 종전의 충청남도 연기군 전역과 공주시(의당면·장기면·반포면)의 일부 그리고 충청북도 청원군(부용면)의 일부를 흡수하여 2012년 7월 1일에 17번째 광역자치단체로 공식 출범하였다. 정부직할 특별자치시이며, 시·군·구 등의 기초자치 단체를 두지 않는 '단층제' 자치단체이다.";
            img.style.width = "1280px";
            img.style.height = "699px";
            img.style.transform = "scale(0.75)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "울산": 
            info1 = "052"; 
            img.style.backgroundImage ="url('./images/울산.jpg')"; 
            exp.innerText = "동경 129˚15´~129˚27´, 북위 35˚27´~35˚36´에 있다. 동쪽은 동해에 면하며, 서쪽은 경북 청도군과 밀양시·양산시, 남쪽은 부산 기장군, 북쪽은 경북 경주시와 접한다. 한국에서 가장 대표적인 공업도시다. 행정구역은 1군 4구 4읍 8면 44개 동으로 이루어져 있다.";
            img.style.width = "600px";
            img.style.height = "579px";
            img.style.transform = "scale(0.9)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "대전": 
            info1 = "042"; 
            img.style.backgroundImage ="url('./images/대전.jpg')"; 
            exp.innerText = "동경 127°14'~127°33', 북위 36°10'~36°29'에 있다. 동쪽으로 충청북도 보은군·옥천군, 북쪽으로 충청북도 청주시, 세종특별자치시, 남쪽으로 충청남도 금산군, 서쪽으로 충청남도 논산시·공주시에 접한다.";
            img.style.width = "1276px";
            img.style.height = "556px";
            img.style.transform = "scale(0.9)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "충북": 
            info1 = "043"; 
            img.style.backgroundImage ="url('./images/충북.jpg')"; 
            exp.innerText = "동쪽으로 경상북도, 서쪽으로 경기도와 충청남도, 북쪽으로 강원도, 남쪽으로 전라북도와 접한다. 도를 상징하는 꽃은 백목련, 나무는 느티나무, 새는 까치이다.";
            img.style.width = "600px";
            img.style.height = "400px";
            img.style.transform = "scale(1.2)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "충남": 
            info1 = "041"; 
            img.style.backgroundImage ="url('./images/충남.jpg')"; 
            exp.innerText = "북쪽으로 경기도, 동쪽으로 대전광역시·충청북도, 남쪽으로 전라북도와 접하고, 서쪽은 황해에 면하고 있다. 도를 상징하는 꽃은 국화이고, 나무는 능수버들, 새는 원앙이다.";
            img.style.width = "1024px";
            img.style.height = "682px";
            img.style.transform = "scale(0.75)";
            exp.style.width = "1000px";
            exp.style.height = "90px";
            break;

            case "제주": 
            info1 = "064"; 
            img.style.backgroundImage ="url('./images/제주.jpg')"; 
            exp.innerText = "한국·중국·일본 등 극동 지역의 중앙부에 있어 지정학적으로도 중요하며, 도 전체가 바다로 둘러싸였다. 수리적(數理的)으로는 동경 126°08'∼126°58', 북위 33°06'∼34°00'에 위치한다. 북단은 북위 34°00'의 제주시 추자면 대서리이며, 남단은 북위 33°06'의 서귀포시 대정읍 마라도다. 한국 최남단에 있는 도로서, 제주도를 포함해 9개의 유인도와 55개의 무인도로 이루어졌다. 이 가운데 유인도는 우도·상추자도·하추자도·비양도·횡간도·추포도·가파도·마라도이다. 남북 간의 거리가 약 31㎞, 동서간의 거리가 약 73㎞로 동서로 가로놓인 모양이다. 러시아·중국 등의 대륙과 일본·동남아 등지를 연결하는 요충지이며, 천혜의 자연경관이 수려한 세계적인 휴양관광지다.";
            img.style.width = "1000px";
            img.style.height = "668px";
            img.style.transform = "scale(0.8)";
            exp.style.width = "1500px";
            exp.style.height = "100px";
            break;

            default: info1 = "esc";
        }
        
        // 8. localName의 데이터와 기존 데이터와의 일치 여부 파악 후 info1 변수에 출력할 내용 저장.
        if(info1 === "esc"){ // default: info ="esc";이므로 localName과 일치하는 데이터가 없으면 info1에 esc가 저장되고
                            // info01 === "esc" 참일 경우 info1 = "등록되지 않은 지역입니다";가 실행된다. 
            info1 = "등록되지 않은 지역입니다";
        } else{
            info1 = localName;
        } // info1 = `${localName}의 지역번호는 ${info1}입니다`

        // 9. h1(.info) 태그에 등록되지 않은 지엽입니다 or localName 출력.
        info.innerText = info1;

    }
}

document.querySelector('.btn').addEventListener('click', local);
document.querySelector('.local').addEventListener('keypress', local);
