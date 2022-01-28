import React from 'react';
import styled from 'styled-components';

const AdditonOptionProduct = ({ id, countArray, setCountArray }) => {
  const additionOptionProductDelete = () => {
    setCountArray(countArray.filter(ar => ar !== id));
  };

  return (
    <>
      <div />
      <input placeholder="추가 옵션명(필수)" />
      <input placeholder="추가 옵션 정상가(필수)" />
      <span>원</span>
      <button onClick={additionOptionProductDelete}>추가옵션상품삭제</button>
    </>
  );
};

export default AdditonOptionProduct;
