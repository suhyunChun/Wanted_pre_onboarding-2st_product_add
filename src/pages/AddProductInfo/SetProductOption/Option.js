import React from 'react';
import styled from 'styled-components';

const Option = () => {
  return (
    <div>
      <button>옵션삭제</button>
      <div>
        <input placeholder="옵션명을 입력해 주세요. (필수)" />
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
    </div>
  );
};

const OptionBottomContainer = styled.div`
  display: flex;
`;

export default Option;
