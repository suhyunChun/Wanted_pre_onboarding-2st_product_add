import React, { useState } from 'react';
import styled from 'styled-components';

const SetProductFrontInfoInner = ({
  productListOfEachItem,
  numberOfProduct,
  setTotalProductList,
  totalProductList,
}) => {
  const [copiedProductList, setCopiedProductList] = useState([
    ...productListOfEachItem,
  ]);

  const FrontInfoInner = styled.div`
    padding: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
  `;
  const FrontInfoTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const FrontInfoCancleBtn = styled.button`
    padding: 8px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid lightgrey;
  `;
  const FrontInformation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  `;

  const AddQuestionInFrontINformation = e => {
    let tmpProductList = [...copiedProductList];
    let tmpTotalProductList = [...totalProductList[e.target.name]];
    tmpProductList.push({ question: '', answer: '' });
    totalProductList[e.target.name] = tmpProductList;
    setCopiedProductList(tmpProductList);
    setTotalProductList(totalProductList);
  };

  const handleDeletingFrontInfoForm = e => {
    let tmpTotalProductList = [...totalProductList];
    tmpTotalProductList.splice(e.target.name, 1);
    setTotalProductList(tmpTotalProductList);
  };

  const handleDeletionQuestion = e => {
    let idx = e.target.name;
    let tmpProductListOfEachItem = [...productListOfEachItem];
    tmpProductListOfEachItem.splice(idx, 1);
    let tmpTotalProductList = [...totalProductList];
    tmpTotalProductList[numberOfProduct] = tmpProductListOfEachItem;
    console.log(tmpTotalProductList);
    setTotalProductList(tmpTotalProductList);
  };
  const storeValueInFrontInfo = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let tmpProductList = [...copiedProductList];
    for (let i = 0; i < tmpProductList.length; i++) {
      if (tmpProductList[i].question === name) {
        tmpProductList[i].answer = value;
      }
    }
    let tmpList = [...totalProductList];
    tmpList[event.target.numberOfProduct] = tmpProductList;
    setTotalProductList(tmpList);
  };

  return (
    <FrontInfoInner>
      <FrontInfoTitle>
        정보고시 {numberOfProduct + 1}
        <FrontInfoCancleBtn
          name={numberOfProduct}
          onClick={handleDeletingFrontInfoForm}
        >
          {' '}
          삭제{' '}
        </FrontInfoCancleBtn>
      </FrontInfoTitle>
      {copiedProductList.map((item, index) => (
        <>
          {item.question !== '' ? (
            <>
              {' '}
              {item.question}
              <input
                name={item.question}
                value={item.answer}
                placeholder={item.question + '을 입력을 해주세요'}
                onChange={storeValueInFrontInfo}
              />
            </>
          ) : (
            <>
              <input
                placeholder="항목 제목 자유 입력"
                name={item.question}
                value={item.question}
                onChange={storeValueInFrontInfo}
              />{' '}
              <input
                name={item.question}
                value={item.answer}
                placeholder="내용을 입력해주세요."
                onChange={storeValueInFrontInfo}
              />
              <button name={index} onClick={handleDeletionQuestion}>
                삭제
              </button>
            </>
          )}
        </>
      ))}
      <button name={numberOfProduct} onClick={AddQuestionInFrontINformation}>
        {' '}
        +항목 추가
      </button>
    </FrontInfoInner>
  );
};
export default SetProductFrontInfoInner;
