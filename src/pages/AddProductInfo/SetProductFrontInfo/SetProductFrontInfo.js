import React, { Fragment } from 'react';
import SetProductFrontInfoBox from './SetProductFrontInfoBox';

const checkCurrentCategory = category => {
  return <SetProductFrontInfoBox />;
};

const SetDefaultProductFrontInfo = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultProductFrontInfo;
