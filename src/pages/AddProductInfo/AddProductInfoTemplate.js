import React from 'react';
import styled from 'styled-components';
import AddProductInfoForm from './AddProductInfoForm';
import addProductInfoList from '../../data/addProductInfoList.json';

const AddProductInfoTemplate = () => {
  return (
    <Container>
      {addProductInfoList.message.map(({ header, categories }, index) => {
        return (
          <AddProductInfoForm
            key={index}
            header={header}
            categories={categories}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div``;

export default AddProductInfoTemplate;
