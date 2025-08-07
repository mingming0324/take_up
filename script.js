gsap.registerPlugin(ScrollTrigger);

// sec-1 overview 텍스트 애니메이션
// GSAP 타임라인 생성: 모든 애니메이션에 기본적으로 ease를 "power4.out"으로 설정
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