# 📄 프로젝트 소개

반복적인 출석 체크와 일급 계산 과정을 간소화하기 위해, 직원 출석 현황을 기록하고 자동으로 일급을 계산해주는 프로그램을 개발하였습니다. 이 시스템을 통해 인사 담당자는 보다 빠르고 정확하게 데이터를 관리할 수 있을 뿐더러 직업들 또한 자신의 일급에 대해 자세히 볼수 있습니다.



## 🛠 사용 기술 및 도구

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Python, Django
- **Database**: SQLite3
- **Version Control**: Git, GitHub
- **DB 모델링 툴**:  DBeaver


## 🛠️ 설치 방법 (Installation)

이 프로젝트는 **React (프론트엔드)**와 **Django (백엔드)**를 사용하여 개발되었으며, **SQLite3**를 데이터베이스로 사용합니다.

## 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

## 2. 백엔드(Django) 설정

### 1.가상환경 생성 및 활성화

```bash
python -m venv venv
# macOS/Linux
source venv/bin/activate
# Windows
venv\Scripts\activate
```
### 2. 패키지 설치 

```bash
pip install -r requirements.txt
```

### 3. 데이터베이스 초기화 

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4.개발 서버 실행

```bash
python manage.py runserver
```

## 3.프론트엔드(React) 설정

## 1. frontend 디렉토리로 이동

```bash
cd frontend
```

## 1. frontend 디렉토리로 이동

```bash
npm install
```

## 1. frontend 디렉토리로 이동

```bash
npm start
```

##  🔍코드 리뷰 보기

- [로그인 컴포넌트 리뷰](./Code_Review/login.md)
- [캘린더 컴포넌트 리뷰](./Code_Review/calender.md)
- [어드민페이지 컴포넌트 리뷰](./Code_Review/adminPage.md)
