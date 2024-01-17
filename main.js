//header 그림자추가
let scrollHeader = () => {
  let header = document.querySelector("#header");
  // pageYOffset >=50?A:B//조건문이 참이면 A실행 거짓이면B실행
  pageYOffset >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
  // console.log(`pageYOffset:${pageYOffset}`);
};

// function scrollHeader(){

// } 위랑같음

window.addEventListener("scroll", scrollHeader);
// window.addEventListener("scroll",()=>{})//위랑같음

//배경테마변경
let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-foggy-line";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
  // document.body.classList.contains(darkTheme) ==>
  // body가 class명 dark-theme을 가지고 있는가? true/false값을 뽑음
  //contains = 있냐없냐 true ? false ? 물어보는 삼항연산자
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};
let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme)
    ? "ri-moon-clear-fill"
    : "ri-sun-foggy-line";

  return result;
};

//웹 스토어에 값셋팅 :
// localStorage.setItem() --> 웹 스토어에 값을 입력
// localStorage.getItem() --> 웹 스토어의 값을 가져올때

themeButton.addEventListener("click", () => {
  /* toggle > 실행과 반실행 처음누를때 첫세팅한것으로 한번은 실행 한번은 반실행을 반복 말그대로 토글 */
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedTheme);

if (selectedTheme) {
  if (selectedTheme == "dark") {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  if (selectedIcon == "ri-moon-clear-fill") {
    themeButton.classList.add(iconTheme);
  } else {
    themeButton.classList.remove(iconTheme);
  }
}

let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/* 전체화면 애니메이션 */
ScrollReveal().reveal(
  ".home_data, .home_img, .about_data, .about_img, .popular_card, .recently_data, .recently_img, .home_leaf-1, .recently_leaf-1, .home_leaf-2, .about_leaf, .recently_leaf-2, .footer_description, .footer_content, .footer_info",
  {
    delay: 400,
    duration: 2500,
    origin: "top",
    distance: "60px",
    reset: true, //false
  }
);

ScrollReveal().reveal(".home_data", {
  origin: "bottom",
});

ScrollReveal().reveal(
  ".about_data, .recently_data, .home_leaf-1, .recently_leaf-1",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".about_img, .recently_img, .home_leaf-2, .about_leaf, .recently_leaf-2",
  {
    origin: "right",
  }
);
ScrollReveal().reveal(".popular_card", {
  origin: "top",
  interval: 400,
});

/* scrollup */
let scrollup = () => {
  let scrollup = document.getElementById("scroll-up");
  //pageYOffset>=350? 밑과같다
  scrollY>=350?
  scrollup.classList.add('show-scroll')
  :scrollup.classList.remove('show-scroll')
};

window.addEventListener("scroll", scrollup);

//menu
let scrollActive=()=>{
    // let scrollY=pageYOffset
    let scrollY=pageYOffset

    let sections=document.querySelectorAll('section[id]');//section 태그들을 가져오는데 속성중 id가 있는 section들을 가져와라
    // console.log(sections)
    sections.forEach((current)=>{
        let sectionHeight=current.offsetHeight; //현재 불러온 item인 section의 높이값
        let sectionTop = current.offsetTop - 60; // 현재 불러온 item의 머리인 top인 화면의 top인위치

        let sectionId=current.getAttribute('id')
        // console.log(sectionId)

        let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
        //a[href*="home"] --> home이 포함되어있는것
        // console.log(sectionClass)

        if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
        // console.log(`sectionTop:${sectionTop}`)
    })
}
window.addEventListener("scroll",scrollActive)