import React, { Fragment } from 'react';
import SetExposure from './SetExposure';
import SetPeriod from './SetPeriod';
import SetProductDelivery from '../SetProductDelivery';

const checkCurrentCategory = category => {
  switch (category) {
    case '상품 노출 기한':
      return <SetExposure />;
    case '상품 판매 기한':
      return <SetProductDelivery />;
    default:
      return null;
  }
};

const SetDefaultExposureAndPeriod = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultExposureAndPeriod;
