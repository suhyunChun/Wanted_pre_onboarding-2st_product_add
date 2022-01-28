import React from 'react';
import SetCategory from './SetDefaultProductInfo/SetCategory';
import SetFilterTag from './SetDefaultProductInfo/SetFilterTag';
import SetProductName from './SetDefaultProductInfo/SetProductName';
import SetProductIntroduce from './SetDefaultProductInfo/SetProductIntroduce';
import SetProductThumbnail from './SetDefaultProductInfo/SetProductThumbnail';
import SetProductFrontImage from './SetDefaultProductInfo/SetProductFrontImage';
import SetProductStore from './SetDefaultProductInfo/SetProductStore';

const BindingContentContainer = ({ category }) => {
  const checkCurrentCategory = () => {
    let currentCategory;

    switch (category) {
      case '카테고리':
        currentCategory = <SetCategory />;
        break;
      case '필터 태그':
        currentCategory = <SetFilterTag />;
        break;
      case '상품명':
        currentCategory = <SetProductName />;
        break;
      case '상품 구성 소개 정보 *':
        currentCategory = <SetProductIntroduce />;
        break;
      case '상품 썸네일':
        currentCategory = <SetProductThumbnail />;
        break;
      case '상품 대표 이미지':
        currentCategory = <SetProductFrontImage />;
        break;
      case '상품 총 재고 *':
        currentCategory = <SetProductStore />;
        break;
      default:
        break;
    }

    return currentCategory;
  };

  return checkCurrentCategory();
};

export default BindingContentContainer;
