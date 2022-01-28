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
    <div>
      <DeleteBtn onClick={optionDelete}>옵션삭제</DeleteBtn>
      <div>
        <input
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
            {discountRate > 0 && <p>{`${discountRate}%`}</p>}
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
      <button onClick={additonOptionProductAddBtn}>+</button>
      <span>추가 옵션 상품 추가</span>
      <button onClick={() => console.log(additonOptionProductInfo)}>
        데이터확인
      </button>
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
    </div>
  );
};

const OptionBottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Option;
