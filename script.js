gsap.registerPlugin(ScrollTrigger);
AOS.init({
  once: true // 스크롤 할 때 애니메이션을 한 번만 실행
});

// main 메인 애니메이션
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

main.to(".create_16", {
  duration: 1.2,      
  opacity: 1     
}, "+=1");

main.to(".create_17", {
  x: '0%',          
  duration: 1.2,    
  stagger: 0.2,    
  opacity: 1     
}, "-=.7");


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

// sec-2 background 애니메이션
let alreadyPlayed = false; 
const videos = document.querySelectorAll(".sec-2 video"); 

let tl_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-2",       
    start: "top 15%",      
    toggleActions: "play none none none" ,     
    // markers: true,
    onEnter: () => {   // ScrollTrigger가 ".sec-2" 섹션에 진입했을 때 실행되는 함수
      if (alreadyPlayed) return;  // 이미 재생한 적이 있으면 함수 종료 → 여러 번 재생되지 않게 막음
      alreadyPlayed = true;    // 처음 진입했음을 기록 → 이후엔 다시 실행되지 않도록 설정

      videos.forEach(v => {  // .sec-2 안의 모든 <video> 요소를 하나씩 순회
        v.currentTime = 0;  // 비디오 시작 위치를 항상 0초(처음)으로 맞춤
        v.muted = true;     // 모바일/브라우저 자동재생 정책 때문에 무음으로 설정해야 재생됨
    
        v.play().catch(err => {    // video.play() 실행 → 실패할 경우(브라우저 정책 등) 에러를 잡음
          console.log("재생 실패:", err);   // 실패 이유를 콘솔에 출력 (디버깅 용도)
        });
      });
    }
}
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
      el.classList.add("animate__zoomIn"); //  애니메이션 실행
    });
  }
}, "-=1");

// sec-4 유저리서치 애니메이션
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


// sec-5 페르소나 애니메이션
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
}, "-=.5") 

tl_4.to(".perso_content-item li:nth-child(2) .skill:nth-child(1) .dot", {
  left: "70%", // 3번 dot 목표 위치
  duration: .9
}, "-=.5") 

tl_4.to(".perso_content-item li:nth-child(2) .skill:nth-child(2) .dot", {
  left: "60%", // 4번 dot 목표 위치
  duration: .9
}, "-=.5");

// sec-6 j-map 애니메이션

// sec-7 usab-te 이미지 애니메이션
// 좌우로 벌릴 고정 간격(px)
const GAP = 405; 

// 1) 중앙 겹침 초기 세팅 (한 번만 실행)
gsap.utils.toArray(".usab-te_img-box").forEach((box) => {
  const img1 = box.querySelector(".usab-te_img-item-1"); // 첫 번째 이미지
  const img2 = box.querySelector(".usab-te_img-item-2"); // 두 번째 이미지
  if (!img1 || !img2) return; // 없으면 건너뜀

  gsap.set([img1, img2], { x: 0 }); // 두 이미지를 X축 0 위치(중앙)로 초기화
  gsap.set(img1, { zIndex: 2, opacity: 1, filter: "blur(0px)" }); // img1: 맨 위, 불투명, 블러 없음
  gsap.set(img2, { zIndex: 1, opacity: 0, x: 60, filter: "blur(2px)" }); // img2: 뒤에 숨김, 오른쪽으로 60px, 블러 처리
});
// 2) 개별 타임라인 생성

// --- 1번 박스 ---
gsap.timeline({
  scrollTrigger: {
    trigger: ".usab-te_img-item-1", // 이 박스가 트리거
    start: "top 70%",              // 박스 top이 화면 70% 지점에 닿을 때 시작
    toggleActions: "play none none none", // 한 번만 재생
    // markers: true, 
  },
  defaults: { ease: "power4.out" } // 기본 이징(부드러운 가속/감속)
})

.to(".usab-te_img-box-1 .usab-te_img-item-1", { // img1 애니메이션
  x: -GAP,               // 왼쪽으로 이동
  duration: 1.1          // 1.1초 동안 실행
}, 0)                    // 타임라인 0초 지점에서 시작

.to(".usab-te_img-box-1 .usab-te_img-item-2", { // img2 애니메이션
  x: GAP,                // 오른쪽으로 이동
  opacity: 1,            // 불투명하게
  filter: "blur(0px)",   // 블러 제거
  duration: 1.1          // 1.1초 동안 실행
}, 0.05);                // img1보다 0.05초 늦게 시작 → 뒤에서 나오는 느낌

// --- 2번 박스 ---
gsap.timeline({
  scrollTrigger: {
    trigger: ".usab-te_img-box-2", // 2번 박스 트리거
    start: "top 70%",
    toggleActions: "play none none none",
    
  },
  defaults: { ease: "power4.out" }
})

.to(".usab-te_img-box-2 .usab-te_img-item-1", {
  x: -GAP,
  duration: 1.1
}, 0)

.to(".usab-te_img-box-2 .usab-te_img-item-2", {
  x: GAP,
  opacity: 1,
  filter: "blur(0px)",
  duration: 1.1
}, 0.05);

// --- 3번 박스 ---
gsap.timeline({
  scrollTrigger: {
    trigger: ".usab-te_img-box-3", // 3번 박스 트리거
    start: "top 70%",
    toggleActions: "play none none none",
  },
  defaults: { ease: "power4.out" }
})

.to(".usab-te_img-box-3 .usab-te_img-item-1", {
  x: -GAP,
  duration: 1.1
}, 0)

.to(".usab-te_img-box-3 .usab-te_img-item-2", {
  x: GAP,
  opacity: 1,
  filter: "blur(0px)",
  duration: 1.1
}, 0.05);

// sec-8 벤치마킹 애니메이션
let tl_5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-8",       
    start: "top 20%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_5.to(".create_5", {
  y: '0%',          
  duration: 1,    
  opacity: 1     
});

// sec-9 프골 & 솔루션 애니메이션
let tl_6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-9",       
    start: "top 25%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_6.to(".create_7", {
  x: '0%',          
  duration: 1.2,    
  // stagger: 0.05,    
  opacity: 1
});

tl_6.to(".create_8", {
  y: '0%',          
  duration: 1.2,    
  stagger: 0.2,    
  opacity: 1
});

tl_6.to(".create_9", {
  y: '0%',          
  duration: 1.2,    
  opacity: 1
});

// sec-10 로고 애니메이션
let text = document.querySelector(".logo_title > span");
let content = text.textContent;
text.textContent = ""; // 처음엔 비워두기

let tl_7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-10",       
    start: "top 70%",      
    toggleActions: "play none none none" ,     
    // markers: true,
  },

  defaults: {
    ease: "power4.out" 
  }
});

tl_7.to(text, {
  duration: 2,
//  text: content,
//  ease: "none"
text: {
  value: content,
  delimiter: "" // 글자 단위가 아니라 문자 단위로
},
ease: "power1.inOut"
});

tl_7.to(".create_10", {
  y: '0%',          
  duration: 1.2,    
  opacity: 1
});

// sec-11 디자인 시스템 애니메이션
let tl_8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-11",       
    start: "top 60%",      
    toggleActions: "play none none none" ,     
    // markers: true,
  },

  defaults: {
    ease: "power4.out" 
  }
});

tl_8.to(".create_11", {
  y: '0%',          
  duration: 1.2,    
  opacity: 1
});

tl_8.to(".create_12", {
  y: '0%',          
  duration: 1.2,    
  opacity: 1
}, "-=.5");

tl_8.to(".create_13", {
  y: '0%',          
  duration: 1.2,    
  opacity: 1
}, "-=.5");

tl_8.to(".create_14", {      
  duration: 1.2,    
  opacity: 1
}, "-=.5");

// tl_8.to(text2, {
// duration: 1.2,
//  text: content2,
//  ease: "none"
// });

//sec-12 컴포넌트 애니메이션 없음

//sec-13 플로우차트 애니메이션 
let tl_9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-13",       
    start: "top 40%",      
    toggleActions: "play none none none" ,     
    // markers: true,
  },

  defaults: {
    ease: "power4.out" 
  }
});

tl_9.to(".create_15", {
  onComplete: () => {
    // 여기서 .swing 클래스 추가
    const items = document.querySelectorAll(".flow-ch_btn-box > span");

    items.forEach(el => {
      el.classList.add("animate__pulse"); // 애니메이션 실행
    });
  }
});

//sec-14 와이어프레임 애니메이션 없음


//sec-1-1 어플 시작 애니메이션 
let tl_10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-1-1",       
    start: "top 40%",      
    toggleActions: "play none none none" ,     
    // markers: true,
  },

  defaults: {
    ease: "power4.out" 
  }
});

// 즐겨찾기 텍스트 애니메이션
let tl_13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec_1-4",         // 이 섹션이 화면에 등장하면 애니메이션 시작
    start: "top 50%",          // 섹션의 'top'이 브라우저의 75% 지점에 닿을 때
    toggleActions: "play none none none" ,
    // └ 스크롤 방향과 관계없이 1번만 재생
    // markers: true // 화면에 start/end 위치 보이게 함
  },
  
  defaults: {
    ease: "power4.out" // 애니메이션 속도 곡선: 느리게 시작 → 빠르게 → 부드럽게 감속
  }

});

tl_13.to(".create_18", {
  y: '0%',           // 요소를 Y축으로 0% 위치(원래 자리)까지 이동 (초기에는 translateY(100%) 상태여야 함)
  duration: 1.2,     // 각 요소의 애니메이션 지속 시간: 1.2초
  stagger: 0.2,      // 각 요소의 애니메이션을 0.2초 간격으로 순차 실행
  opacity: 1         // 불투명도를 1로 설정 (초기값은 opacity: 0 이어야 자연스러움)
});

// 매장 혼잡도 텍스트 애니메이션
let tl_15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec_1-6",         // 이 섹션이 화면에 등장하면 애니메이션 시작
    start: "top 10%",          // 섹션의 'top'이 브라우저의 75% 지점에 닿을 때
    toggleActions: "play none none none" ,
    // └ 스크롤 방향과 관계없이 1번만 재생
    markers: true // 화면에 start/end 위치 보이게 함
  },
  
  defaults: {
    ease: "power4.out" // 애니메이션 속도 곡선: 느리게 시작 → 빠르게 → 부드럽게 감속
  }

});

tl_13.to(".create_19", {
  x: '0%',           // 요소를 Y축으로 0% 위치(원래 자리)까지 이동 (초기에는 translateY(100%) 상태여야 함)
  duration: 1.2,     // 각 요소의 애니메이션 지속 시간: 1.2초
  stagger: 0.5,      // 각 요소의 애니메이션을 0.2초 간격으로 순차 실행
  opacity: 1         // 불투명도를 1로 설정 (초기값은 opacity: 0 이어야 자연스러움)
}, "+=.3");

