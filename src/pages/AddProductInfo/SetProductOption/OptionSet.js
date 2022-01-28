import React from 'react';
import styled from 'styled-components';
import Option from './Option';

const OptionSet = ({ id, arrayOptionSet, setArrayOptionSet }) => {
  const clickRemoveOptionSet = () => {
    console.log(id);
    setArrayOptionSet(arrayOptionSet.filter(a => a !== id));
  };

  const handleInputImage = e => {
    console.log(e.target.value);
  };

  return (
    <section>
      <h1>옵션세트추가 성공</h1>
      {id}
      <button onClick={clickRemoveOptionSet}>옵션세트 삭제</button>
      <OptionSetContainer>
        <ImageAddContainer>
          <input type="file" accept="image/*" onInput={handleInputImage} />
        </ImageAddContainer>
        <Option />
        <button>옵션추가</button>
      </OptionSetContainer>
    </section>
  );
};

const OptionSetContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
`;

const ImageAddContainer = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  margin: 5px 5px;
`;

export default OptionSet;
