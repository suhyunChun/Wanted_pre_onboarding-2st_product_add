import React, { useState } from 'react';
import styled from 'styled-components';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';

const SetPreDeliveryDate = () => {
  const [deliveryStartTime, setDeliveryStartTime] = useState([null, null]);
  const [deliveryLastTime, setDeliveryLastTime] = useState([null, null]);
  const [deliveryMorning, setDeliveryMorning] = useState([null, null]);
  const [deliveryNormal, setDeliveryNormal] = useState([null, null]);
  const [isToogle, setIsToogle] = useState(true);

  const DeliveryBox = styled.div`
    display: flex;
    justify-content: center;
  `;

  const DeliveryTimeBox = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const InsideDate = styled.span`
    font-size: 24px;
    font-weight: 600;
    margin: 0 16px;
    vertical-align: middle;
  `;
  const DeliveryDetail = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-left: 0px;
  `;

  const Hidden = styled.div`
    margin: 0 10px;
  `;
  const BeforeDate = styled.span`
    font-size: 15px;
    color: #4d4b4b;
    margin-right: 4px;
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
    margin-left: 20px;
    height: 26px;
    width: 60px;
    border-radius: 50px;
    background-color: gray;
    cursor: pointer;
  `;

  const ToogleBall = styled.div`
    position: absolute;
    height: 32px;
    width: 32px;
    border-radius: 16px;
    top: -2px;
    left: -2px;
    transition: transform 1s linear;
    background-color: #eee;
    cursor: pointer;
    &:hover {
      background-color: #0000cd;
    }
  `;
  console.log(isToogle);
  console.log(`주문시간: ${deliveryStartTime}`);
  console.log(`주문 마감 시간: ${deliveryLastTime}`);
  console.log(`새벽 배송: ${deliveryMorning}`);
  console.log(`일반 배송: ${deliveryNormal}`);

  return (
    <DeliveryBox>
      <DeliveryTimeBox>
        <div>
          <ToogleBtn
            type="checkbox"
            checked={isToogle}
            value={isToogle}
            onChange={value => {
              setIsToogle(e => !e);
            }}
            id="switchPreInput"
          />
          <Label htmlFor="switchPreInput" className="switchLabel">
            <ToogleBall className="ball"></ToogleBall>
          </Label>
        </div>
        <DeliveryDetail>
          <BeforeDate>주문 시간</BeforeDate>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={props => <TextField {...props} />}
              label="주문 시작 시간"
              inputFormat={'yyyy.MM.dd hh:mm'}
              value={deliveryStartTime}
              onChange={newValue => {
                setDeliveryStartTime(newValue);
              }}
            />
          </LocalizationProvider>
          <InsideDate>~</InsideDate>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={props => <TextField {...props} />}
              label="주문 마감 시간"
              inputFormat={'yyyy.MM.dd hh:mm'}
              value={deliveryLastTime}
              onChange={newValue => {
                setDeliveryLastTime(newValue);
              }}
            />
          </LocalizationProvider>
        </DeliveryDetail>
        <DeliveryDetail>
          <BeforeDate>새벽 배송</BeforeDate>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={props => <TextField {...props} />}
              label="새벽 배송"
              inputFormat={'yyyy.MM.dd'}
              value={deliveryMorning}
              onChange={newValue => {
                setDeliveryMorning(newValue);
              }}
            />
          </LocalizationProvider>
          <Hidden></Hidden>
          <BeforeDate>일반 배송</BeforeDate>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={props => <TextField {...props} />}
              label="일반 배송"
              inputFormat={'yyyy.MM.dd'}
              value={deliveryNormal}
              onChange={newValue => {
                setDeliveryNormal(newValue);
              }}
            />
          </LocalizationProvider>
        </DeliveryDetail>
      </DeliveryTimeBox>
    </DeliveryBox>
  );
};

export default SetPreDeliveryDate;
