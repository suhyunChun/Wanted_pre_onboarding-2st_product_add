import React from 'react';
import styled from 'styled-components';
import Option from './Option';

const OptionSet = ({ id, arrayOptionSet, setArrayOptionSet }) => {
  const clickRemoveOptionSet = () => {
    console.log(id);
    setArrayOptionSet(arrayOptionSet.filter(a => a !== id));
  };
  return (
    <section>
      <h1>옵션세트추가 성공</h1>
      <button onClick={clickRemoveOptionSet}>옵션세트 삭제</button>
      {id}
      <OptionSetContainer>
        <input type="file" accept="image/*" />
        <Option />
        <button>옵션추가</button>
      </OptionSetContainer>
    </section>
  );
};

const OptionSetContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export default OptionSet;
