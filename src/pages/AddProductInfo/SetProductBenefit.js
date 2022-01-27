import React, { useState } from 'react';
import ToggleButton from 'react-toggle-button';

const SetProductBenefit = () => {
  const [productBenefit, setProductBenefit] = useState(true);
  return (
    <div>
      <div>마일리지 적립</div>
      <div>
        <ToggleButton
          value={productBenefit}
          onToggle={value => {
            setProductBenefit(e => !e);
          }}
        />
      </div>
    </div>
  );
};

export default SetProductBenefit;
