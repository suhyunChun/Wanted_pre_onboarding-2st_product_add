# **(☞ ﾟヮﾟ)☞ PRODUCT_ADD☜(ﾟヮﾟ ☜)**

15팀 과제

## **📆개발 기간**

- 기간: 2022년 1월 27일 ~ 2022년 1월 29일 (3일간)


## **📕레퍼런스**

- 이 프로젝트는 [원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6)으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

# **༼ つ ◕*◕ ༽つ TEAM*총대장님과 아이들 | 과제**

## **👫 팀원**

- 조은총, 전수현, 최병현, 조용우
- 배포주소 : [https://hardcore-shannon-4293b9.netlify.app/](https://hardcore-shannon-4293b9.netlify.app/)
- Front-end: React(Funiction-Component)_reactr-router-dom(V6), CSS Module, JavaScript(ES6)
- 협업툴: Slack, Notion, Github

## **✔과제 구현 목록**

- 노출 및 판매기간 설정
    - 상품 노출 기한
    - 판매 기한 설정
- 상품 기본 정보
    - 카테고리 지정
    - 필터 태크 지정
    - 상품명 및 상품코드
    - 상품 구성 소개 정보
    - 상품 썸네일
    - 상품 대표이미지
    - 상품 총 재고 영역
- 상품 옵션
    - 상품 옵션 세트 등록
    - 상품 옵션 등록
    - 추가 옵션 상품 등록
    - 할인율 계산
- 상품 소개 이미지
- 구매자 추천 이미지
- 상품 정보 고시 알림 설정
- 상품 배송 설정
    - 사용자 배송일 출발일 지정
    - 방문 수령 지정
    - 선 주문 예약 배송 지정
- 마일리지 적립 허용 영역
- 감사 카드 제공 여부 설정
- 저장하기 버튼
- 네비게이션바


## **🕹설치 및 시작하는 법**

1. git clone
2. npm install
3. npm run start

## **📃프로젝트 구조**
```
├─public
│   ├─index.html
src
│  config.js
│  index.js
│  Router.js
│
├─components
│  ├─common
│  │      TextInput.style.js
│  │
│  ├─SideNav
│  │      SideNav.js
│  │
│  └─TopNav
│          TopNav.js
│
├─data
│      addProductInfoList.json
│      tagListData.json
│
├─pages
│  └─AddProductInfo
│      │  AddProductInfoForm.js
│      │  AddProductInfoPage.js
│      │  AddProductInfoTemplate.js
│      │  BindingContentContainer.js
│      │  ContentForm.js
│      │  SetProductImage.js
│      │
│      ├─SetDefaultContainerInfo
│      │      SetDefaultContainerInfo.js
│      │
│      ├─SetDefaultProductInfo
│      │      SetCategory.js
│      │      SetDefaultProductInfo.js
│      │      SetFilterTag.js
│      │      SetProductCodeName.js
│      │      SetProductFrontImage.js
│      │      SetProductIntroduce.js
│      │      SetProductStore.js
│      │      SetProductThumbnail.js
│      │
│      ├─SetDelivery
│      │      SetDelivery.js
│      │      SetPickDeliveryDate.js
│      │      SetPickup.js
│      │      SetPreDeliveryDate.js
│      │
│      ├─SetExposureAndPeriod
│      │      SetExposure.js
│      │      SetExposureAndPeriod.js
│      │      SetPeriod.js
│      │
│      ├─SetProductBenefit
│      │      SetProductBenefit.js
│      │      SetProductBenefitContainer.js
│      │
│      ├─SetProductEtc
│      │      SetProductEtc.js
│      │      SetProductEtcContainer.js
│      │
│      ├─SetProductFrontInfo
│      │      SetProductFrontInfo.js
│      │      SetProductFrontInfoBox.js
│      │      SetProductFrontInfoInner.js
│      │
│      └─SetProductOption
│              AdditonOptionProduct.js
│              deleteBtnStyle.js
│              Option.js
│              OptionSet.js
│              SetProductOption.js
│
├─styles
│      GlobalStyle.js
│      theme.js
│
└─utils
│  getTarget.js
│  ToggleButton.js
│  UploadImageFile.js
│
└─Hooks
```

## **🔎구현 기능 및 개인 역할**


> 전수현 :
> 
> - util함수 제작. ( uploadImageFile)
> - “상품 정보 고시” 컴포넌트 제작 및 기능 추가
>     - 전체 상품 리스트 (object array) map으로 출력 및 새로운 항목 추가 기능 담당
>     - 상품 리스트, 각각의 리스트 저장포맷 관리.
>     - 사용자가 입력한 값 콘솔창에 띄우기
> - 상품 소개 이미지, 구매자 추천 이미지 제작.
>     - 유틸의 이미지업로드함수 import후 추가


## **❗소감 및 후기**


> 전수현:
> 
> 짧은 시간이었지만 많은 것을 배웠던 프로젝트라고 생각을 합니다. 다양한 기능을 가지고 있는 컴포넌트, 그리고 많은 컴포넌트를 포함하는 컨테이너가 만들어지는 과정을 공부할 수 있었고, 자주 회의를 통해 모르는 것들을 서로에게 묻고 알려주면서 팀워크를 배울 수 있었다고 생각합니다. 또한 포크한 레포지토리에서 깃 관리하는 법 (fetch, merge, pull.. )과 새로운  css 스타일인 styled component 방식을 직접 경험해보면서 배울 수 있었던 기회가 되었던 것 같습니다. 
> 


