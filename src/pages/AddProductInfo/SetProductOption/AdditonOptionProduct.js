import React from 'react';
import styled from 'styled-components';
import DeleteBtn from './deleteBtnStyle';

const AdditonOptionProduct = ({
  id,
  additonOptionProductInfo,
  setAddtionOptionProductInfo,
}) => {
  const additionOptionProductDelete = () => {
    setAddtionOptionProductInfo(
      additonOptionProductInfo.filter(ar => ar.id !== id)
    );
  };

  const addtionOptionNameInfoAdd = e => {
    const addtionOptionName = e.target.value;
    console.log(addtionOptionName);

    additonOptionProductInfo.map(info => {
      if (info.id === id) return (info.addtionOptionName = addtionOptionName);
    });
    console.log(additonOptionProductInfo);
  };

  const addtionOptionPriceInfoAdd = e => {
    const addtionOptionPrice = e.target.value;
    additonOptionProductInfo.map(info => {
      if (info.id === id) return (info.addtionOptionPrice = addtionOptionPrice);
    });
    console.log(additonOptionProductInfo);
  };

  return (
    <AdditonOptionProductSection>
      <section>
        <div />
        <input
          placeholder="추가 옵션명(필수)"
          onInput={addtionOptionNameInfoAdd}
        />
      </section>
      <section>
        <input
          placeholder="추가 옵션 정상가(필수)"
          onInput={addtionOptionPriceInfoAdd}
        />
        <span>원</span>
      </section>
      <DeleteBtn onClick={additionOptionProductDelete}>삭제</DeleteBtn>
    </AdditonOptionProductSection>
  );
};

const AdditonOptionProductSection = styled.section`
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  & div {
    width: 30px;
    height: 30px;
    border: 2px solid gray;
    border-top-width: 0px;
    border-right-width: 0px;
    border-radius: 3px;
  }

  & > section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & input {
    width: 250px;
    height: 40px;
  }
`;

export default React.memo(AdditonOptionProduct);
