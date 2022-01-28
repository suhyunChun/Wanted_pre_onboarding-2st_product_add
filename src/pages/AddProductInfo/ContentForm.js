import React, { useCallback } from 'react';
import styled from 'styled-components';
import SetDefaultProductInfo from './SetDefaultProductInfo/SetDefaultProductInfo';
import SetDefaultExposureAndPeriod from './SetExposureAndPeriod/SetExposureAndPeriod';
import SetDefaultProductFrontInfo from './SetProductFrontInfo/SetProductFrontInfo';

const ContentForm = ({ header, category }) => {
  const checkCurrentTable = useCallback(() => {
    switch (header) {
      case '상품 정보 고시':
        return <SetDefaultProductFrontInfo category={category} />;

      case '노출 기간 판매 설정':
        return <SetDefaultExposureAndPeriod category={category} />;

      case '상품 기본 정보':
        return <SetDefaultProductInfo category={category} />;
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
