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

    console.log(tmpTotalProductList);
    setTotalProductList(tmpTotalProductList);
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
      {copiedProductList.map(item => (
        <>
          {item.question !== '' && item.answer === '' ? (
            <>
              {' '}
              {item.question}
              <input placeholder={item.question + '을 입력을 해주세요'} />
            </>
          ) : (
            <>
              <input placeholder="항목 제목 자유 입력" />{' '}
              <input placeholder="내용을 입력해주세요." />
              <button>삭제</button>
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
