import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';
import AddProductInfoForm from './AddProductInfoForm';
const SetProductBenefit = () => {
  const [productBenefit, setProductBenefit] = useState(true);

  const BenefitConatiner = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 60px;
  `;
  const BenefitTitle = styled.div`
    background-color: #e4e4e4;
    display: flex;
    width: 150px;
    height: 100%;
    align-items: center;
    margin-right: 40px;
    border-right: 2px solid darkgrey;
  `;

  return (
    <AddProductInfoForm>
      <BenefitConatiner>
        <ToggleButton
          value={productBenefit}
          onToggle={value => {
            setProductBenefit(e => !e);
          }}
        />
      </BenefitConatiner>
    </AddProductInfoForm>
  );
};

export default SetProductBenefit;
