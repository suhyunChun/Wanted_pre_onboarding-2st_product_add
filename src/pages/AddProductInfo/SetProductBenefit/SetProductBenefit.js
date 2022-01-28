import React, { Fragment } from 'react';
import SetProductBenefitContainer from './SetProductBenefit';

const checkCurrentCategory = category => {
  return <SetProductBenefitContainer />;
};

const SetDefaultProductBenefit = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultProductBenefit;
