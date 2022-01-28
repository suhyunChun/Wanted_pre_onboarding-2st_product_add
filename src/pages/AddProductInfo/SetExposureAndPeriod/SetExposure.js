import React, { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import styled from 'styled-components';

const SetExposure = () => {
  const [exposureStartDate, setExposureStartDate] = useState([null, null]);
  const [exposureLastDate, setExposureLastDate] = useState([null, null]);
  const [exposureClicked, setExposureClicked] = useState({
    selectValue: 'exposureShow',
  });
  const [exposureData, setExposureData] =
    useState(`상품 판매 기한 : 제한 없음`);

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ContainerIndex = styled.div`
    display: flex;
  `;
  const ContainerTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 25px 20px;
    border: 1px solid #cecece;
  `;
  const ContainerDetail2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #cecece;
    padding: 20px 30px;
  `;
  const Span = styled.span`
    font-size: 18px;
    line-height: 1.5;
    vertical-align: middle;
  `;
  const ContainerDate = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
  `;
  const InsideDate = styled.span`
    font-size: 24px;
    font-weight: 600;
    margin: 0 16px;
  `;

  const exposureChange = e => {
    setExposureData(`상품 노출 기한 : ${e.target.value}`);
    setExposureClicked({
      selectValue: e.target.value,
    });
  };

  console.log(exposureStartDate);
  console.log(exposureLastDate);
  console.log(exposureData);
  return (
    <Container>
      <ContainerIndex>
        <ContainerDetail2>
          <fieldset id="group1">
            <div>
              <input
                id="exposureShow"
                type="radio"
                name="group1"
                value="exposureShow"
                checked={exposureClicked.selectValue === 'exposureShow'}
                onChange={exposureChange}
              />
              <label for="exposureShow">
                <Span>제한 없음</Span>
              </label>
            </div>

            <div>
              <input
                id="exposureHide"
                type="radio"
                name="group1"
                value="exposureHide"
                checked={exposureClicked.selectValue === 'exposureHide'}
                onChange={exposureChange}
              />
              <label for="exposureHide">
                <Span>미노출</Span>
              </label>
            </div>
            <div>
              <input
                id="exposureSetting"
                type="radio"
                name="group1"
                value="exposureSetting"
                checked={exposureClicked.selectValue === 'exposureSetting'}
                onChange={exposureChange}
              />
              <label for="exposureSetting">
                <Span>노출 기간 설정</Span>
              </label>
            </div>
          </fieldset>

          <ContainerDate>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={props => <TextField {...props} />}
                label="시작 날짜"
                inputFormat={'yyyy.MM.dd hh:mm'}
                value={exposureStartDate}
                onChange={newValue => {
                  setExposureStartDate(newValue);
                }}
              />
            </LocalizationProvider>

            <InsideDate>~</InsideDate>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={props => <TextField {...props} />}
                label="마지막 날짜"
                inputFormat={'yyyy.MM.dd hh:mm'}
                value={exposureLastDate}
                onChange={newValue => {
                  setExposureLastDate(newValue);
                }}
              />
            </LocalizationProvider>
          </ContainerDate>
        </ContainerDetail2>
      </ContainerIndex>
    </Container>
  );
};

export default SetExposure;
