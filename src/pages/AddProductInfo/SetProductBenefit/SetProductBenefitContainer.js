import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';

const SetProductBenefitContainer = () => {
  const [productBenefit, setProductBenefit] = useState(true);

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

  return (
    <div style={{ marginTop: '10px' }}>
      <ToogleBtn
        type="checkbox"
        checked={productBenefit}
        value={productBenefit}
        onChange={value => {
          setProductBenefit(e => !e);
          console.log('마일리지 적립 :', productBenefit);
        }}
        id="switch-benefit"
      />
      <Label htmlFor="switch-benefit" className="switchLabel">
        <ToogleBall className="ball"></ToogleBall>
      </Label>
    </div>
  );
};

export default SetProductBenefitContainer;
