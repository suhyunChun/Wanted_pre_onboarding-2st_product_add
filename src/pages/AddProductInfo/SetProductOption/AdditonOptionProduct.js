import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from './deleteBtnStyle';

const AdditonOptionProduct = ({
  id,
  additonOptionProductInfo,
  setAddtionOptionProductInfo,
}) => {
  const [addtionOptionName, setAddtionOptionName] = useState();

  const additionOptionProductDelete = () => {
    setAddtionOptionProductInfo(
      additonOptionProductInfo.filter(ar => ar.id !== id)
    );
  };

  const addtionOptionNameInfoAdd = e => {
    const addtionOptionName = e.target.value;
    console.log(addtionOptionName);
    // setAddtionOptionName(e.target.value);
    const b = additonOptionProductInfo.map(info => {
      if (info.id === id) return (info.addtionOptionName = addtionOptionName);
    });
    console.log(additonOptionProductInfo);
    setAddtionOptionProductInfo([...additonOptionProductInfo]);
  };

  const addtionOptionPriceInfoAdd = e => {
    const addtionOptionPrice = e.target.value;
    const b = additonOptionProductInfo.map(info => {
      if (info.id === id) return (info.addtionOptionPrice = addtionOptionPrice);
    });
    console.log(additonOptionProductInfo);
    setAddtionOptionProductInfo([...additonOptionProductInfo]);
  };

  return (
    <AdditonOptionProductSection>
      <div />
      <input
        placeholder="추가 옵션명(필수)"
        onInput={addtionOptionNameInfoAdd}
      />
      <input
        placeholder="추가 옵션 정상가(필수)"
        onInput={addtionOptionPriceInfoAdd}
      />
      <span>원</span>
      <DeleteBtn onClick={additionOptionProductDelete}>
        추가옵션상품삭제
      </DeleteBtn>
      {id}
    </AdditonOptionProductSection>
  );
};

const AdditonOptionProductSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  & > div {
    width: 30px;
    height: 30px;
    border: 2px solid gray;
    border-top-width: 0px;
    border-right-width: 0px;
    border-radius: 3px;
    position: relative;
    bottom: 11px;
  }
`;

export default React.memo(AdditonOptionProduct);
