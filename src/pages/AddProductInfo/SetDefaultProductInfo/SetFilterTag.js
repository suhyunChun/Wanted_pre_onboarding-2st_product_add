import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../../components/common/TextInput.style';

const SetFilterTag = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [tagList, setTagList] = useState([]);
  const [selectedTagList, setSelectedTagList] = useState([]);

  const getAllTagList = async () => {
    if (isFocused) return;

    // const response = await getFilterTag();
    // const {
    //   data: { message },
    // } = response;

    // setTagList(message);
    // setIsFocused(true);
  };

  const getTagListByKeyword = async event => {
    const keyword = event.target.value;

    setText(keyword);

    // const response = await getFilterTag();
    // const {
    //   data: { message },
    // } = response;

    // const filteredTagList = message.filter(
    //   name => name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1
    // );

    // setTagList(filteredTagList);
  };

  const deleteTag = event => {
    const deleteSort = event.target.parentNode.id;

    const newSelectedTagList = selectedTagList.filter(
      tag => tag !== deleteSort
    );

    setSelectedTagList(newSelectedTagList);
  };

  const selectCurrentTag = event => {
    const currentTagetTagName = event.target.innerHTML;

    const newTagList = tagList.filter(tag => tag !== currentTagetTagName);

    setTagList(newTagList);
    setSelectedTagList(selectedTagList.concat(currentTagetTagName));
  };

  const registerTagList = () => {
    const currentSelectedTagListNum = selectedTagList.length;
    if (currentSelectedTagListNum === 0) return;

    setText('');
    setIsFocused(false);
  };

  return (
    <Container>
      <TextInput
        value={text}
        placeholder="필터 태그를 검색해 주세요."
        sort="filter"
        eventCallback={{ getAllTagList, getTagListByKeyword }}
      />
      {isFocused && (
        <ResultContainer>
          <SearchResultBox>
            <SearchList>
              {tagList.map((name, index) => {
                return (
                  <Tag key={index}>
                    <p onClick={selectCurrentTag}>{name}</p>
                  </Tag>
                );
              })}
            </SearchList>
          </SearchResultBox>
          <ButtonContainer>
            <SelectButton onClick={registerTagList}>등록</SelectButton>
          </ButtonContainer>
        </ResultContainer>
      )}
      {!isFocused && selectedTagList.length !== 0 && (
        <SelectedResultContainer>
          <p>지정된 필터 태그</p>
          <SelectedTagList>
            {selectedTagList.map((name, index) => {
              return (
                <Tag id={name} key={index}>
                  <p onClick={selectCurrentTag}>{name}</p>
                  <button
                    onClick={deleteTag}
                    id={name}
                    className="deleteButton"
                  >
                    <img src="./images/icon_delete.png" />
                  </button>
                </Tag>
              );
            })}
          </SelectedTagList>
        </SelectedResultContainer>
      )}
    </Container>
  );
};

const Container = styled.div``;

const ResultContainer = styled.div`
  position: relative;
`;

const SearchResultBox = styled.div`
  max-width: 650px;
  margin-top: 15px;
  padding: 30px 20px;
  border: 1px solid #b1b0b0;
  border-radius: 6px;
`;

const SearchList = styled.ul``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
`;

const SelectButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 17px;
  font-weight: 500;
  border: 1px solid #6065a7;
  border-radius: 5px;
  cursor: pointer;
`;

const SelectedResultContainer = styled.div`
  margin-top: 20px;

  & p {
    font-size: 17px;
    font-weight: 600;
  }
`;

const SelectedTagList = styled.ul`
  margin-top: 10px;
`;

const Tag = styled.li`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 8px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #beeecd;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  & p {
    font-size: 18px;
    font-weight: 400;
    /* margin-right: 8px; */
  }

  & .deleteButton {
    display: inline-block;
    border: none;
    background: none;
    cursor: pointer;

    & img {
      width: 14px;
      height: 14px;
    }
  }
`;

export default SetFilterTag;
