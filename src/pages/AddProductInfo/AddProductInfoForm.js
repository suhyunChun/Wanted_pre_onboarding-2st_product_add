import React from 'react';
import styled from 'styled-components';

const AddProductInfoForm = ({ header, categories, children }) => {
  // 그래서 여기서 props로 넘겨받은 header에 제목 넣어주고
  // categories 개수만큼 한번 더 map돌리고 각 세부 기능에 들어가는 내용들은
  // children으로 받아서 Cotent 영역에 넣어줘서 동적랜더링되도록 로직을 짜봤는데
  // 이게 제대로 될지는 모르겠네요ㅎㅎ
  // example
  // 예를 들어서
  // <AddProductInfoForm> => 얘한테 children으로 넘겨줘서 form style 적용받게 할려고 하는데 될런지 모르겠네요
  //   content JSX => 우리가 짠 이 넵넵
  // </AddProductInfoForm>

  // 노출 및 판매 기간 설정', categories: ['상품 노출 기한', '상품 판매 기한']},
  //         { header: '상품 기본 정보', categories: ['카테고리', '필터 태그', '상품명', '상품구성소개 정보*', '상품 썸네일', '상품 대표 이미지', '상품 총 재고 *']},
  //         { header: '상품 옵션',

  const checkCurrentHeader = () => {
    switch (header) {
      case '노출 및 판매 기간 설정':
        <TestOne />;
        break;
      case '불라 불라':
        <TestTwo />;
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Header>{header}</Header>{' '}
      {categories.length === 0
        ? checkCurrentHeader()
        : categories.map((category, index) => {
            return (
              <ContentContainer>
                <CategoryContainer>{category}</CategoryContainer>
                <ContentForm></ContentForm>
              </ContentContainer>
            );
          })}
    </Container>
  );
};

const TestOne = () => {
  return (
    <>TestOneTestOneTestOneTestOneTestOneTestOneTestOneTestOneTestOneTestOne</>
  );
};

const TestTwo = () => {
  return <>😑😑😑😑😑😑😑😑😑😑</>;
};

const Container = styled.div``;

const Header = styled.header``;

const ContentContainer = styled.div``;

const CategoryContainer = styled.div``;

const ContentForm = styled.div``;

export default AddProductInfoForm;
