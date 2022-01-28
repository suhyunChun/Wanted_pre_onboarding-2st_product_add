import React, { useState } from 'react';

const ToggleButton = ({ init }) => {
  const [value, setValue] = useState({ init });
  return (
    <div>
      {value ? (
        <img src="toggle_selected.png" onClick={setValue(false)} />
      ) : (
        <img src="toggle_unselected.png" onClick={setValue(true)} />
      )}
    </div>
  );
};

export default ToggleButton;
