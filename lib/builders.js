"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildCustomCheckProps = buildCustomCheckProps;
exports.buildClassName = buildClassName;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildCustomCheckProps(_ref) {
  var checkedText = _ref.checkedText,
      uncheckedText = _ref.uncheckedText,
      width = _ref.width;
  var checkedStyles = {
    width: width
  };
  var checkedIconProps = {};

  if (!(0, _lodash.isEmpty)(checkedText)) {
    checkedIconProps.checkedIcon = _react.default.createElement("div", {
      className: "switch__check",
      style: checkedStyles
    }, checkedText);
  }

  if (!(0, _lodash.isEmpty)(uncheckedText)) {
    checkedIconProps.uncheckedIcon = _react.default.createElement("div", {
      className: "switch__uncheck",
      style: checkedStyles
    }, uncheckedText);
  }

  return checkedIconProps;
}

function buildClassName(_ref2) {
  var checkedIcon = _ref2.checkedIcon,
      uncheckedIcon = _ref2.uncheckedIcon,
      checked = _ref2.checked;
  var className = 'switch';
  className = "".concat(className, " ").concat(checked ? 'switch--checked' : 'switch--unchecked');

  if (!(0, _lodash.isNil)(checkedIcon) || !(0, _lodash.isNil)(uncheckedIcon)) {
    className = "".concat(className, " switch--with-custom-check");
  }

  return className;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWlsZGVycy5qcyJdLCJuYW1lcyI6WyJidWlsZEN1c3RvbUNoZWNrUHJvcHMiLCJjaGVja2VkVGV4dCIsInVuY2hlY2tlZFRleHQiLCJ3aWR0aCIsImNoZWNrZWRTdHlsZXMiLCJjaGVja2VkSWNvblByb3BzIiwiY2hlY2tlZEljb24iLCJ1bmNoZWNrZWRJY29uIiwiYnVpbGRDbGFzc05hbWUiLCJjaGVja2VkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sU0FBU0EscUJBQVQsT0FBc0U7QUFBQSxNQUFyQ0MsV0FBcUMsUUFBckNBLFdBQXFDO0FBQUEsTUFBeEJDLGFBQXdCLFFBQXhCQSxhQUF3QjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUMzRSxNQUFNQyxhQUFhLEdBQUc7QUFBRUQsSUFBQUEsS0FBSyxFQUFMQTtBQUFGLEdBQXRCO0FBQ0EsTUFBSUUsZ0JBQWdCLEdBQUcsRUFBdkI7O0FBRUEsTUFBSSxDQUFDLHFCQUFRSixXQUFSLENBQUwsRUFBMkI7QUFDekJJLElBQUFBLGdCQUFnQixDQUFDQyxXQUFqQixHQUNFO0FBQUssTUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixNQUFBLEtBQUssRUFBRUY7QUFBdEMsT0FDR0gsV0FESCxDQURGO0FBS0Q7O0FBQ0QsTUFBSSxDQUFDLHFCQUFRQyxhQUFSLENBQUwsRUFBNkI7QUFDM0JHLElBQUFBLGdCQUFnQixDQUFDRSxhQUFqQixHQUNFO0FBQUssTUFBQSxTQUFTLEVBQUMsaUJBQWY7QUFBaUMsTUFBQSxLQUFLLEVBQUVIO0FBQXhDLE9BQ0dGLGFBREgsQ0FERjtBQUtEOztBQUVELFNBQU9HLGdCQUFQO0FBQ0Q7O0FBRU0sU0FBU0csY0FBVCxRQUFpRTtBQUFBLE1BQXZDRixXQUF1QyxTQUF2Q0EsV0FBdUM7QUFBQSxNQUExQkMsYUFBMEIsU0FBMUJBLGFBQTBCO0FBQUEsTUFBWEUsT0FBVyxTQUFYQSxPQUFXO0FBQ3RFLE1BQUlDLFNBQVMsR0FBRyxRQUFoQjtBQUNBQSxFQUFBQSxTQUFTLGFBQU1BLFNBQU4sY0FDUEQsT0FBTyxHQUFHLGlCQUFILEdBQXVCLG1CQUR2QixDQUFUOztBQUlBLE1BQUksQ0FBQyxtQkFBTUgsV0FBTixDQUFELElBQXVCLENBQUMsbUJBQU1DLGFBQU4sQ0FBNUIsRUFBa0Q7QUFDaERHLElBQUFBLFNBQVMsYUFBTUEsU0FBTiwrQkFBVDtBQUNEOztBQUVELFNBQU9BLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzRW1wdHksIGlzTmlsIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEN1c3RvbUNoZWNrUHJvcHMoeyBjaGVja2VkVGV4dCwgdW5jaGVja2VkVGV4dCwgd2lkdGggfSkge1xyXG4gIGNvbnN0IGNoZWNrZWRTdHlsZXMgPSB7IHdpZHRoIH07XHJcbiAgbGV0IGNoZWNrZWRJY29uUHJvcHMgPSB7fTtcclxuXHJcbiAgaWYgKCFpc0VtcHR5KGNoZWNrZWRUZXh0KSkge1xyXG4gICAgY2hlY2tlZEljb25Qcm9wcy5jaGVja2VkSWNvbiA9IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hfX2NoZWNrXCIgc3R5bGU9e2NoZWNrZWRTdHlsZXN9PlxyXG4gICAgICAgIHtjaGVja2VkVGV4dH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoIWlzRW1wdHkodW5jaGVja2VkVGV4dCkpIHtcclxuICAgIGNoZWNrZWRJY29uUHJvcHMudW5jaGVja2VkSWNvbiA9IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hfX3VuY2hlY2tcIiBzdHlsZT17Y2hlY2tlZFN0eWxlc30+XHJcbiAgICAgICAge3VuY2hlY2tlZFRleHR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjaGVja2VkSWNvblByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDbGFzc05hbWUoeyBjaGVja2VkSWNvbiwgdW5jaGVja2VkSWNvbiwgY2hlY2tlZCB9KSB7XHJcbiAgbGV0IGNsYXNzTmFtZSA9ICdzd2l0Y2gnO1xyXG4gIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtcclxuICAgIGNoZWNrZWQgPyAnc3dpdGNoLS1jaGVja2VkJyA6ICdzd2l0Y2gtLXVuY2hlY2tlZCdcclxuICB9YDtcclxuXHJcbiAgaWYgKCFpc05pbChjaGVja2VkSWNvbikgfHwgIWlzTmlsKHVuY2hlY2tlZEljb24pKSB7XHJcbiAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IHN3aXRjaC0td2l0aC1jdXN0b20tY2hlY2tgO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNsYXNzTmFtZTtcclxufVxyXG4iXX0=