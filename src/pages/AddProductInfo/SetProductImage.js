import React, { useState } from 'react';
import UploadImageFile from '../../utils/UploadImageFile';

const SetProductImage = ({ title, imgArray }) => {
  return (
    <div>
      <UploadImageFile title={title} imgArray={imgArray} />
    </div>
  );
};

export default SetProductImage;
