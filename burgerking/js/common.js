/* 1. pc버전 서브메뉴 보이고 숨기기 */

// querySelector는 menu__main DOM 자체를 가져오는 것
const menu = document.querySelector('.menu__main');
// SelectAll은 DOM을 배열 형태로 가져온다
const subMenu = document.querySelectorAll('.list__drop');
const panel = document.querySelector('.header__panel');
const header = document.querySelector('.header');

// addEventListener(이벤트명, 이벤트가 실행됐을 때 발생할 동작-함수). 괄호 안에 든 것은 매개변수니까 매개변수로 함수를 넣을 수도 있다는 걸 알 수 있다.
// mouseover는 마우스를 가져다댔을 때
menu.addEventListener('mouseover', () => {
    panel.style.display = 'block';
    // forEach는 배열에 있는 값을 하나하나 불러오는 것
    subMenu.forEach(subMenu => { subMenu.style.display = 'block' });
});

// mouseout은 마우스를 뗐을 때
header.addEventListener('mouseout', () => {
    panel.style.display = 'none';
    subMenu.forEach(subMenu => { subMenu.style.display = 'none' });
});

/* 2. 모바일 버전 메뉴 보이고 숨기기 */

const Mhamburger = document.querySelector('.mobile.hamburger');
const Mclose = document.querySelector('.mobile.close');
const Mnav = document.querySelector('.header__Mnav');

Mhamburger.addEventListener('click', () => {
    Mnav.style.display = 'block';
});

Mclose.addEventListener('click', () => {
    Mnav.style.display = 'none';
});

/* resize 과부하 방지 코드
https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event */
// resize는 뷰포트 영역의 사이즈가 바뀐 것을 의미한다

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    // throttle은 조절을 의미. 자주 발생하는 이벤트로 인해 페이지에 과부하가 안 생기도록 이벤트를 바꿔주는 것
    throttle("resize", "optimizedResize");
})();

/* 3. width가 767px 이상일 때도 모바일 메뉴 보이는 것을 방지 */

window.addEventListener('optimizedResize', () => {
    let winWidth = window.innerWidth;

    if (winWidth >= 767) {
        Mnav.style.display = 'none';
    }
});

/* 4. 모바일 하위 메뉴 보이고 숨기기 */
/* getComputedStyle 사용 이유: https://stackoverflow.com/questions/39679753/javascript-document-getelementbyidel-style-display-returns-empty-string-but */

const showHide = e => {
    /* html에서 showHide 괄호 안에 this를 넣었기 때문에 매개변수 e라고 적었을 때 클릭한 li 태그가 콘솔에 찍히는 것.
    객체데이터 형태로 가져온다. 콘솔 찍어보면 이 안에 children이 있음. e가 불러온 li 태그의 자식 태그를 배열 형태로 있음 */
    const MListDrop = e.children[2];
    // getComputedStyle : css에서 지정해준 설정을 가져오는 것
    const displayAttr = window.getComputedStyle(MListDrop).display;

    if (displayAttr == 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
};