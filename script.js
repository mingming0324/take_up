

// overview 텍스트 애니메이션

// GSAP 타임라인 생성: 모든 애니메이션에 기본적으로 ease를 "power4.out"으로 설정
let tl = gsap.timeline({
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