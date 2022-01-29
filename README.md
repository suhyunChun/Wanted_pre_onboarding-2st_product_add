# **(☞ ﾟヮﾟ)☞ PRODUCT_ADD☜(ﾟヮﾟ ☜)**

15팀 과제

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

## **📆개발 기간**

- 기간: 2022년 1월 27일 ~ 2022년 1월 29일 (3일간)

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

> 최병현:
> - SetProductInfoTemplate과 SetProductInfoForm 두 Presentation Components를 사용하여 공통 되는 레이아웃들을 맵핑을 돌려 공통 스타일 속성을 적용되도록 하였으며 각 기능에 해당하는 Feature Components들이 조건부 랜더링되도록 코드를 작성하였습니다.
> - 상품 기본 정보의 각 세부 기능들인 Custom Check Box, Search FilterTag, Convert Unique Code 등을 구현하였습니다.
> 
> 조은총: 
> - 상품 옵션 부분을 담당하였다. 
> - 옵션 세트 추가 삭제, 옵션 세트 내부에 옵션 추가 삭제, 옵션 내부에 추가 옵션 상품 추가 삭제 기능을 버튼 클릭 마다 내부에 있는 컴포넌트에 고유한 id를 주어서 mapping해주었다. 
> - 상품 정상가와 판매가를 state로 저장하여 할인율을 계산하는 기능을 수행하였다.
> 
> 
> 전수현 :
> 
> - util함수 제작. ( uploadImageFile)
> - “상품 정보 고시” 컴포넌트 제작 및 기능 추가
>     - 전체 상품 리스트 (object array) map으로 출력 및 새로운 항목 추가 기능 담당
>     - 상품 리스트, 각각의 리스트 저장포맷 관리.
>     - 사용자가 입력한 값 콘솔창에 띄우기
> - 상품 소개 이미지, 구매자 추천 이미지 제작.
>     - 유틸의 이미지업로드함수 import후 추가
> 
> 조용우:
> 
> - 노출 기한 설정
>    - radio 타입 input을 이용하여 체크 박스를 만든 후 체크 시 console창에 ‘상품 노출 기한 : 제한 없음’, ‘상품 노출 기한 : 미노출’, ‘상품 노출 기한 : 노출 기간 설정’이라는 문구가 나타나게 하여 저장하기를 눌렀을 때 값을 저장할 준비를 했습니다. 
>   - MUI 라이브러리를 이용하여 달력을 구성하였으며 날짜 설정 시 console창에 시작과 마지막 날짜가 나타나게 하였습니다.
>   - MUI 를 이용하여 년/월/일/시/분 설정을 했습니다.   
> - 판매 기한 설정
>   - radio 타입 input을 이용하여 체크 박스를 만든 후 체크 시 console창에 ‘상품 판매 기한 : 제한 없음’, ‘상품 판매 기한 : 미판매’, ‘상품 판매 기한 : 노출 기간 설정’이라는 문구가 나타나게 하여 저장하기를 눌렀을 때 값을 저장할 준비를 했습니다.       
>   - MUI 라이브러리를 이용하여 달력을 구성하였으며 날짜 설정 시 console창에 시작과 마지막 날짜가 나타나게 하였습니다.  
> - 상품 배송 설정(사용자 배송일, 방문 수령, 선 주문)
>   - checked 타입 input 박스와 CSS를 이용하여 토글 버튼을 만든 후 입력 상황에 따라 console로 상태를 나타나도록 설정해뒀습니다.  
>   - MUI 라이브러리를 이용하여 달력을 구성하였으며 날짜 설정 시 console창에 시작과 마지막 날짜가 나타나게 하였습니다.
> - 네비게이션바
>   - 위와 옆 네비게이션바를 position:fixed로 고정 후 간단한 스타일 작업을 했습니다.
>     

## **❗소감 및 후기**

> 최병현:
> 
>이번 프로젝트에서는 공통되는 레이아웃 및 기능들이 많았다. 특히 각 기능들을 감싸고 있는 table style은 각 컴포넌트에서 매번 스타일을 적용해주는 것은 향휴 확장성을 고려해 보았을때 비효율적일 것이라는 생각이 들었다. 이에 React Flux 패턴을 지켜주며 조건부 랜더링이 되도록 코드를 구성하는데에 많은 공부가 된 좋은 경험이었다.
>
> 조은총:
> 
> 항상 객체배열이 먼저 만들어진 상태에서 mapping을 하는 것은 몇 번 해보아서 익숙한데 역으로 한다는 것을 구현하는 과정이 재밌었다. state안에 배열을 조작하는 실력이 더 향상됐다. state값을 setstate로 갱신하고 그 state값을 이용해서 계산할 때 항상 한 박자씩 늦게 state값을 받아와서 계산되는 경우가 많았는데 이 부분을 useEffect와 묶어서 state값이 update될 때마다 useEffect안에 계산하는 함수를 집어넣어서 해결한게 앞으로도 이런 경우가 생겼을 때 잘 해결할 수 있을거 같아서 좋은 경험이였다.
>
> 전수현:
> 
> 짧은 시간이었지만 많은 것을 배웠던 프로젝트라고 생각을 합니다. 다양한 기능을 가지고 있는 컴포넌트, 그리고 많은 컴포넌트를 포함하는 컨테이너가 만들어지는 과정을 공부할 수 있었고, 자주 회의를 통해 모르는 것들을 서로에게 묻고 알려주면서 팀워크를 배울 수 있었다고 생각합니다. 또한 포크한 레포지토리에서 깃 관리하는 법 (fetch, merge, pull.. )과 새로운  css 스타일인 styled component 방식을 직접 경험해보면서 배울 수 있었던 기회가 되었던 것 같습니다. 
> 
> 조용우:
> 
> 팀 과제를 하며 정보를 공유하고 작업물을 만드는 과정을 통해 정말 많은 것을 배웠습니다. styled-component와 Git을 많이 사용하여 더욱 확실하게 알게 되었으며, 팀원들의 도움으로 react component의 올바른 구조와 틀에 대해서도 많이 알게 되었습니다. 작업을 하며 input태그에 대해 더욱 깊이 있게 알게 되었으며 console로 state를 나타내는 단계에서 호이스팅에 관해 직접 알게되고 원하는 위치에서 console을 호출하는 방법에 대해서도 자세히 알게 되었습니다. 
> 

## **📕레퍼런스**

- 이 프로젝트는 [원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6)으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
