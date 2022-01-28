import React, { useCallback } from 'react';
import styled from 'styled-components';
import SetDefaultProductInfo from './SetDefaultProductInfo/SetDefaultProductInfo';
import SetDefaultDelivery from './SetDelivery/SetDelivery';
import SetDefaultExposureAndPeriod from './SetExposureAndPeriod/SetExposureAndPeriod';

const ContentForm = ({ header, category }) => {
  const checkCurrentTable = useCallback(() => {
    switch (header) {
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
