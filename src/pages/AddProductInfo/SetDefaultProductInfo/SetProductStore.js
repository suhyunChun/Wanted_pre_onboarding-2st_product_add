import React from 'react';
import styled from 'styled-components';

const SetProductStore = ({ currentOptionNum }) => {
  return (
    <Container>
      <p className="currentProductStoreNum">20개</p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 15px;
  margin-left: 15px;

  & .currentProductStoreNum {
    font-weight: 600;
  }
`;

export default SetProductStore;
