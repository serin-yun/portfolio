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

// 터치 제스처 지원
function setupTouchGestures() {
  let startY = 0;
  let startX = 0;
  let isScrolling = false;
  let touchStartTime = 0;
  let touchEndTime = 0;
  
  // 스와이프 제스처 감지
  document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
    touchStartTime = Date.now();
    isScrolling = false;
  }, { passive: true });
  
  document.addEventListener('touchmove', function(e) {
    if (!startY || !startX) return;
    
    const currentY = e.touches[0].clientY;
    const currentX = e.touches[0].clientX;
    const diffY = startY - currentY;
    const diffX = startX - currentX;
    
    // 수직 스크롤 감지
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 10) {
      isScrolling = true;
    }
  }, { passive: true });
  
  document.addEventListener('touchend', function(e) {
    if (!startY || !startX) return;
    
    touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;
    
    const endY = e.changedTouches[0].clientY;
    const endX = e.changedTouches[0].clientX;
    const diffY = startY - endY;
    const diffX = startX - endX;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    
    // 탭 제스처 (짧은 터치)
    if (touchDuration < 200 && distance < 10) {
      handleTapGesture(e.changedTouches[0]);
    }
    
    // 스와이프 제스처 처리
    if (!isScrolling && distance > 50) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // 수평 스와이프
        if (diffX > 0) {
          handleSwipeGesture('right', diffX);
        } else {
          handleSwipeGesture('left', Math.abs(diffX));
        }
      } else {
        // 수직 스와이프
        if (diffY > 0) {
          handleSwipeGesture('up', diffY);
        } else {
          handleSwipeGesture('down', Math.abs(diffY));
        }
      }
    }
    
    startY = 0;
    startX = 0;
    isScrolling = false;
  }, { passive: true });
  
  // 탭 제스처 처리
  function handleTapGesture(touch) {
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (target) {
      // 카드 탭 시 상세 정보 표시
      if (target.closest('.card')) {
        const card = target.closest('.card');
        showCardDetails(card);
      }
      
      // 스킬 태그 탭 시 하이라이트
      if (target.classList.contains('skill')) {
        highlightSkill(target);
      }
      
      // 버튼 탭 시 리플 효과
      if (target.classList.contains('btn') || target.closest('.btn')) {
        createRippleEffect(target, touch.clientX, touch.clientY);
      }
    }
  }
  
  // 스와이프 제스처 처리
  function handleSwipeGesture(direction, distance) {
    console.log(`${direction} 스와이프 감지, 거리: ${distance}px`);
    
    switch (direction) {
      case 'left':
        // 다음 섹션으로 이동
        navigateToNextSection();
        break;
      case 'right':
        // 이전 섹션으로 이동
        navigateToPreviousSection();
        break;
      case 'up':
        // 스크롤 다운
        smoothScrollDown();
        break;
      case 'down':
        // 스크롤 업
        smoothScrollUp();
        break;
    }
  }
  
  // 카드 상세 정보 표시
  function showCardDetails(card) {
    card.classList.add('card-expanded');
    
    // 3초 후 원래 상태로 복원
    setTimeout(() => {
      card.classList.remove('card-expanded');
    }, 3000);
  }
  
  // 스킬 하이라이트
  function highlightSkill(skill) {
    skill.classList.add('skill-highlighted');
    
    setTimeout(() => {
      skill.classList.remove('skill-highlighted');
    }, 1000);
  }
  
  // 리플 효과 생성
  function createRippleEffect(element, x, y) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x - rect.left - size/2}px;
      top: ${y - rect.top - size/2}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  // 섹션 네비게이션
  function navigateToNextSection() {
    const sections = ['hero', 'projects', 'about', 'contact'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (currentIndex < sections.length - 1) {
      const nextSection = document.getElementById(sections[currentIndex + 1]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  function navigateToPreviousSection() {
    const sections = ['hero', 'projects', 'about', 'contact'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (currentIndex > 0) {
      const prevSection = document.getElementById(sections[currentIndex - 1]);
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  // 현재 섹션 감지
  function getCurrentSection() {
    const sections = document.querySelectorAll('section, header');
    const scrollPosition = window.scrollY + 100;
    
    for (let section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= scrollPosition && rect.bottom > scrollPosition) {
        return section.id || section.className.split(' ')[0];
      }
    }
    return 'hero';
  }
  
  // 부드러운 스크롤
  function smoothScrollDown() {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  }
  
  function smoothScrollUp() {
    window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
  }
  
  // CSS 애니메이션 추가
  if (!document.querySelector('#gesture-styles')) {
    const style = document.createElement('style');
    style.id = 'gesture-styles';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      .card-expanded {
        transform: scale(1.05);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }
      
      .skill-highlighted {
        background: var(--gradient-accent) !important;
        color: white !important;
        transform: scale(1.1);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
      }
    `;
    document.head.appendChild(style);
  }
}

// 터치 피드백 개선
function setupTouchFeedback() {
  // 터치 시 리플 효과
  const touchElements = document.querySelectorAll('.btn, .nav-link, .skill, .card');
  
  touchElements.forEach(element => {
    element.addEventListener('touchstart', function(e) {
      this.style.transform = 'scale(0.98)';
    }, { passive: true });
    
    element.addEventListener('touchend', function(e) {
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
    }, { passive: true });
  });
}

// 이미지 lazy loading 및 최적화
function setupImageOptimization() {
  // Intersection Observer로 lazy loading 구현
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const placeholder = img.parentElement.querySelector('.image-placeholder');
        
        // 이미지 로드 시작
        img.addEventListener('load', function() {
          this.classList.add('loaded');
          if (placeholder) {
            placeholder.classList.add('loaded');
          }
          console.log('이미지 로드 완료:', this.src);
        });
        
        // 이미지 로드 오류 처리
        img.addEventListener('error', function() {
          console.error('이미지 로드 실패:', this.src);
          if (placeholder) {
            placeholder.innerHTML = '❌ 이미지 로드 실패';
            placeholder.style.color = '#ef4444';
          }
        });
        
        // 실제 이미지 로드
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });
  
  // 모든 lazy loading 이미지 관찰
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
  
  // 이미지 압축 및 최적화
  function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // WebP 지원 확인
      if (supportsWebP()) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const webpImg = new Image();
        webpImg.onload = function() {
          img.src = webpSrc;
        };
        webpImg.src = webpSrc;
      }
      
      // 이미지 크기 최적화
      const container = img.closest('.card-image-container, .about-image-container');
      if (container) {
        const containerWidth = container.offsetWidth;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const optimalWidth = containerWidth * devicePixelRatio;
        
        // srcset 속성 추가
        if (img.src.includes('.')) {
          const baseSrc = img.src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
          const extension = img.src.match(/\.(jpg|jpeg|png|webp)$/i)[0];
          
          img.srcset = `
            ${baseSrc}-320w${extension} 320w,
            ${baseSrc}-640w${extension} 640w,
            ${baseSrc}-1024w${extension} 1024w
          `;
          img.sizes = '(max-width: 320px) 320px, (max-width: 640px) 640px, 1024px';
        }
      }
    });
  }
  
  // WebP 지원 확인
  function supportsWebP() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  
  // 이미지 프리로딩
  function preloadCriticalImages() {
    const criticalImages = [
      'assets/img/hero.svg',
      'assets/img/avatar.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
  
  // 초기화
  preloadCriticalImages();
  optimizeImages();
  
  // 리사이즈 시 이미지 재최적화
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(optimizeImages, 250);
  });
}

// 이미지 지연 로딩 개선
function setupAdvancedLazyLoading() {
  // 네트워크 상태에 따른 이미지 품질 조절
  function adjustImageQuality() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      images.forEach(img => {
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          // 저품질 이미지 사용
          img.style.filter = 'blur(2px)';
          img.style.opacity = '0.8';
        } else if (effectiveType === '3g') {
          // 중간 품질
          img.style.filter = 'blur(1px)';
        } else {
          // 고품질 이미지
          img.style.filter = 'none';
          img.style.opacity = '1';
        }
      });
    }
  }
  
  // 초기 네트워크 상태 확인
  adjustImageQuality();
  
  // 네트워크 상태 변경 감지
  if (navigator.connection) {
    navigator.connection.addEventListener('change', adjustImageQuality);
  }
}

// 페이지 로드 시 연락처 정보 업데이트 및 QR코드 생성
document.addEventListener('DOMContentLoaded', function() {
  updateContactInfo();
  setupNetlifyForm();
  setupMobileMenu();
  setupTouchGestures();
  setupTouchFeedback();
  setupImageOptimization();
  setupAdvancedLazyLoading();
  
  // 즉시 QR코드 생성 (온라인 API 사용)
  generateOnlineQRCode();
});