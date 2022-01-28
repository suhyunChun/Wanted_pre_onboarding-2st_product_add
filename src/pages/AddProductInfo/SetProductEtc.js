import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';
import AddProductInfoForm from './AddProductInfoForm';
const SetProductEtc = () => {
  const [productThanksCard, setProductThanksCard] = useState(false);

  const EtcConatiner = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 60px;
    border: 1px solid darkgrey;
  `;
  const EtcTitle = styled.div`
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
      <EtcConatiner>
        <ToggleButton
          value={productThanksCard}
          onToggle={value => {
            setProductThanksCard(e => !e);
          }}
        />
      </EtcConatiner>
    </AddProductInfoForm>
  );
};

export default SetProductEtc;
