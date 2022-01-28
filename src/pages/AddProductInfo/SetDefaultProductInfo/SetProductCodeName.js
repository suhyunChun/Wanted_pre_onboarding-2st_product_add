import React, { useState } from 'react';
import styled from 'styled-components';
import { v1 as uuid } from 'uuid';

const SetProductCodeName = () => {
  const [text, setText] = useState('');
  const [codeName, setCodeName] = useState('');

  const convertCodeName = event => {
    const currentTargetKeyword = event.target.value;

    const currentCodeName =
      currentTargetKeyword.length === 0 ? '' : uuid(currentTargetKeyword);

    setText(currentTargetKeyword);
    setCodeName(currentCodeName);
  };

  return (
    <Container>
      <ConvertInputBar
        value={text}
        sort="codeName"
        placeholder="상품명을 입력해주세요."
        onChange={convertCodeName}
      />
      <ConvertResultContainer>
        <ResultGuide>상품 코드</ResultGuide>
        <CodeNameContainer>
          <span className="codeName">{codeName}</span>
        </CodeNameContainer>
      </ConvertResultContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ConvertInputBar = styled.input`
  width: 280px;
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

const ConvertResultContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  & .codeName {
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const CodeNameContainer = styled.div`
  min-width: 278px;
  min-height: 56px;
  padding: 18.5px 10px;
  border: 1px solid #ebeaea;
  border-left: none;
`;

const ResultGuide = styled.div`
  padding: 20px 10px;
  background-color: #f3f1f1;
  border-right: 1px solid #ebeaea;
`;

export default SetProductCodeName;
