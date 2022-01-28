import React, { Fragment } from 'react';
import SetProductBenefitContainer from './SetProductBenefitContainer';

const checkCurrentCategory = category => {
  return <SetProductBenefitContainer />;
};

const SetDefaultProductBenefit = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultProductBenefit;
