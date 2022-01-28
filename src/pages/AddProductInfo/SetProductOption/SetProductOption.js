import React, { useState } from 'react';
import OptionSet from './OptionSet';

const SetProductOption = () => {
  const [arrayOptionSet, setArrayOptionSet] = useState([]);

  const clickShowAddOptionSet = () => {
    const copyPush = arrayOptionSet.concat(<OptionSet />);
    setArrayOptionSet(copyPush);
  };

  return (
    <div>
      <header>
        <p>상품 옵션*</p>
        <button onClick={clickShowAddOptionSet}>+옵션 세트 추가</button>
      </header>
      {arrayOptionSet.map((optionSet, index) => {
        return (
          <OptionSet
            key={index}
            index={index}
            arrayOptionSet={arrayOptionSet}
            setArrayOptionSet={setArrayOptionSet}
          />
        );
      })}
    </div>
  );
};

export default SetProductOption;
