import React, { useState } from 'react';
import styled from 'styled-components';

const SetPickup = () => {
  const [isCatchToogle, setIsCatchToogle] = useState(true);

  const DeliveryBoxDetail = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
  `;

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
  console.log(isCatchToogle);
  return (
    <DeliveryBoxDetail>
      <div>
        <ToogleBtn
          type="checkbox"
          checked={isCatchToogle}
          value={isCatchToogle}
          onChange={value => {
            setIsCatchToogle(e => !e);
          }}
          id="switchPickupInput"
        />
        <Label htmlFor="switchPickupInput" className="switchLabel">
          <ToogleBall className="ball"></ToogleBall>
        </Label>
      </div>
    </DeliveryBoxDetail>
  );
};
export default SetPickup;
