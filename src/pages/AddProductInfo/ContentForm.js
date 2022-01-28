import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import SetDefaultProductInfo from './SetDefaultProductInfo/SetDefaultProductInfo';
import SetDefaultDelivery from './SetDelivery/SetDelivery';
import SetDefaultExposureAndPeriod from './SetExposureAndPeriod/SetExposureAndPeriod';
import SetDefaultProductFrontInfo from './SetProductFrontInfo/SetProductFrontInfo';
import SetDefaultProductEtc from './SetProductEtc/SetProductEtc';
import SetProductImage from './SetProductImage';
import SetDefaultProductBenefit from './SetProductBenefit/SetProductBenefit';

const ContentForm = ({ header, category }) => {
  const [imgArray, setImgArray] = useState([]);
  const [recomArray, setRecomArray] = useState([]);

  const checkCurrentTable = useCallback(() => {
    switch (header) {
      case '기타':
        return <SetDefaultProductEtc category={category} />;
      case '상품 혜택 허용 설정':
        return <SetDefaultProductBenefit category={category} />;
      case '노출 기간 판매 설정':
        return <SetDefaultExposureAndPeriod category={category} />;
      case '상품 기본 정보':
        return <SetDefaultProductInfo category={category} />;
      case '상품 배송 설정':
        return <SetDefaultDelivery category={category} />;

      default:
        return null;
    }
  }, [header]);

  return <Container>{checkCurrentTable()}</Container>;
};

const Container = styled.div`
  padding: 15px 10px;
`;

export default ContentForm;
