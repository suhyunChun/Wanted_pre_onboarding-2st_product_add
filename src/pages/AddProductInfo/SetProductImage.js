import React, { useState } from 'react';
import UploadImageFile from '../../utils/UploadImageFile';

const SetProductImage = ({ imgArray }) => {
  return <UploadImageFile imgArray={imgArray} />;
};

export default SetProductImage;
