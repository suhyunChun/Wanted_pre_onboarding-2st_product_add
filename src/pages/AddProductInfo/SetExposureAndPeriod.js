import React, { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';

const SetExposureAndPeriod = () => {
  const [periodDate, setPeriodDate] = useState([null, null]);
  const [currentClicked, setCurrentClicked] = useState({
    selectValue: 'commersShow',
  });

  const handleChange = e => {
    console.log(`선택한 값 : ${e.target.value}`);
    setCurrentClicked({
      selectValue: e.target.value,
    });
  };

  return (
    <div>
      <input
        id="commersShow"
        type="radio"
        name="platform"
        value="commersShow"
        checked={currentClicked.selectValue === 'commersShow'}
        onChange={handleChange}
      />
      <label for="commersShow">
        <span>제한 없음</span>
      </label>
      <input
        id="commersHide"
        type="radio"
        name="platform"
        value="commersHide"
        checked={currentClicked.selectValue === 'commersHide'}
        onChange={handleChange}
      />
      <label for="commersHide">
        <span>미노출</span>
      </label>
      <input
        id="commersSetting"
        type="radio"
        name="platform"
        value="commersSetting"
        checked={currentClicked.selectValue === 'commersSetting'}
        onChange={handleChange}
      />
      <label for="commersSetting">
        <span>노출 기간 설정</span>
      </label>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={props => <TextField {...props} />}
            label="시작 날짜"
            inputFormat={'yyyy.MM.dd hh:mm'}
            value={periodDate}
            onChange={newValue => {
              setPeriodDate(newValue);
            }}
          />
        </LocalizationProvider>
        <span>~</span>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={props => <TextField {...props} />}
            label="마지막 날"
            inputFormat={'yyyy.MM.dd hh:mm'}
            value={periodDate}
            onChange={newValue => {
              setPeriodDate(newValue);
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default SetExposureAndPeriod;
