import React, { useState } from 'react';
import styled from 'styled-components';

const SetProductIntroduce = () => {
  const [text, setText] = useState('');

  const setCurrentProductInfo = event => {
    const currentText = event.target.value;

    setText(currentText);
  };

  return (
    <Container>
      <StyledInput
        onChange={setCurrentProductInfo}
        value={text}
        placeholder="상품 구성 소개를 입력해 주세요."
      />
    </Container>
  );
};

const Container = styled.div``;

const StyledInput = styled.input`
  width: 650px;
  padding: 12px 0 12px 10px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #cecece;
  border-radius: 3px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d3d1d1;
  }
`;

export default SetProductIntroduce;
