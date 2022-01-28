import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';
import DeleteBtn from './deleteBtnStyle';

const OptionSet = ({ id, arrayOptionSet, setArrayOptionSet }) => {
  const [arrayOption, setArrayOption] = useState([0]);
  const [optionAddClickCount, setOptionAddClickCount] = useState(0);

  const clickRemoveOptionSet = () => {
    console.log(id);
    setArrayOptionSet(arrayOptionSet.filter(a => a !== id));
  };

  const handleInputImage = e => {
    console.log(e.target.value);
  };

  const clickShowAddOption = () => {
    setOptionAddClickCount(optionAddClickCount + 1);
    setArrayOption(arrayOption.concat([{ id: optionAddClickCount + 1 }]));
  };

  return (
    <section>
      <h1>옵션세트추가 성공</h1>
      {id}
      <DeleteBtn onClick={clickRemoveOptionSet}>옵션세트 삭제</DeleteBtn>
      <OptionSetContainer>
        <ImageAddContainer>
          <input type="file" accept="image/*" onInput={handleInputImage} />
        </ImageAddContainer>
        {arrayOption.map((array, i) => {
          return (
            <Option
              key={i}
              id={array.id}
              arrayOption={arrayOption}
              setArrayOption={setArrayOption}
            />
          );
        })}
        <button onClick={clickShowAddOption}>옵션추가</button>
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
