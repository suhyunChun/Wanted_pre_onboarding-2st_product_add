import React, { useState } from 'react';
import styled from 'styled-components';
import AddProductInfoForm from './AddProductInfoForm';

const AddProductInfoTemplate = () => {
  const [addProductInfoList, setAddProductInfoList] = useState([
    {
      header: '노출 기간 판매 설정',
      categories: ['상품 노출 기한', '상품 판매 기한'],
    },
    {
      header: '상품 기본 정보',
      categories: [
        '카테고리',
        '필터 태그',
        '상품명',
        '상품 구성 소개 정보 *',
        '상품 썸네일',
        '상품 대표 이미지',
        '상품 총 재고 *',
      ],
    },
    { header: '상품 옵션', categories: [] },
    { header: '상품 소개 이미지', categories: [] },
    { header: '구매자 추천 이미지', categories: [] },
    { header: '상품 정보 고시', categories: [] },
    {
      header: '상품 배송 설정',
      categories: ['상품 배송 기간'],
    },
    { header: '상품 혜택 허용 설정', categories: ['마일리지 적립'] },
    { header: '기타', categories: ['감사 카드 제공'] },
  ]);

  return (
    <Container>
      <PublishProductContainer>
        <p className="PublishProductInfo">상품 등록</p>
      </PublishProductContainer>
      <SetProductInfoContainer>
        {addProductInfoList.map(({ header, categories }, index) => {
          return (
            <AddProductInfoForm
              key={index}
              header={header}
              categories={categories}
            />
          );
        })}
      </SetProductInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  margin: 200px auto;
  border: 1px solid #cecece;
`;

const PublishProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  border-bottom: 1px solid #cecece;

  & .PublishProductInfo {
    margin: 20px 0 20px 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const SetProductInfoContainer = styled.div`
  margin: 0 30px;
`;

export default AddProductInfoTemplate;
