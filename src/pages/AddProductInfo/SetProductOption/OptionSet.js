import React from 'react';

const OptionSet = ({ index, key, arrayOptionSet, setArrayOptionSet }) => {
  const clickRemoveOptionSet = () => {
    console.log(arrayOptionSet);
    console.log(index);
    const copy = arrayOptionSet.filter((optionset, i) => i !== index);
    console.log(copy);
    // setArrayOptionSet(arrayOptionSet.filter((optionset, i) => i !== index));
  };
  return (
    <section>
      <h1>옵션세트추가 성공</h1>
      <button onClick={clickRemoveOptionSet}>옵션세트 삭제</button>
      {index}
    </section>
  );
};

export default OptionSet;
