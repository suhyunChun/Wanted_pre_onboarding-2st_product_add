import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';
import DeleteBtn from './deleteBtnStyle';
import uuid from 'react-uuid';

const OptionSet = ({ id, arrayOptionSet, setArrayOptionSet }) => {
  const [arrayOption, setArrayOption] = useState([{ id: uuid() }]);
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
    setArrayOption(arrayOption.concat([{ id: uuid() }]));
  };

  return (
    <section>
      <DeleteBtn onClick={clickRemoveOptionSet}>삭제</DeleteBtn>
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
        <OptionAddBtn onClick={clickShowAddOption}>+ 옵션추가</OptionAddBtn>
      </OptionSetContainer>
    </section>
  );
};

const OptionSetContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 2px solid whitesmoke;
  display: flex;
  flex-direction: column;
`;

const ImageAddContainer = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin: 5px 8px;
`;

const OptionAddBtn = styled.button`
  width: 98%;
  margin: 0 auto;
  height: 70px;
  padding: 10px 20px;
  border-color: black;
  border-radius: 4px;
  background-color: white;
  font-size: 19px;
  font-weight: bold;
`;

export default OptionSet;
