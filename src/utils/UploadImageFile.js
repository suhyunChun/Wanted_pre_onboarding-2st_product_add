import { useState } from 'react';
import styled from 'styled-components';

const UploadImageFile = ({ imgArray }) => {
  const [tmpArr, setTmpArr] = useState(imgArray);

  const Uploadimagecontainer = styled.div`
    border: 1px solid white;
    display: flex;
    width: 800px;
    flex-direction: column;
    margin: 30px;
  `;
  const UploadImageTitle = styled.div`
    border-bottom: 1px solid white;
    width: 100%;
    float: left;
    display: flex;
    padding: 10px;
    font-weight: 700;
  `;
  const UploadImageInfo = styled.div`
    margin: 10px;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-direction: row;
  `;
  const UploadImageBtn = styled.label`
    font-size: 16px;
    padding: 10px;
    border: 2px solid #1c1c81;
    width: 130px;
    height: 45px;

    font-weight: 550;
  `;
  const ImageList = styled.div`
    margin-left: 5%;
  `;
  const CancleBtn = styled.button`
    border-radius: 100%;
    border: 1px solid lightgray;
    background-color: transparent;
  `;
  return (
    <Uploadimagecontainer>
      <UploadImageInfo>
        <UploadImageBtn>
          <input
            id="input-file-img"
            style={{ width: '0%' }}
            type="file"
            accept="image/*"
            onChange={e => {
              setTmpArr([e.target.files[0].name].concat(tmpArr));
              console.log('업로드 된 이미지 :', e.target.files[0].name);
            }}
          />
          + 이미지 추가
        </UploadImageBtn>
        <ImageList>
          {tmpArr &&
            tmpArr.map(i => (
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
                {i} <CancleBtn> X </CancleBtn>
              </div>
            ))}
        </ImageList>
      </UploadImageInfo>
    </Uploadimagecontainer>
  );
};

export default UploadImageFile;
