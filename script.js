gsap.registerPlugin(ScrollTrigger);
AOS.init({
  once: true // 스크롤 할 때 애니메이션을 한 번만 실행
});
// sec-1 overview 텍스트 애니메이션
// GSAP 타임라인 생성: 모든 애니메이션에 기본적으로 ease를 "power4.out"으로 설정

// 메인 애니메이션
let main = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",       
    start: "top 88%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

main.to(".create_0", {
  onComplete: () => {
    // 여기서 .slideInUp 클래스 추가
    const items = document.querySelectorAll(".create_0");

    items.forEach(el => {
      el.classList.add("animate__fadeInLeft"); // 👈 애니메이션 실행됨!
    });
  }
});
main.to(".create_4", {
  y: '0%',          
  duration: 1.2,    
  stagger: 0.2,    
  opacity: 1     
}, "+=.7");


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-1",         // 이 섹션이 화면에 등장하면 애니메이션 시작
    start: "top 85%",          // 섹션의 'top'이 브라우저의 75% 지점에 닿을 때
    toggleActions: "play none none none" ,
    // └ 스크롤 방향과 관계없이 1번만 재생
    // markers: true // 화면에 start/end 위치 보이게 함
  },
  
  defaults: {
    ease: "power4.out" // 애니메이션 속도 곡선: 느리게 시작 → 빠르게 → 부드럽게 감속
  }

  
});
// .create 클래스를 가진 모든 요소에 애니메이션 적용
tl.to(".create", {
  y: '0%',           // 요소를 Y축으로 0% 위치(원래 자리)까지 이동 (초기에는 translateY(100%) 상태여야 함)
  duration: 1.2,     // 각 요소의 애니메이션 지속 시간: 1.2초
  stagger: 0.2,      // 각 요소의 애니메이션을 0.2초 간격으로 순차 실행
  opacity: 1         // 불투명도를 1로 설정 (초기값은 opacity: 0 이어야 자연스러움)
});



// sec-3 desk-re 텍스트 애니메이션
let tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-3",       
    start: "top 60%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});
tl_2.to(".create_1", {
  y: '0%',          
  duration: 1.2,    
  stagger: 0.2,    
  opacity: 1     
});

tl_2.to(".create_2", {
  y: '0%',         
  duration: 2,   
  stagger: .5,    
  opacity: 1       
}, "-=.2");

tl_2.to(".create_3", {
  y: '0%',         
  duration: 1.2,   
  opacity: 1      
}, "-=1");

tl_2.to(".create_3", {
  onComplete: () => {
    // 여기서 .zoom-in 클래스 추가!
    const items = document.querySelectorAll(".span");

    items.forEach(el => {
      el.classList.add("animate__zoomIn"); // 👈 애니메이션 실행됨!
    });
  }
}, "-=1");

// 유저리서치 애니메이션
let tl_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-4",       
    start: "top 60%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_3.to(".create_4", {
  y: '0%',          
  duration: 1.2,    
  stagger: 0.2,    
  opacity: 1     
});


// 페르소나 애니메이션
let tl_4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-5",       
    start: "top 60%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_4.to(".create_5", {
  onComplete: () => {
    // 여기서 .slideInUp 클래스 추가
    const items = document.querySelectorAll(".perso_content-item");

    items.forEach(el => {
      el.classList.add("animate__slideInUp"); // 👈 애니메이션 실행됨!
    });
  }
});

// dot 개별 이동
tl_4.to(".perso_content-item li:nth-child(1) .skill:nth-child(1) .dot", {
  left: "70%", // 1번 dot 목표 위치
  duration: .9
}, "+=.5") 

tl_4.to(".perso_content-item li:nth-child(1) .skill:nth-child(2) .dot", {
  left: "80%", // 2번 dot 목표 위치
  duration: .9
}) 

tl_4.to(".perso_content-item li:nth-child(2) .skill:nth-child(1) .dot", {
  left: "70%", // 3번 dot 목표 위치
  duration: .9
}) 

tl_4.to(".perso_content-item li:nth-child(2) .skill:nth-child(2) .dot", {
  left: "60%", // 4번 dot 목표 위치
  duration: .9
});

