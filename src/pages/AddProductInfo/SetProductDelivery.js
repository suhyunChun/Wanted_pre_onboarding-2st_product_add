import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from 'react-toggle-button';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';

const SetProductDelivery = () => {
  const [selectDelivery, setSelectDelivery] = useState(true);
  const [visitedDelivery, setVisitedDelivery] = useState(true);
  const [preDelivery, setPreDelivery] = useState(true);
  const [deliveryStartTime, setDeliveryStartTime] = useState([null, null]);
  const [deliveryLastTime, setDeliveryLastTime] = useState([null, null]);
  const [deliveryMorning, setDeliveryMorning] = useState([null, null]);
  const [deliveryNormal, setDeliveryNormal] = useState([null, null]);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const DeliveryBox = styled.div`
    display: flex;
    justify-content: center;
  `;
  const DeliveryBoxTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 25px 20px;
    border: 1px solid #cecece;
  `;
  const DeliveryBoxDetail = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 600px;
    border: 1px solid #cecece;
  `;

  const DeliveryTimeBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #cecece;
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
    padding-left: 10px;
  `;

  const Hidden = styled.div`
    margin: 0 10px;
  `;

  const ToogleBtn = styled.input`
    display: none;
  `;

  const Label = styled.label`
    position: relative;
    height: 26px;
    width: 50px;
    border-radius: 50px;
    background-color: #000;
  `;

  const ToogleBall = styled.div`
    position: absolute;
    height: 22px;
    width: 22px;
    border-radius: 11px;
    top: 2px;
    left: 2px;
    transition: transform 0.2s linear;
    background-color: #3498db;
  `;

  const [isToogle, setIsToogle] = useState(true);
  console.log(isToogle);
  return (
    <Container>
      <DeliveryBox>
        <DeliveryBoxTitle>
          사용자 배송일
          <br /> 출발일 지정
        </DeliveryBoxTitle>
        <DeliveryBoxDetail>
          <div>
            <ToogleBtn
              type="checkbox"
              checked={isToogle}
              value={isToogle}
              onChange={value => {
                setIsToogle(e => !e);
              }}
              id={'test'}
            />
            <Label htmlFor={'test'}>
              {{ isToogle } ? <div>test</div> : <div>test2</div>}
              <ToogleBall className="ball"></ToogleBall>
            </Label>
          </div>
        </DeliveryBoxDetail>
      </DeliveryBox>
      <DeliveryBox>
        <DeliveryBoxTitle>방문 수령</DeliveryBoxTitle>
        <DeliveryBoxDetail>
          <ToggleButton
            value={visitedDelivery}
            onToggle={value => {
              setVisitedDelivery(e => !e);
            }}
          />
        </DeliveryBoxDetail>
      </DeliveryBox>
      <DeliveryBox>
        <DeliveryBoxTitle>
          선 주문
          <br /> 예약 배송
        </DeliveryBoxTitle>
        <DeliveryTimeBox>
          <DeliveryDetail>
            <ToggleButton
              value={preDelivery}
              onToggle={value => {
                setPreDelivery(e => !e);
              }}
            />
          </DeliveryDetail>
          <DeliveryDetail>
            <span>주문 시간</span>{' '}
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
            <span>새벽 배송</span>
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
            <span>일반 배송</span>
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
    </Container>
  );
};

export default SetProductDelivery;
