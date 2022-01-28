import React, { useState } from 'react';
import styled from 'styled-components';
import { getTarget } from '../../../utils/getTarget';

const SetCategory = () => {
  const [checkBoxInfo, setCheckBoxList] = useState({
    등심: false,
    안심: false,
    꽃등심: false,
    삼겹살: false,
    갈매기살: false,
    목살: false,
  });
  const [checkedCategoryList, setCheckedCategoryList] = useState([]);

  const checkCurrentCategory = event => {
    const currentClikedTarget = event.target;

    const currentCheckbox = getTarget(
      currentClikedTarget,
      'checkboxContainer'
    ).id;

    if (checkBoxInfo[currentCheckbox])
      setCheckedCategoryList(
        checkedCategoryList.filter(name => name !== currentCheckbox)
      );
    else setCheckedCategoryList(checkedCategoryList.concat(currentCheckbox));

    setCheckBoxList({
      ...checkBoxInfo,
      [currentCheckbox]: !checkBoxInfo[currentCheckbox],
    });
  };

  const deleteCategory = event => {
    const deleteSort = event.target.parentNode.id;

    setCheckedCategoryList(
      checkedCategoryList.filter(name => name !== deleteSort)
    );

    setCheckBoxList({
      ...checkBoxInfo,
      [deleteSort]: false,
    });
  };

  const checkboxList = Object.entries(checkBoxInfo);

  return (
    <Container>
      <CategoryListContainer>
        <CategoryList>
          {checkboxList.map(([name, isChecked], index) => {
            return (
              <Category key={index}>
                <CheckboxContainer className="checkboxContainer">
                  <HiddenCheckbox
                    defaultChecked={isChecked}
                    type="checkbox"
                    className="checkbox"
                    id={name}
                  />
                  <StyledCheckbox
                    checked={isChecked}
                    onClick={checkCurrentCategory}
                  >
                    <Icon viewBox="0 0 24 24">
                      <polyline points="19 7 10 17 5 12" />
                    </Icon>
                  </StyledCheckbox>
                </CheckboxContainer>
                <CheckboxName>{name}</CheckboxName>
              </Category>
            );
          })}
        </CategoryList>
      </CategoryListContainer>
      <SelectedCategoryContainer>
        {checkedCategoryList.length === 0 ? (
          <p>카테고리를 지정해 주세요</p>
        ) : (
          <SelectedCategoryList>
            {checkedCategoryList.map((name, index) => {
              return (
                <SelectedCategory key={index}>
                  <span className="selectedName">{name}</span>
                  <button
                    onClick={deleteCategory}
                    id={name}
                    className="deleteButton"
                  >
                    <img src="./images/icon_delete.png" />
                  </button>
                </SelectedCategory>
              );
            })}
          </SelectedCategoryList>
        )}
      </SelectedCategoryContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;

const CategoryListContainer = styled.section`
  max-height: 250px;
  margin-right: 10px;
  padding: 20px 30px;
  border: 1.5px solid #cecece;
  border-radius: 4px;
  overflow: scroll;
`;

const CategoryList = styled.ul``;

const Category = styled.li`
  display: flex;
  align-items: center;
  margin-right: 250px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  max-width: 34px;
  max-height: 34px;

  vertical-align: middle;
  margin-right: 15px;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 34px;
  height: 34px;
  border: ${({ checked }) => (checked ? 'none' : 'solid 0.1rem #dddddd')};
  background: ${({ checked }) => (checked ? '#1345a1' : '#ffffff')};
  border-radius: 0.4rem;
  transition: all 150ms;
  cursor: pointer;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxName = styled.span`
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
`;

const SelectedCategoryContainer = styled(CategoryListContainer)`
  min-width: 230px;

  & p {
    margin-top: 60%;
    font-weight: 600;
    color: #a8a7a7;
  }
`;

const SelectedCategoryList = styled.ul``;

const SelectedCategory = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #cfddf7;
  border: 1px solid #123f91;
  border-radius: 4px;

  & .selectedName {
    margin-right: 70px;
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
  }

  & .deleteButton {
    position: absolute;
    right: 10px;
    display: inline-block;
    border: none;
    background: none;
    cursor: pointer;

    & img {
      width: 20px;
      height: 20px;
    }
  }
`;

export default SetCategory;
