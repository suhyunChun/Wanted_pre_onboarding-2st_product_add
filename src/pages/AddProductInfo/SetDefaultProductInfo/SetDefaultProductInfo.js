import React, { Fragment } from 'react';
import SetCategory from './SetCategory';
import SetFilterTag from './SetFilterTag';
import SetProductCodeName from './SetProductCodeName';
import SetProductIntroduce from './SetProductIntroduce';
import SetProductThumbnail from './SetProductThumbnail';
import SetProductFrontImage from './SetProductFrontImage';
import SetProductStore from './SetProductStore';

const checkCurrentCategory = category => {
  switch (category) {
    case '카테고리 *':
      return <SetCategory />;
    case '필터 태그':
      return <SetFilterTag />;
    case '상품명':
      return <SetProductCodeName />;
    case '상품 구성 소개 정보 *':
      return <SetProductIntroduce />;
    case '상품 썸네일':
      return <SetProductThumbnail />;
    case '상품 대표 이미지':
      return <SetProductFrontImage />;
    case '상품 총 재고 *':
      return <SetProductStore />;
    default:
      return null;
  }
};

const SetDefaultProductInfo = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultProductInfo;
