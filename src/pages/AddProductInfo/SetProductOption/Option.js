import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AdditonOptionProduct from './AdditonOptionProduct';
import DeleteBtn from './deleteBtnStyle';
import uuid from 'react-uuid';

const Option = ({ id, arrayOption, setArrayOption }) => {
  const [additonOptionProductInfo, setAddtionOptionProductInfo] = useState([]);
  // const [btnClickCount, setBtnClickCount] = useState(0);

  const [discountRate, setDiscountRate] = useState(0);
  const [realPrice, setRealPrice] = useState(null);
  const [normalPrice, setNormalPrice] = useState(null);
  /* let realPrice = 0;
  let normalPrice = 0; */

  const additonOptionProductAddBtn = () => {
    // setBtnClickCount(btnClickCount + 1);
    // console.log(btnClickCount + 1);
    setAddtionOptionProductInfo(
      additonOptionProductInfo.concat([{ id: uuid() }])
    );
    console.log(additonOptionProductInfo);
  };

  const optionDelete = () => {
    console.log(id);
    console.log(arrayOption);
    setArrayOption(arrayOption.filter(array => array.id !== id));
  };

  const handleChangePrice = e => {
    console.log(normalPrice, realPrice);
    let discount = 100 - (realPrice * 100) / normalPrice;
    console.log(discount);
    setDiscountRate(Math.round(discount));
    console.log(discountRate);
  };

  useEffect(() => {
    handleChangePrice();
  }, [normalPrice, realPrice]);

  return (
    <OptionLayOut>
      <DeleteBtn onClick={optionDelete}>삭제</DeleteBtn>
      <div>
        <OptionNameInput
          placeholder="옵션명을 입력해 주세요. (필수)"
          style={{ width: '100%' }}
        />
        <OptionBottomContainer>
          <form>
            <input
              id="normalPrice"
              type="number"
              value={normalPrice}
              onChange={e => setNormalPrice(e.target.value)}
              placeholder="상품 정상가 (필수)"
            />
            <span>원</span>
            {discountRate > 0 ? <p>{`${discountRate}%`}</p> : <p>할인율</p>}
            <input
              id="realPrice"
              type="number"
              value={realPrice}
              onChange={e => setRealPrice(e.target.value)}
              placeholder="상품 판매가(필수)"
            />
            <span>원</span>
          </form>
          <div>
            <input placeholder="재고 (필수)" />
            <span>개</span>
          </div>
          <select>
            <option>비과세</option>
            <option>과세</option>
          </select>
        </OptionBottomContainer>
      </div>
      {additonOptionProductInfo.map(count => {
        return (
          <AdditonOptionProduct
            key={count.id}
            id={count.id}
            additonOptionProductInfo={additonOptionProductInfo}
            setAddtionOptionProductInfo={setAddtionOptionProductInfo}
          />
        );
      })}
      <AdditonOptionProductAddBtn onClick={additonOptionProductAddBtn}>
        +
      </AdditonOptionProductAddBtn>
      <span style={{ fontWeight: 'bold' }}>추가 옵션 상품 추가</span>
    </OptionLayOut>
  );
};

const OptionLayOut = styled.div`
  margin: 5px 8px;
  border: 2px solid whitesmoke;
  border-radius: 7px;
`;

const OptionNameInput = styled.input`
  height: 50px;
  border-radius: 4px;
  font-size: 18px;
`;
const OptionBottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
  }
  & > form > input {
    width: 70px;
  }
`;

const AdditonOptionProductAddBtn = styled.button`
  background-color: white;
  padding: 5px 9px;
`;

export default Option;
