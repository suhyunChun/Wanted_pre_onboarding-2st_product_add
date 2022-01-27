import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';

const SetProductEtc = () => {
  const [productThanksCard, setProductThanksCard] = useState(false);

  const EtcConatiner = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 60px;
  `;
  const EtcTitle = styled.div`
    background-color: #e4e4e4;
    display: flex;
    width: 150px;
    height: 100%;
    align-items: center;
    margin-right: 40px;
  `;

  return (
    <EtcConatiner>
      <EtcTitle>감사카드 제공</EtcTitle>
      <ToggleButton
        value={productThanksCard}
        onToggle={value => {
          setProductThanksCard(e => !e);
        }}
      />
    </EtcConatiner>
  );
};

export default SetProductEtc;
