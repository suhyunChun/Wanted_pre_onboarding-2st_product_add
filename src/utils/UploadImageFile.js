import { useState } from 'react';

const UploadImageFile = ({ title, imgArray }) => {
  const [tmpArr, setTmpArr] = useState(imgArray);

  return (
    <div className="upload-image-container">
      <div className="upload-image-title">{title}</div>
      <div className="upload-image-info">
        <label className="upload-image-btn">
          <input
            id="input-file-img"
            style={{ width: '0%' }}
            type="file"
            accept="image/*"
            onChange={e => setTmpArr([e.target.files[0].name].concat(tmpArr))}
          />
          + 이미지 추가
        </label>
        <div className="image-list">
          {tmpArr.map(i => (
            <div
              onClick={e => {
                setTmpArr(tmpArr.filter(e => e !== i));
              }}
              style={{
                fontSize: '16px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: '10px',
              }}
            >
              {i} <button className="cancleBtn"> X </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadImageFile;
