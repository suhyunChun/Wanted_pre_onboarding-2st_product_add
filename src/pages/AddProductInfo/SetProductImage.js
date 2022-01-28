import React, { useState } from 'react';
import UploadImageFile from '../../utils/UploadImageFile';
import AddProductInfoForm from './AddProductInfoForm';

const SetProductImage = ({ imgArray }) => {
  return <UploadImageFile imgArray={imgArray} />;
};

export default SetProductImage;
