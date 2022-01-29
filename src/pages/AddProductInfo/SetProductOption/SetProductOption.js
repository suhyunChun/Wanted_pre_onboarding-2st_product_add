import React, { useState } from 'react';
import styled from 'styled-components';
import OptionSet from './OptionSet';
import TestProductOption from './TestProductOption';

const SetProductOption = () => {
  const [arrayOptionSet, setArrayOptionSet] = useState([]);
  const [optionSetAddClickCount, setOptionSetAddClickCount] = useState(0);

  const clickShowAddOptionSet = () => {
    setOptionSetAddClickCount(optionSetAddClickCount + 1);
    console.log(optionSetAddClickCount);
    setArrayOptionSet(arrayOptionSet.concat([optionSetAddClickCount + 1]));
    console.log(arrayOptionSet);
  };

  return (
    <ProductOptionContainer>
      <Header>
        <OptionSetAddBtn onClick={clickShowAddOptionSet}>
          +옵션 세트 추가
        </OptionSetAddBtn>
      </Header>
      {arrayOptionSet.length > 0 ? (
        arrayOptionSet.map((arrayOptionSetId, i) => {
          return (
            <OptionSet
              key={arrayOptionSetId}
              id={arrayOptionSetId}
              arrayOptionSet={arrayOptionSet}
              setArrayOptionSet={setArrayOptionSet}
            />
          );
        })
      ) : (
        <OptionSetAddAlert>
          <p>옵션세트를 추가하여 옵션을 구성해 주세요</p>
        </OptionSetAddAlert>
      )}
    </ProductOptionContainer>
  );
};

const ProductOptionContainer = styled.div`
  margin: 0 10px;
  width: 100%;
`;

const Header = styled.header``;

const OptionSetAddBtn = styled.button`
  border-color: blue;
  border-radius: 4px;
  background-color: white;
  height: 50px;
  padding: 10px 20px;
  font-size: 18px;
`;

const OptionSetAddAlert = styled.div`
  width: 100%;
  height: 500px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export default SetProductOption;
