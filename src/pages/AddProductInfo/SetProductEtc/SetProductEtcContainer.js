import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';

const SetProductEtc = () => {
  const [productThanksCard, setProductThanksCard] = useState(false);

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
    <ToggleButton
      value={productThanksCard}
      onToggle={value => {
        setProductThanksCard(e => !e);
      }}
    />
  );
};

export default SetProductEtc;
