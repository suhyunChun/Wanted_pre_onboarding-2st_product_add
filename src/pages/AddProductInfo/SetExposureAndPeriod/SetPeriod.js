import React, { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import styled from 'styled-components';

const SetPeriod = () => {
  const [periodStartDate, setPeriodStartDate] = useState([null, null]);
  const [periodLastDate, setPeriodLastDate] = useState([null, null]);
  const [periodClicked, setPeriodClicked] = useState({
    selectValue: '제한 없음',
  });
  const [periodsData, setPeriodData] = useState(`상품 판매 기한 : 제한 없음`);
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ContainerIndex = styled.div`
    display: flex;
  `;

  const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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

  const PeriodChange = e => {
    setPeriodData(`상품 판매 기한 : ${e.target.value}`);
    setPeriodClicked({
      selectValue: e.target.value,
    });
  };
  console.log(periodsData);
  console.log(`시작 날짜: ${periodStartDate}`);
  console.log(`마지막 날짜: ${periodLastDate}`);
  return (
    <Container>
      <ContainerIndex>
        <ContainerDetail>
          <fieldset id="group2">
            <div>
              <input
                id="periodShow"
                type="radio"
                name="group2"
                value="제한 없음"
                checked={periodClicked.selectValue === '제한 없음'}
                onChange={PeriodChange}
              />
              <label for="periodShow">
                <Span>제한 없음</Span>
              </label>
            </div>

            <div>
              <input
                id="periodHide"
                type="radio"
                name="group2"
                value="미판매"
                checked={periodClicked.selectValue === '미판매'}
                onChange={PeriodChange}
              />
              <label for="periodHide">
                <Span>미판매</Span>
              </label>
            </div>
            <div>
              <input
                id="periodSetting"
                type="radio"
                name="group2"
                value="판매 기간 설정"
                checked={periodClicked.selectValue === '판매 기간 설정'}
                onChange={PeriodChange}
              />
              <label for="periodSetting">
                <Span>판매 기간 설정</Span>
              </label>
            </div>
          </fieldset>

          <ContainerDate>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={props => <TextField {...props} />}
                label="시작 날짜"
                inputFormat={'yyyy.MM.dd hh:mm'}
                value={periodStartDate}
                onChange={newValue => {
                  setPeriodStartDate(newValue);
                }}
              />
            </LocalizationProvider>
            <InsideDate>~</InsideDate>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={props => <TextField {...props} />}
                label="마지막 날짜"
                inputFormat={'yyyy.MM.dd hh:mm'}
                value={periodLastDate}
                onChange={newValue => {
                  setPeriodLastDate(newValue);
                }}
              />
            </LocalizationProvider>
          </ContainerDate>
        </ContainerDetail>
      </ContainerIndex>
    </Container>
  );
};

export default SetPeriod;
