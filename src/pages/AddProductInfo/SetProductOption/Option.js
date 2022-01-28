import React, { useState } from 'react';
import styled from 'styled-components';
import AdditonOptionProduct from './AdditonOptionProduct';

const Option = () => {
  const [countArray, setCountArray] = useState([]);
  const [btnClickCount, setBtnClickCount] = useState(0);
  const additonOptionProductAddBtn = () => {
    setBtnClickCount(btnClickCount + 1);
    console.log(btnClickCount + 1);
    setCountArray(countArray.concat(btnClickCount + 1));
  };

  return (
    <div>
      <button>옵션삭제</button>
      <div>
        <input
          placeholder="옵션명을 입력해 주세요. (필수)"
          style={{ width: '100%' }}
        />
        <OptionBottomContainer>
          <input placeholder="상품 정상가 (필수) " />
          <span>원</span>
          <p>{`{{할인율}}%`}</p>
          <input placeholder="상품 판매가(필수)" />
          <span>원</span>
          <input placeholder="재고 (필수)" />
          <span>개</span>
          <select>
            <option>비과세</option>
            <option>과세</option>
          </select>
        </OptionBottomContainer>
      </div>
      <button onClick={additonOptionProductAddBtn}>+</button>
      <span>추가 옵션 상품 추가</span>
      {countArray.map(count => {
        return (
          <AdditonOptionProduct
            key={count}
            id={count}
            countArray={countArray}
            setCountArray={setCountArray}
          />
        );
      })}
    </div>
  );
};

const OptionBottomContainer = styled.div`
  display: flex;
`;

export default Option;
