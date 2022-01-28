import React, { useState } from 'react';

import styled from 'styled-components';

function SetProductEtc() {
  const [productThanksCard, setProductThanksCard] = useState(false);

  const ToogleBtn = styled.input`
    display: none;
    &:checked + .switchLabel .ball {
      transform: translateX(32px);
      background-color: #0000cd;
    }
    &:checked + .switchLabel {
      background-color: #7b68ee;
    }
  `;
  const Label = styled.label`
    position: relative;
    display: block;
    margin-left: 20px;
    height: 26px;
    width: 60px;
    border-radius: 50px;
    background-color: gray;
    cursor: pointer;
  `;
  const ToogleBall = styled.div`
    position: absolute;
    cursor: pointer;
    height: 32px;
    width: 32px;
    border-radius: 16px;
    top: -2px;
    left: -2px;
    transition: transform 1s linear;
    background-color: #eee;
    &:hover {
      background-color: #0000cd;
    }
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
    <div>
      <ToogleBtn
        type="checkbox"
        checked={productThanksCard}
        value={productThanksCard}
        onChange={value => {
          setProductThanksCard(e => !e);
          console.log(productThanksCard);
        }}
        id="switch-etc"
      />
      <Label htmlFor="switch-etc" className="switchLabel">
        <ToogleBall className="ball"></ToogleBall>
      </Label>
    </div>
  );
}

export default SetProductEtc;
