import React, { useCallback } from 'react';
import styled from 'styled-components';
import SetDefaultProductInfo from './SetDefaultProductInfo/SetDefaultProductInfo';

const ContentForm = ({ header, category }) => {
  const checkCurrentTable = useCallback(() => {
    switch (header) {
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
