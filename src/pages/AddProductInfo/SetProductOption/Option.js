import React, { useState } from 'react';
import styled from 'styled-components';
import AdditonOptionProduct from './AdditonOptionProduct';
import DeleteBtn from './deleteBtnStyle';
import uuid from 'react-uuid';

const Option = ({ id, arrayOption, setArrayOption }) => {
  const [additonOptionProductInfo, setAddtionOptionProductInfo] = useState([]);
  // const [btnClickCount, setBtnClickCount] = useState(0);

  const additonOptionProductAddBtn = () => {
    // setBtnClickCount(btnClickCount + 1);
    // console.log(btnClickCount + 1);
    setAddtionOptionProductInfo(
      additonOptionProductInfo.concat({ id: uuid() })
    );
    console.log(additonOptionProductInfo);
  };

  const optionDelete = () => {
    console.log(id);
    console.log(arrayOption);
    setArrayOption(arrayOption.filter(array => array !== id));
  };

  return (
    <div>
      <DeleteBtn onClick={optionDelete}>옵션삭제</DeleteBtn>
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
`;

export default Option;
