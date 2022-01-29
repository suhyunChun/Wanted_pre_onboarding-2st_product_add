import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';
import DeleteBtn from './deleteBtnStyle';
import uuid from 'react-uuid';

const OptionSet = ({ id, arrayOptionSet, setArrayOptionSet }) => {
  const [arrayOption, setArrayOption] = useState([{ id: uuid() }]);

  const clickRemoveOptionSet = () => {
    console.log(id);
    setArrayOptionSet(arrayOptionSet.filter(a => a !== id));
  };

  const handleInputImage = e => {
    console.log(e.target.value);
  };

  const clickShowAddOption = () => {
    setArrayOption(arrayOption.concat([{ id: uuid() }]));
    console.log(arrayOption);
  };

  const optionDelete = id => {
    setArrayOption(arrayOption.filter(array => array.id !== id));
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
            <Option key={array.id} id={array.id} optionDelete={optionDelete} />
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
