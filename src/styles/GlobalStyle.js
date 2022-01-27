import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
      box-sizing: border-box;
  }
  .upload-image-container{
    border: 1px solid lightgray;
    display:flex;
    width:800px;
    flex-direction: column;
    margin:30px;
  }

  .upload-image-btn{
    font-size:16px;
    padding:10px;
    border: 2px solid #1c1c81;
    width:130px;
    height:45px;
    font-weight:550
  }

  .upload-image-title{
    border-bottom:1px solid lightgray;
    width:100%;
    float:left;
    display:flex;
    padding:10px;
    font-weight:700;
  }

  .upload-image-info{
    margin:10px;
    display:flex;
    overflow:hidden;
    text-overflow: ellipsis;
    flex-direction: row;
  }
  .upload-image-info>div{
    overflow:hidden;
    text-overflow: ellipsis;
  }
  .image-list{
    margin-left:5%;
  }
  .cancleBtn{
    border-radius:100%;
    border: 1px solid lightgray;
    background-color:transparent;
  }
`;

export default GlobalStyle;
