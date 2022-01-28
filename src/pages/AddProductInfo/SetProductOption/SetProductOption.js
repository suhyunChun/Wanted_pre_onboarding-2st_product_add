import React, { useState } from 'react';
import styled from 'styled-components';
import OptionSet from './OptionSet';

const SetProductOption = () => {
  const [arrayOptionSet, setArrayOptionSet] = useState([]);
  const [optionSetAddClickCount, setOptionSetAddClickCount] = useState(0);

  const clickShowAddOptionSet = () => {
    setOptionSetAddClickCount(optionSetAddClickCount + 1);
    console.log(optionSetAddClickCount);
    setArrayOptionSet(arrayOptionSet.concat([optionSetAddClickCount + 1]));
    console.log(arrayOptionSet);

    /* const nextId = arrayOptionSet.length + 1;
    setArrayOptionSet(arrayOptionSet.concat([nextId]));
    console.log(arrayOptionSet.concat([nextId])); */
  };

  return (
    <ProductOptionContainer>
      <Header>
        <p>상품 옵션*</p>
        <button onClick={clickShowAddOptionSet}>+옵션 세트 추가</button>
      </Header>
      {arrayOptionSet.map((arrayOptionSetId, i) => {
        return (
          <OptionSet
            key={i}
            id={arrayOptionSetId}
            arrayOptionSet={arrayOptionSet}
            setArrayOptionSet={setArrayOptionSet}
          />
        );
      })}
    </ProductOptionContainer>
  );
};

const ProductOptionContainer = styled.div`
  margin: 0 50px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  & > p {
    background-color: pink;
  }
`;

export default SetProductOption;
