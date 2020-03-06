import React from 'react';
import { isEmpty, isNil } from 'lodash';

export function buildCustomCheckProps({ checkedText, uncheckedText, width }) {
  const checkedStyles = { width };
  let checkedIconProps = {};

  if (!isEmpty(checkedText)) {
    checkedIconProps.checkedIcon = (
      <div className="switch__check" style={checkedStyles}>
        {checkedText}
      </div>
    );
  }
  if (!isEmpty(uncheckedText)) {
    checkedIconProps.uncheckedIcon = (
      <div className="switch__uncheck" style={checkedStyles}>
        {uncheckedText}
      </div>
    );
  }

  return checkedIconProps;
}

export function buildClassName({ checkedIcon, uncheckedIcon, checked }) {
  let className = 'switch';
  className = `${className} ${
    checked ? 'switch--checked' : 'switch--unchecked'
  }`;

  if (!isNil(checkedIcon) || !isNil(uncheckedIcon)) {
    className = `${className} switch--with-custom-check`;
  }

  return className;
}
