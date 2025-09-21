// 언어 토글 기능
document.getElementById('langToggle')?.addEventListener('click', () => {
  const isKorean = document.getElementById('langToggle').textContent.includes('KR');
  
  // 언어 토글 버튼 텍스트 변경
  document.getElementById('langToggle').textContent = isKorean ? 'EN/KR' : 'KR/EN';
  
  // 모든 다국어 요소 업데이트
  document.querySelectorAll('[data-ko]').forEach(el => {
    const ko = el.getAttribute('data-ko');
    const en = el.getAttribute('data-en');
    
    if (ko && en) {
      el.textContent = isKorean ? en : ko;
    }
  });
  
  // 플레이스홀더 업데이트
  document.querySelectorAll('[data-ko-placeholder]').forEach(el => {
    const ko = el.getAttribute('data-ko-placeholder');
    const en = el.getAttribute('data-en-placeholder');
    
    if (ko && en) {
      el.placeholder = isKorean ? en : ko;
    }
  });
  
  // 페이지 제목 변경
  if (isKorean) {
    document.title = "Serin Yun Portfolio — IT Project Manager";
  } else {
    document.title = "Serin Yun Portfolio — IT Project Manager";
  }
});

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
console.log('JavaScript 파일 로드됨!');

// 연락하기 폼 처리
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 로드 완료');
  
  // 폼 요소 찾기
  const contactForm = document.querySelector('form[name="contact"]');
  console.log('폼 요소:', contactForm);
  
  // Send 버튼 직접 찾기
  const sendButton = document.querySelector('button[type="submit"]');
  console.log('Send 버튼:', sendButton);
  
  if (sendButton) {
    console.log('Send 버튼 이벤트 리스너 추가');
    sendButton.addEventListener('click', function(e) {
      console.log('Send 버튼 클릭됨!');
      e.preventDefault();
      
      // 폼 데이터 가져오기
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const messageInput = document.querySelector('textarea[name="message"]');
      
      const name = nameInput ? nameInput.value : '';
      const email = emailInput ? emailInput.value : '';
      const message = messageInput ? messageInput.value : '';
      
      console.log('폼 데이터:', { name, email, message });
      
      // 입력값 검증
      if (!name || !email || !message) {
        console.log('입력값 검증 실패');
        alert('모든 필드를 입력해주세요.');
        return;
      }
      
      // 이메일 형식 검증
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log('이메일 형식 검증 실패');
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
      }
      
      // 이메일 링크 생성
      const subject = encodeURIComponent(`포트폴리오 문의 - ${name}`);
      const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`);
      const mailtoLink = `mailto:smartitpeyun@gmail.com?subject=${subject}&body=${body}`;
      
      console.log('이메일 링크:', mailtoLink);
      
      // Netlify Forms를 사용한 이메일 전송
      try {
        // 폼 데이터를 FormData 객체로 생성
        const formData = new FormData();
        formData.append('form-name', 'contact');
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        
        // Netlify Forms로 전송
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        }).then(response => {
          if (response.ok) {
            console.log('이메일 전송 성공');
            alert('메시지가 성공적으로 전송되었습니다!');
          } else {
            throw new Error('전송 실패');
          }
        }).catch(error => {
          console.log('이메일 전송 실패:', error);
          // 실패 시 mailto 링크로 대체
          window.location.href = mailtoLink;
          alert('이메일 클라이언트가 열렸습니다.\n\n📧 smartitpeyun@gmail.com으로 메시지를 전송해주세요.\n\n💡 팁: 이메일 클라이언트가 열리지 않으면 직접 smartitpeyun@gmail.com으로 연락해주세요.');
        });
      } catch (error) {
        console.log('전송 오류:', error);
        // 오류 시 mailto 링크로 대체
        window.location.href = mailtoLink;
        alert('이메일 클라이언트가 열렸습니다.\n\n📧 smartitpeyun@gmail.com으로 메시지를 전송해주세요.\n\n💡 팁: 이메일 클라이언트가 열리지 않으면 직접 smartitpeyun@gmail.com으로 연락해주세요.');
      }
      
      // 폼 초기화
      if (contactForm) {
        contactForm.reset();
      }
    });
  } else {
    console.log('Send 버튼을 찾을 수 없습니다');
  }
});


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

// 페이지 로드 시 연락처 정보 업데이트
document.addEventListener('DOMContentLoaded', updateContactInfo);