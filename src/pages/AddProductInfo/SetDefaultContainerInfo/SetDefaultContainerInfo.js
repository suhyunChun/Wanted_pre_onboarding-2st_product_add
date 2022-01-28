import React, { Fragment } from 'react';
import SetProductImage from '../SetProductImage';
import SetProductOption from '../SetProductOption/SetProductOption';
import SetProductFrontInfoBox from '../SetProductFrontInfo/SetProductFrontInfoBox';
const checkCurrentCategory = header => {
  let appCurrentCategory;

  console.log(header);
  switch (header) {
    case '상품 소개 이미지':
      appCurrentCategory = <SetProductImage setImg={[]} />;
      break;
    case '구매자 추천 이미지':
      appCurrentCategory = <SetProductImage setImg={[]} />;
      break;
    case '상품 옵션':
      appCurrentCategory = <SetProductOption />;
      break;
    case '상품 정보 고시':
      appCurrentCategory = <SetProductFrontInfoBox />;
      break;
    default:
      appCurrentCategory = <div>error</div>;
      break;
  }
  return appCurrentCategory;
};

const SetDefaultContainerInfo = ({ header }) => {
  return <Fragment>{checkCurrentCategory(header)}</Fragment>;
};

export default SetDefaultContainerInfo;
