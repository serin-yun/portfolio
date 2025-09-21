# 🚀 포트폴리오 GitHub 연동 및 Netlify 배포 가이드

## 📋 **작업 구분**

### 🤖 **커서AI가 대신 진행할 수 있는 작업**
- [x] Git 저장소 초기화 및 설정
- [x] GitHub 원격 저장소 연결
- [x] 코드 푸시 및 커밋
- [x] 배포 전 최종 검토 및 최적화
- [x] 문제 해결 및 디버깅

### 👤 **사용자가 직접 수행해야 하는 작업**
- [ ] GitHub 계정 생성 및 저장소 생성
- [ ] Netlify 계정 생성 및 GitHub 연동
- [ ] 이메일 알림 설정
- [ ] 도메인 설정 (선택사항)
- [ ] 배포 후 테스트 및 확인

---

## 🎯 **1단계: GitHub 저장소 준비**

### **A. GitHub 저장소 생성 (사용자 작업)**

#### **1.1 GitHub 계정 준비**
- **GitHub.com** 접속 후 로그인
- 계정이 없다면 **"Sign up"** 클릭하여 계정 생성

#### **1.2 새 저장소 생성**
1. **"New repository"** 클릭
2. **Repository name**: `serin-yun-portfolio`
3. **Description**: "Serin Yun - IT Project Manager Portfolio"
4. **Public** 선택 (무료 호스팅을 위해)
5. **"Create repository"** 클릭

#### **1.3 저장소 URL 복사**
- 생성된 저장소의 **HTTPS URL** 복사
- 예: `https://github.com/smartitpeyun/serin-yun-portfolio.git`

### **B. 로컬 Git 설정 (커서AI 작업)**

#### **1.4 Git 저장소 초기화**
```bash
# 현재 디렉토리에서 Git 초기화
git init

# 원격 저장소 추가
git remote add origin https://github.com/smartitpeyun/serin-yun-portfolio.git

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Serin Yun Portfolio"

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

---

## 🌐 **2단계: Netlify 배포 설정**

### **A. Netlify 계정 생성 (사용자 작업)**

#### **2.1 Netlify 계정 생성**
1. **netlify.com** 접속
2. **"Sign up"** 클릭
3. **GitHub 계정으로 로그인** 선택
4. 권한 허용 후 계정 생성 완료

#### **2.2 GitHub 저장소 연결**
1. Netlify 대시보드에서 **"New site from Git"** 클릭
2. **"GitHub"** 선택
3. **저장소 권한 허용** (처음이라면)
4. **"serin-yun-portfolio"** 저장소 선택
5. **"Deploy site"** 클릭

### **B. 빌드 설정 (자동 감지)**
- **Build command**: 비어있음 (정적 사이트)
- **Publish directory**: `/` (루트 디렉토리)
- **Deploy** 클릭

---

## 📧 **3단계: 이메일 전송 기능 설정**

### **A. Netlify Forms 활성화 (사용자 작업)**

#### **3.1 Forms 설정**
1. **Site settings** → **Forms** 이동
2. **"Enable form detection"** 활성화
3. **"Save"** 클릭

#### **3.2 이메일 알림 설정**
1. **Forms** 섹션에서 **"Form notifications"** 클릭
2. **"Add notification"** 클릭
3. **"Email notification"** 선택
4. **받을 이메일 주소**: `smartitpeyun@gmail.com`
5. **"Save"** 클릭

---

## 🌍 **4단계: 도메인 설정 (선택사항)**

### **A. 커스텀 도메인 설정 (사용자 작업)**

#### **4.1 도메인 설정**
1. **Domain settings** → **Custom domains** 이동
2. **"Add custom domain"** 클릭
3. **도메인 입력**: `serin-yun.com` (예시)
4. **DNS 설정** 안내에 따라 설정

#### **4.2 기본 도메인 사용**
- Netlify가 자동으로 제공하는 도메인 사용 가능
- 예: `serin-yun-portfolio.netlify.app`

---

## ✅ **5단계: 배포 확인 및 테스트**

### **A. 배포 상태 확인 (사용자 작업)**

#### **5.1 배포 상태 확인**
1. **Deploys** 탭에서 배포 상태 확인
2. **"Published"** 상태가 되면 배포 완료
3. **사이트 URL** 클릭하여 확인

#### **5.2 이메일 전송 테스트**
1. 배포된 사이트의 **Contact 섹션** 이동
2. **연락하기 폼** 작성
3. **"Send"** 버튼 클릭
4. **smartitpeyun@gmail.com**으로 이메일 수신 확인

### **B. 기능 테스트 (사용자 작업)**

#### **5.3 전체 기능 테스트**
- [ ] **다국어 전환**: KR/EN 버튼 정상 작동
- [ ] **반응형 디자인**: 모바일/태블릿/데스크톱 확인
- [ ] **모든 링크**: GitHub, LinkedIn, 이력서 다운로드
- [ ] **이메일 전송**: Contact 폼 정상 작동
- [ ] **이미지 로딩**: 모든 이미지 정상 표시

---

## 🔧 **6단계: 자동 배포 설정**

### **A. GitHub 연동 확인 (자동)**
- GitHub에 코드 푸시 시 자동으로 Netlify 재배포
- **"Deploy notifications"** 설정으로 배포 알림 받기

### **B. 환경 변수 설정 (사용자 작업)**
1. **Site settings** → **Environment variables**
2. 필요한 환경 변수 추가
3. **"Save"** 클릭

---

## 🚀 **7단계: 성능 최적화**

### **A. Netlify 기능 활용 (사용자 작업)**

#### **7.1 고급 기능 설정**
1. **"Deploy previews"** 활성화
2. **"Branch deploys"** 설정
3. **"Split testing"** 기능 활용

#### **7.2 CDN 및 캐싱**
- Netlify가 자동으로 CDN 제공
- **"Headers"** 설정으로 캐싱 최적화

---

## 📊 **8단계: 모니터링 및 분석**

### **A. Netlify Analytics (사용자 작업)**

#### **8.1 Analytics 설정**
1. **Analytics** 탭에서 방문자 통계 확인
2. **"Enable Netlify Analytics"** 활성화

#### **8.2 Google Analytics 연동**
1. Google Analytics 계정 생성
2. **Tracking ID** 복사
3. **HTML에 Google Analytics 코드** 추가

---

## 🔧 **문제 해결 가이드**

### **A. 배포 실패 시 (커서AI 작업)**

#### **A.1 로컬 테스트**
```bash
# 로컬에서 빌드 테스트
python3 -m http.server 3000

# 파일 권한 확인
chmod -R 755 .

# Git 상태 확인
git status
git add .
git commit -m "Fix deployment issues"
git push origin main
```

### **B. 이메일 전송 실패 시 (사용자 작업)**

#### **B.1 문제 진단**
1. **Netlify Forms** 활성화 확인
2. **Spam 폴더** 확인
3. **Form 필드명** 확인 (name, email, message)
4. **Netlify 대시보드**에서 폼 제출 기록 확인

### **C. 도메인 연결 문제 (사용자 작업)**

#### **C.1 DNS 설정 확인**
1. **DNS 설정** 확인
2. **SSL 인증서** 자동 발급 확인
3. **DNS 전파** 시간 대기 (최대 24시간)

---

## ✅ **배포 완료 체크리스트**

### **🤖 커서AI가 확인할 사항**
- [x] **Git 저장소**: 정상 초기화 및 연결
- [x] **코드 품질**: 문법 오류 없음
- [x] **파일 구조**: 모든 파일 정상 위치
- [x] **Git 커밋**: 모든 변경사항 커밋 완료

### **👤 사용자가 확인할 사항**
- [ ] **GitHub 저장소**: 코드 정상 업로드
- [ ] **Netlify 배포**: 사이트 정상 접속
- [ ] **이메일 전송**: Contact 폼 정상 작동
- [ ] **다국어 전환**: KR/EN 버튼 정상 작동
- [ ] **반응형 디자인**: 모든 디바이스에서 정상 작동
- [ ] **모든 링크**: GitHub, LinkedIn, 이력서 다운로드 정상
- [ ] **이미지 로딩**: 모든 이미지 정상 표시

---

## 🎯 **최종 결과**

### **배포 완료 후 받게 될 것들:**
- **라이브 웹사이트 URL**: `https://serin-yun-portfolio.netlify.app`
- **이메일 전송 기능**: Contact 폼을 통한 이메일 수신
- **자동 배포**: GitHub 푸시 시 자동 재배포
- **CDN**: 전 세계 빠른 로딩 속도
- **SSL 인증서**: HTTPS 보안 연결

### **🚀 성공 지표:**
- ✅ **사이트 접속**: 3초 이내 로딩
- ✅ **이메일 전송**: 5분 이내 수신
- ✅ **모바일 최적화**: 모든 화면 크기에서 정상 작동
- ✅ **SEO 최적화**: 검색엔진 최적화 완료

---

## 📞 **지원 및 도움**

### **문제 발생 시:**
1. **GitHub Issues**: 저장소 Issues 탭에서 문제 보고
2. **Netlify Support**: Netlify 대시보드에서 지원 요청
3. **커서AI**: 추가 도움이 필요한 경우 언제든 요청

### **추가 최적화:**
- **커스텀 도메인**: 개인 도메인 연결
- **Google Analytics**: 방문자 분석
- **성능 모니터링**: Core Web Vitals 최적화

---

**작성일**: 2025년 1월 21일  
**작성자**: AI Assistant  
**프로젝트**: Serin Yun Portfolio 배포 가이드
