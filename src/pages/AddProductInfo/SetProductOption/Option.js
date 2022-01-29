import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AdditonOptionProduct from './AdditonOptionProduct';
import DeleteBtn from './deleteBtnStyle';
import uuid from 'react-uuid';

const Option = ({ id, arrayOption, setArrayOption }) => {
  const [additonOptionProductInfo, setAddtionOptionProductInfo] = useState([]);

  const [discountRate, setDiscountRate] = useState(0);
  /* const [realPrice, setRealPrice] = useState(null);
  const [normalPrice, setNormalPrice] = useState(null); */
  const [price, setPrice] = useState({
    normalPrice: '',
    realPrice: '',
  });

  const { normalPrice, realPrice } = price;

  const additonOptionProductAddBtn = () => {
    setAddtionOptionProductInfo(
      additonOptionProductInfo.concat([{ id: uuid() }])
    );
    console.log(additonOptionProductInfo);
  };

  const optionDelete = () => {
    setArrayOption(arrayOption.filter(array => array.id !== id));
  };

  const discountCalculate = e => {
    let discount = 100 - (realPrice * 100) / normalPrice;
    setDiscountRate(Math.round(discount));
  };

  const handleInputPrice = e => {
    const { name, value } = e.target;
    setPrice({
      ...price,
      [name]: value,
    });
  };

  useEffect(() => {
    discountCalculate();
    console.log(price);
  }, [price]);

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
              name="normalPrice"
              type="number"
              value={normalPrice}
              onChange={handleInputPrice}
              placeholder="상품 정상가 (필수)"
            />
            <span>원</span>
            {discountRate > 0 ? <p>{`${discountRate}%`}</p> : <p>할인율%</p>}
            <input
              name="realPrice"
              type="number"
              value={realPrice}
              onChange={handleInputPrice}
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
