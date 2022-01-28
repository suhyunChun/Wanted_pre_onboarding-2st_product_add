import React from 'react';
import styled from 'styled-components';

const TextInput = ({ value, sort, placeholder, eventCallback }) => {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      sort={sort}
      onFocus={sort === 'filter' && eventCallback.getAllTagList}
      onChange={sort === 'filter' && eventCallback.getTagListByKeyword}
    />
  );
};

const StyledInput = styled.input`
  width: ${({ sort }) => (sort === 'filter' ? '650px' : '200px')};
  padding: 12px 0 12px 10px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #cecece;
  border-radius: 3px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d3d1d1;
  }
`;

export default TextInput;
