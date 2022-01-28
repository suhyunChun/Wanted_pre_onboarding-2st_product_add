import { useState } from 'react';
import styled, { css } from 'styled-components';

const UploadImageFile = ({ sort }) => {
  const [tmpArr, setTmpArr] = useState([]);

  const Uploadimagecontainer = styled.div`
    border: 1px solid white;
    display: flex;
    width: 800px;
    flex-direction: column;
    margin: 30px;

    ${({ sort }) =>
      sort === 'table' &&
      css`
        border: none;
        width: 400px;
        margin: 0;
      `}
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
    cursor: pointer;
    font-weight: 550;
  `;
  const ImageList = styled.div`
    margin-left: 5%;
  `;
  const CancleBtn = styled.button`
    border-radius: 100%;
    border: 1px solid lightgray;
    background-color: transparent;
    cursor: pointer;
  `;
  return (
    <Uploadimagecontainer sort={sort}>
      <UploadImageInfo>
        <UploadImageBtn>
          <input
            id="input-file-img"
            style={{ width: '0%' }}
            type="file"
            accept="image/*"
            onChange={e => {
              setTmpArr([e.target.files[0].name].concat(tmpArr));
            }}
          />
          + 이미지 추가
        </UploadImageBtn>
        <ImageList>
          {tmpArr &&
            tmpArr.map(index => (
              <div
                onClick={() => {
                  setTmpArr(tmpArr.filter(e => e !== index));
                }}
                style={{
                  fontSize: '16px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginBottom: '10px',
                }}
                key={index}
              >
                {index} <CancleBtn> X </CancleBtn>
              </div>
            ))}
        </ImageList>
      </UploadImageInfo>
    </Uploadimagecontainer>
  );
};

export default UploadImageFile;
