import React from 'react';
import styled from 'styled-components';

const SetCategory = () => {
  return (
    <Container>
      <CategoryListContainer>
        <CategoryList>
          <Category>1</Category>
          <Category>2</Category>
          <Category>3</Category>
          <Category>4</Category>
          <Category>5</Category>
          <Category>6</Category>
        </CategoryList>
      </CategoryListContainer>
      <SelectedCategoryContainer>
        <SelectedCategoryList></SelectedCategoryList>
      </SelectedCategoryContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;

const CategoryListContainer = styled.section`
  padding: 10px;
  border: 1.5px solid #cecece;
  border-radius: 4px;
`;

const CategoryList = styled.ul``;

const Category = styled.li``;

const SelectedCategoryContainer = styled.section``;

const SelectedCategoryList = styled.ul``;

export default SetCategory;
