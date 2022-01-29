import React from 'react';

const optionSet = [
  {
    optionSetId: 1,
    image: '1.jpg',
    option: [
      {
        optionId: 1,
        optionName: 1,
        normalPrice: 1,
        discount: 1,
        realPrice: 1,
        product: 1,
        select: 1,
        addtionOptionProduct: {
          addtionOptionId: 1,
          addtionOptionName: 1,
          addtionOptionNormalPrice: 1,
        },
      },
      {
        optionId: 2,
        optionName: 1,
        normalPrice: 1,
        discount: 1,
        realPrice: 1,
        product: 1,
        select: 1,
        addtionOptionProduct: [
          {
            addtionOptionId: 1,
            addtionOptionName: 1,
            addtionOptionNormalPrice: 1,
          },
          {
            addtionOptionId: 2,
            addtionOptionName: 1,
            addtionOptionNormalPrice: 1,
          },
        ],
      },
    ],
  },
  {
    optionSetId: 2,
    image: '2.jpg',
    option: [
      {
        optionId: 1,
        optionName: 1,
        normalPrice: 1,
        discount: 1,
        realPrice: 1,
        product: 1,
        select: 1,
        addtionOptionProduct: {
          addtionOptionId: 1,
          addtionOptionName: 1,
          addtionOptionNormalPrice: 1,
        },
      },
      {
        optionId: 2,
        optionName: 1,
        normalPrice: 1,
        discount: 1,
        realPrice: 1,
        product: 1,
        select: 1,
        addtionOptionProduct: [
          {
            addtionOptionId: 1,
            addtionOptionName: 1,
            addtionOptionNormalPrice: 1,
          },
          {
            addtionOptionId: 2,
            addtionOptionName: 1,
            addtionOptionNormalPrice: 1,
          },
        ],
      },
    ],
  },
];

const TestProductOption = () => {
  console.log(optionSet);
  return (
    <div>
      <p>테스트 optionSet</p>
      {optionSet.map((optionSet, i) => {
        return (
          <>
            <h1>optionSetId: {optionSet.optionSetId}</h1>
            <h1>image: {optionSet.image}</h1>
            {optionSet.option.map((option, i) => {
              return (
                <div>
                  <h2>옵션아이디: {option.optionId}</h2>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default TestProductOption;
