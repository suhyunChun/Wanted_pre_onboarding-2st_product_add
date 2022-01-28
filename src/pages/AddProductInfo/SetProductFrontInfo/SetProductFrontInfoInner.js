import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

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
    font-size: 20px;
    font-weight: 900;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  `;
  const FrontInfoCancleBtn = styled.button`
    padding: 8px;
    border-radius: 8px;
    width: 60px;
    background-color: white;
    border: 1px solid lightgrey;
  `;
  const FrontInfoInfoDeleteBtn = styled.button`
    padding: 8px;
    border-radius: 8px;
    width: 70px;
    height: 40px;
    color: red;
    background-color: white;
    border: 1px solid lightgrey;
  `;
  const FrontInfoInfoAddBtn = styled.button`
    padding: 8px;
    border-radius: 8px;
    width: 140px;
    height: 40px;
    color: darkblue;
    margin: 10px;
    background-color: white;
    border: 1px solid lightgrey;
  `;
  const FrontInformation = styled.div`
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
    input {
      width: 380px;
      height: 40px;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid lightgrey;
    }
    .addedQuestion {
      width: 200px;
    }
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
    console.log('>>', e.target.name, tmpTotalProductList);
    tmpTotalProductList.splice(e.target.name, 1);
    setTotalProductList(tmpTotalProductList);
  };

  const handleDeletionQuestion = e => {
    let idx = e.target.name;
    let tmpProdcutListOfEachItem = [...copiedProductList];
    tmpProdcutListOfEachItem.splice(idx, 1);
    let tmpTotalProductList = [...totalProductList];
    tmpTotalProductList[numberOfProduct] = [...tmpProdcutListOfEachItem];
    console.log(tmpTotalProductList);
    setCopiedProductList(tmpProdcutListOfEachItem);
    setTotalProductList(tmpTotalProductList);
    /*let tmpProductListOfEachItem = [...productListOfEachItem];
    console.log(tmpProductListOfEachItem, copiedProductList);
    tmpProductListOfEachItem.splice(idx, 1);
    console.log(copiedProductList);
    let tmpTotalProductList = [...totalProductList];
    tmpTotalProductList[numberOfProduct] = tmpProductListOfEachItem;
    setTotalProductList(tmpTotalProductList);*/
  };

  const storeValueInFrontInfo = (event, index) => {
    const target = event.target;
    const value = target.value;
    let tmpProductList = [...copiedProductList];
    if (target.className === 'addedQuestion') {
      tmpProductList[index].question = value;
    } else {
      tmpProductList[index].answer = value;
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
      <FrontInformation>
        {copiedProductList.map((item, index) => (
          <>
            {index <= 4 ? (
              <div>
                {' '}
                {item.question}
                <input
                  name={item.question}
                  value={item.answer}
                  placeholder={item.question + '을 입력을 해주세요'}
                  onChange={event => storeValueInFrontInfo(event, index)}
                />
              </div>
            ) : (
              <div>
                <input
                  className="addedQuestion"
                  placeholder="항목 제목 자유 입력"
                  name={item.question}
                  value={item.question}
                  onChange={event => storeValueInFrontInfo(event, index)}
                />{' '}
                <input
                  name={item.question}
                  value={item.answer}
                  placeholder="내용을 입력해주세요."
                  onChange={event => storeValueInFrontInfo(event, index)}
                />
                <FrontInfoInfoDeleteBtn
                  name={index}
                  onClick={handleDeletionQuestion}
                >
                  삭제
                </FrontInfoInfoDeleteBtn>
              </div>
            )}
          </>
        ))}
        <FrontInfoInfoAddBtn
          name={numberOfProduct}
          onClick={AddQuestionInFrontINformation}
        >
          {' '}
          +항목 추가
        </FrontInfoInfoAddBtn>
      </FrontInformation>
    </FrontInfoInner>
  );
};
export default SetProductFrontInfoInner;
