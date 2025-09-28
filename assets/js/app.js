// 언어 전환 시스템 - 완전히 새로운 방식
(function() {
  'use strict';
  
  // 언어 상태 관리
  let isKorean = true; // 기본값: 한국어
  
  // 언어 전환 함수
  function toggleLanguage() {
    console.log('언어 전환 버튼 클릭됨');
    
    // 언어 상태 토글
    isKorean = !isKorean;
    
    console.log('현재 언어:', isKorean ? '한국어' : '영어');
    
    // 버튼 텍스트 업데이트
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = isKorean ? 'KR/EN' : 'EN/KR';
      console.log('버튼 텍스트 업데이트:', langToggle.textContent);
    }
    
    // 모든 다국어 요소 업데이트
    const elements = document.querySelectorAll('[data-ko]');
    console.log('찾은 다국어 요소 개수:', elements.length);
    
    elements.forEach((el, index) => {
      const ko = el.getAttribute('data-ko');
      const en = el.getAttribute('data-en');
      
      if (ko && en) {
        const newText = isKorean ? ko : en;
        el.textContent = newText;
        console.log(`요소 ${index + 1} 업데이트:`, newText);
      }
    });
    
    // 플레이스홀더 업데이트
    const placeholders = document.querySelectorAll('[data-ko-placeholder]');
    console.log('찾은 플레이스홀더 요소 개수:', placeholders.length);
    
    placeholders.forEach((el, index) => {
      const ko = el.getAttribute('data-ko-placeholder');
      const en = el.getAttribute('data-en-placeholder');
      
      if (ko && en) {
        const newPlaceholder = isKorean ? ko : en;
        el.placeholder = newPlaceholder;
        console.log(`플레이스홀더 ${index + 1} 업데이트:`, newPlaceholder);
      }
    });
    
    // localStorage에 저장
    localStorage.setItem('portfolioLanguage', isKorean ? 'ko' : 'en');
    console.log('언어 상태 저장됨:', isKorean ? 'ko' : 'en');
  }
  
  // 초기 언어 설정
  function initializeLanguage() {
    console.log('언어 초기화 시작');
    
    // localStorage에서 저장된 언어 상태 불러오기
    const savedLanguage = localStorage.getItem('portfolioLanguage');
    if (savedLanguage === 'en') {
      isKorean = false;
      console.log('저장된 언어: 영어');
    } else {
      isKorean = true;
      console.log('저장된 언어: 한국어 (기본값)');
    }
    
    // 초기 텍스트 설정
    const elements = document.querySelectorAll('[data-ko]');
    console.log('초기화할 다국어 요소 개수:', elements.length);
    
    elements.forEach((el, index) => {
      const ko = el.getAttribute('data-ko');
      const en = el.getAttribute('data-en');
      
      if (ko && en) {
        const initialText = isKorean ? ko : en;
        el.textContent = initialText;
        console.log(`초기 텍스트 ${index + 1}:`, initialText);
      }
    });
    
    // 초기 플레이스홀더 설정
    const placeholders = document.querySelectorAll('[data-ko-placeholder]');
    console.log('초기화할 플레이스홀더 요소 개수:', placeholders.length);
    
    placeholders.forEach((el, index) => {
      const ko = el.getAttribute('data-ko-placeholder');
      const en = el.getAttribute('data-en-placeholder');
      
      if (ko && en) {
        const initialPlaceholder = isKorean ? ko : en;
        el.placeholder = initialPlaceholder;
        console.log(`초기 플레이스홀더 ${index + 1}:`, initialPlaceholder);
      }
    });
    
    // 버튼 텍스트 설정
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = isKorean ? 'KR/EN' : 'EN/KR';
      console.log('초기 버튼 텍스트:', langToggle.textContent);
    }
    
    console.log('언어 초기화 완료');
  }
  
  // 이벤트 리스너 등록
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 로드 완료 - 언어 시스템 초기화');
    
    // 언어 초기화
    initializeLanguage();
    
    // 언어 토글 버튼 이벤트 리스너
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      console.log('언어 토글 버튼 찾음:', langToggle);
      langToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('언어 토글 버튼 클릭 이벤트 발생');
        toggleLanguage();
      });
    } else {
      console.error('언어 토글 버튼을 찾을 수 없습니다!');
    }
  });
})();

// 알림 메시지 표시 함수 (먼저 정의)
function showNotification(message, type = 'info') {
  // 기존 알림 제거
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // 새 알림 생성
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  let icon = 'ℹ️'; // 기본 정보 아이콘
  if (type === 'success') icon = '✅'; // 성공 아이콘
  if (type === 'error') icon = '❌'; // 에러 아이콘
  
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${icon}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // 스타일 적용
  let backgroundColor = '#3B82F6'; // 기본 파란색
  if (type === 'success') backgroundColor = '#10B981'; // 성공 - 초록색
  if (type === 'error') backgroundColor = '#EF4444'; // 에러 - 빨간색
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${backgroundColor};
    color: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
  `;
  
  // CSS 애니메이션 추가
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .notification-icon {
        font-size: 18px;
      }
      .notification-message {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
      }
      .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
      }
      .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // 5초 후 자동 제거
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// 즉시 실행되는 테스트
console.log('JavaScript 파일 로드됨! (v2.0 - 성공 메시지 개선)');

// 연락하기 폼 처리
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 로드 완료');
  
  // 폼 요소 찾기 (ID로 특정 폼 선택)
  const contactForm = document.getElementById('contact-form');
  console.log('폼 요소:', contactForm);
  
  // Send 버튼 직접 찾기
  const sendButton = document.querySelector('button[type="submit"]');
  console.log('Send 버튼:', sendButton);
  
  // Netlify Forms 호환 모드
  console.log('Netlify Forms 호환 모드 활성화');
  
  // Netlify Forms 처리 및 사용자 정의 성공 메시지
  console.log('Netlify Forms 처리 모드 활성화');
  console.log('✅ 사용자 정의 성공 메시지 기능 활성화됨');
  
  // 얼럿 메시지 모드 활성화
  console.log('📱 얼럿 메시지 모드 활성화');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      console.log('📝 폼 제출 시작...');
      
      // 폼 제출을 완전히 가로채기
      e.preventDefault();
      
      // 폼 데이터 수집
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      console.log('폼 데이터:', { name, email, message });
      
      // 유효성 검사
      if (!name || !email || !message) {
        alert('모든 필드를 입력해주세요.');
        return;
      }
      
      // 이메일 형식 검사
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
      }
      
      // 유효성 검사 통과 시 사용자 정의 성공 메시지 표시
      console.log('유효성 검사 통과 - 사용자 정의 성공 메시지 표시');
      
      // 폼 숨기기 (이메일 전송 완료 후 메시지 표시를 위해)
      contactForm.style.display = 'none';
      console.log('🔍 폼 숨김 완료 - 이메일 전송 대기 중');
      
      // Netlify Forms로 수동 제출
      console.log('📤 Netlify Forms로 수동 제출 중...');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData)
      }).then(response => {
        console.log('📤 Netlify Forms 제출 완료:', response);
        if (response.ok) {
          console.log('✅ 이메일 전송 성공!');
          // 이메일 전송 완료 메시지 표시
          showEmailSentMessage();
        } else {
          console.log('❌ 이메일 전송 실패');
          showEmailErrorMessage();
        }
      }).catch(error => {
        console.log('📤 Netlify Forms 제출 오류:', error);
        showEmailErrorMessage();
      });
    });
  }
});


// 이메일 전송 완료 메시지 표시 함수 (얼럿 메시지)
function showEmailSentMessage() {
  console.log('📧 이메일 전송 완료 메시지 표시');
  
  // 얼럿 메시지로 성공 알림
  alert('📧 이메일 전송 완료!\n\n메시지가 성공적으로 전송되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
  
  // 폼 복원
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.style.display = 'block';
    contactForm.reset();
    console.log('🔄 폼 복원 완료!');
  }
}

// 이메일 전송 오류 메시지 표시 함수
function showEmailErrorMessage() {
  console.log('❌ 이메일 전송 오류 메시지 표시');
  alert('이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
}

// 스무스 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 카드 호버 효과
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// 스킬 태그 클릭 효과
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', function() {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
  });
});

// 연락처 정보 업데이트
function updateContactInfo() {
  // 전화번호 클릭 시 전화 걸기
  const phoneNumber = '010-4143-9828';
  const emailAddress = 'smartitpeyun@gmail.com';
  
  // 전화번호 링크 생성
  const phoneLinks = document.querySelectorAll('a[href*="phone"], a[href*="tel"]');
  phoneLinks.forEach(link => {
    link.href = `tel:${phoneNumber}`;
    link.textContent = phoneNumber;
  });
  
  // 이메일 링크 생성
  const emailLinks = document.querySelectorAll('a[href*="mailto"]');
  emailLinks.forEach(link => {
    link.href = `mailto:${emailAddress}`;
    link.textContent = emailAddress;
  });
}

// QR코드 생성 함수 (대체 방법)
function generateQRCode() {
  const canvas = document.getElementById('qr-code');
  if (!canvas) {
    console.error('QR코드 Canvas를 찾을 수 없습니다');
    return;
  }
  
  // 정확한 Netlify URL 사용
  const portfolioUrl = 'https://serin-portfolio.netlify.app/';
  console.log('QR코드 생성 URL:', portfolioUrl);
  
  // Canvas 초기화
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 200, 200);
  
  // QRCode 라이브러리 확인 및 생성
  if (typeof QRCode !== 'undefined') {
    try {
      // QRCode.js 사용
      const options = {
        width: 200,
        height: 200,
        margin: 2,
        color: {
          dark: '#1e293b',
          light: '#ffffff'
        },
        errorCorrectionLevel: 'M'
      };
      
      QRCode.toCanvas(canvas, portfolioUrl, options, function (error) {
        if (error) {
          console.error('QRCode.js 생성 실패:', error);
          generateFallbackQRCode();
        } else {
          console.log('QRCode.js 생성 성공');
        }
      });
    } catch (error) {
      console.error('QRCode.js 오류:', error);
      generateFallbackQRCode();
    }
  } else {
    console.log('QRCode.js 라이브러리 없음, 대체 방법 사용');
    generateFallbackQRCode();
  }
}

// 대체 QR코드 생성 (간단한 패턴)
function generateFallbackQRCode() {
  const canvas = document.getElementById('qr-code');
  const ctx = canvas.getContext('2d');
  
  // 배경
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 200, 200);
  
  // QR코드 패턴 그리기 (간단한 버전)
  ctx.fillStyle = '#1e293b';
  
  // 모서리 마커
  drawCornerMarker(ctx, 20, 20);
  drawCornerMarker(ctx, 140, 20);
  drawCornerMarker(ctx, 20, 140);
  
  // 중앙 패턴
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        ctx.fillRect(70 + i * 10, 70 + j * 10, 10, 10);
      }
    }
  }
  
  // 중앙 로고
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(90, 90, 20, 20);
  ctx.fillStyle = '#ffffff';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('SY', 100, 103);
  
  // 테두리
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 10, 180, 180);
  
  console.log('대체 QR코드 생성 완료');
}

// 모서리 마커 그리기
function drawCornerMarker(ctx, x, y) {
  // 외부 사각형
  ctx.fillRect(x, y, 40, 40);
  // 내부 흰색 사각형
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x + 10, y + 10, 20, 20);
  // 중앙 검은색 사각형
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(x + 15, y + 15, 10, 10);
}

// 온라인 QR코드 생성 (가장 안정적)
function generateOnlineQRCode() {
  const canvas = document.getElementById('qr-code');
  if (!canvas) {
    console.error('QR코드 Canvas를 찾을 수 없습니다');
    return;
  }
  
  // 정확한 Netlify URL 사용
  const portfolioUrl = 'https://serin-portfolio.netlify.app/';
  console.log('QR코드 생성 URL:', portfolioUrl);
  
  // 온라인 QR코드 생성 API 사용
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(portfolioUrl)}`;
  
  // 이미지 로드
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  img.onload = function() {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, 200, 200);
    console.log('온라인 QR코드 생성 성공');
  };
  
  img.onerror = function() {
    console.error('온라인 QR코드 생성 실패, 대체 방법 사용');
    generateFallbackQRCode();
  };
  
  img.src = qrApiUrl;
}

// Netlify Forms 처리 함수
function setupNetlifyForm() {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    // 폼 데이터 수집
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // 유효성 검사
    if (!name || !email || !message) {
      e.preventDefault(); // 유효성 검사 실패 시만 제출 방지
      showMessage('모든 필드를 입력해주세요.', 'error');
      return;
    }
    
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault(); // 유효성 검사 실패 시만 제출 방지
      showMessage('올바른 이메일 주소를 입력해주세요.', 'error');
      return;
    }
    
    // 유효성 검사 통과 시 Netlify Forms가 자연스럽게 제출됨
    console.log('폼 제출 중... Netlify Forms가 처리합니다.');
    // Netlify Forms는 HTML 폼의 'netlify' 속성을 통해 자동으로 처리되므로,
    // 여기서는 fetch를 통한 수동 제출 로직을 제거하고 유효성 검사만 수행합니다.
  });
}

// 메시지 표시 함수
function showMessage(text, type) {
  const messageDiv = document.getElementById('form-message');
  if (!messageDiv) return;
  
  messageDiv.textContent = text;
  messageDiv.style.display = 'block';
  
  if (type === 'success') {
    messageDiv.style.backgroundColor = '#d1fae5';
    messageDiv.style.color = '#065f46';
    messageDiv.style.border = '1px solid #10b981';
  } else {
    messageDiv.style.backgroundColor = '#fee2e2';
    messageDiv.style.color = '#991b1b';
    messageDiv.style.border = '1px solid #ef4444';
  }
  
  // 5초 후 메시지 숨기기
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}

// 모바일 메뉴 토글 기능
function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (!mobileMenuToggle || !navMenu) {
    console.log('모바일 메뉴 요소를 찾을 수 없습니다');
    return;
  }
  
  // 메뉴 토글 이벤트
  mobileMenuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isOpen = navMenu.classList.contains('mobile-open');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  
  // 메뉴 링크 클릭 시 메뉴 닫기
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });
  
  // 메뉴 외부 클릭 시 닫기
  navMenu.addEventListener('click', function(e) {
    if (e.target === navMenu) {
      closeMobileMenu();
    }
  });
  
  // ESC 키로 메뉴 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('mobile-open')) {
      closeMobileMenu();
    }
  });
  
  // 스크롤 시 메뉴 닫기
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (navMenu.classList.contains('mobile-open')) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        closeMobileMenu();
      }, 100);
    }
  });
  
  function openMobileMenu() {
    navMenu.classList.add('mobile-open');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('모바일 메뉴 열림');
  }
  
  function closeMobileMenu() {
    navMenu.classList.remove('mobile-open');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
    console.log('모바일 메뉴 닫힘');
  }
}




// 스크롤 인디케이터 생성
function createScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'scroll-indicator';
  indicator.innerHTML = '<div class="scroll-progress"></div>';
  document.body.appendChild(indicator);
  
  // 스크롤 진행률 업데이트
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }
  });
}

// 로딩 애니메이션
function showLoadingAnimation() {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loadingOverlay);
  
  // 페이지 로드 완료 후 로딩 숨기기
  window.addEventListener('load', function() {
    setTimeout(() => {
      loadingOverlay.classList.add('hidden');
      setTimeout(() => {
        loadingOverlay.remove();
      }, 500);
    }, 1000);
  });
}

// 스크롤 기반 애니메이션
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // 애니메이션 대상 요소들 관찰
  const animatedElements = document.querySelectorAll('.card, .skill, .hero-text, .hero-visual, .about, .contact');
  animatedElements.forEach((el, index) => {
    // 다양한 애니메이션 클래스 적용
    if (el.classList.contains('card')) {
      el.classList.add('fade-in');
    } else if (el.classList.contains('skill')) {
      el.classList.add('scale-in');
    } else if (el.classList.contains('hero-text')) {
      el.classList.add('slide-in-left');
    } else if (el.classList.contains('hero-visual')) {
      el.classList.add('slide-in-right');
    } else {
      el.classList.add('fade-in');
    }
    
    // 지연 시간 적용
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
}

// 스킬 태그 클릭 애니메이션 개선
function setupSkillAnimations() {
  document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', function() {
      // 기존 애니메이션 클래스 제거
      this.classList.remove('clicked');
      
      // 새로운 애니메이션 클래스 추가
      setTimeout(() => {
        this.classList.add('clicked');
      }, 10);
      
      // 애니메이션 완료 후 클래스 제거
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 600);
    });
  });
}

// 카드 호버 효과 개선
function setupCardHoverEffects() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
}

// 부드러운 스크롤 개선
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 100; // 네비게이션 높이 고려
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 페이지 전환 효과
function setupPageTransitions() {
  // 링크 클릭 시 전환 효과
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // 전환 효과 시작
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);
        
        // 전환 효과 활성화
        setTimeout(() => {
          transition.classList.add('active');
        }, 10);
        
        // 스크롤 이동
        setTimeout(() => {
          const offsetTop = target.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 300);
        
        // 전환 효과 제거
        setTimeout(() => {
          transition.classList.remove('active');
          setTimeout(() => {
            transition.remove();
          }, 600);
        }, 900);
      }
    });
  });
}

// 페이지 로드 시 연락처 정보 업데이트 및 QR코드 생성
document.addEventListener('DOMContentLoaded', function() {
  updateContactInfo();
  setupNetlifyForm();
  setupMobileMenu();
  
  // 새로운 인터랙티브 기능들 추가
  createScrollIndicator();
  showLoadingAnimation();
  setupScrollAnimations();
  setupSkillAnimations();
  setupCardHoverEffects();
  setupSmoothScroll();
  setupPageTransitions();
  
  // 즉시 QR코드 생성 (온라인 API 사용)
  generateOnlineQRCode();
});