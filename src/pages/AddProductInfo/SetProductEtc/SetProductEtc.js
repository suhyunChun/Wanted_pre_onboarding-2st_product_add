import React, { Fragment } from 'react';
import SetProductEtcContainer from './SetProductEtcContainer';

const checkCurrentCategory = category => {
  return <SetProductEtcContainer />;
};

const SetDefaultProductEtc = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultProductEtc;
