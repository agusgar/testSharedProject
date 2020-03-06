import React from 'react';
import ReactSwitch from 'react-switch';
import PropTypes from 'prop-types';
import { buildCustomCheckProps, buildClassName } from './builders';

function Switch({
  name,
  checked = false,
  checkedText,
  disabled = false,
  onChange,
  height = 20,
  uncheckedText,
  width = 40
}) {
  const { checkedIcon, uncheckedIcon } = buildCustomCheckProps({
    checkedText,
    uncheckedText,
    width,
    checked
  });
  const className = buildClassName({ checkedIcon, uncheckedIcon, checked });

  return (
    <ReactSwitch
      name={name}
      checked={checked}
      checkedIcon={checkedIcon}
      className={className}
      disabled={disabled}
      height={height}
      onChange={onChange}
      uncheckedIcon={uncheckedIcon}
      width={width}
    />
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  checkedText: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  name: PropTypes.string,
  uncheckedText: PropTypes.string,
  width: PropTypes.number,
  onChange: PropTypes.func
};

export default Switch;
