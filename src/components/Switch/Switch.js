import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle, handleCheckbox }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle, handleCheckbox}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        // style={{ background: isOn && '#E40000' }}
      />
      {/* <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label> */}
    </>
  );
};

export default Switch;