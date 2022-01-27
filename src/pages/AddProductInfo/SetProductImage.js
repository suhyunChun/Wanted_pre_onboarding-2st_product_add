import React, { useState } from 'react';
import UploadImageFile from '../../utils/UploadImageFile';

const SetProductImage = () => {
  const [introImage, setIntroImg] = useState([]);
  const [recommendImage, setRecommendImage] = useState([]);
  return (
    <div>
      <UploadImageFile title="상품 소개 이미지" imgArray={introImage} />

      <UploadImageFile title="구매자 추천 이미지" imgArray={recommendImage} />
    </div>
  );
};

export default SetProductImage;
