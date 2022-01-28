import React, { useState } from 'react';
import styled from 'styled-components';
import SetProductFrontInfoInner from './SetProductFrontInfoInner';

const SetProductFrontInfoBox = () => {
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  const productListFormat = [
    { question: '제품명 / 중량', answer: '' },
    { question: '원산지/ 원재료 함량', answer: '' },
    { question: '등급', answer: '' },
    { question: '보관', answer: '' },
    { question: '식품 유형', answer: '' },
  ];
  const [productList, setProductList] = useState(productListFormat);
  const [totalProductList, setTotalProductList] = useState([productList]);

  const FrontInfoContainer = styled.div`
    background-color: #e4e4e4;
    width: 800px;
    height: 100%;
    padding: 30px;
  `;

  const FrontInforAddingBtn = styled.button``;

  const addFormInFrontInfo = () => {
    setTotalProductList(totalProductList.concat([productListFormat]));
    setNumberOfProduct(numberOfProduct + 1);
  };
  return (
    <FrontInfoContainer>
      {totalProductList.map((item, index) => (
        <SetProductFrontInfoInner
          productListOfEachItem={item}
          totalProductList={totalProductList}
          setTotalProductList={setTotalProductList}
          numberOfProduct={index}
        />
      ))}
      <FrontInforAddingBtn onClick={addFormInFrontInfo}>
        +정보고시 추가
      </FrontInforAddingBtn>
    </FrontInfoContainer>
  );
};

export default SetProductFrontInfoBox;
