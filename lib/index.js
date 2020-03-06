"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _builders = require("./builders");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Switch(_ref) {
  var name = _ref.name,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      checkedText = _ref.checkedText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      onChange = _ref.onChange,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 20 : _ref$height,
      uncheckedText = _ref.uncheckedText,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width;

  var _buildCustomCheckProp = (0, _builders.buildCustomCheckProps)({
    checkedText: checkedText,
    uncheckedText: uncheckedText,
    width: width,
    checked: checked
  }),
      checkedIcon = _buildCustomCheckProp.checkedIcon,
      uncheckedIcon = _buildCustomCheckProp.uncheckedIcon;

  var className = (0, _builders.buildClassName)({
    checkedIcon: checkedIcon,
    uncheckedIcon: uncheckedIcon,
    checked: checked
  });
  return _react.default.createElement(_reactSwitch.default, {
    name: name,
    checked: checked,
    checkedIcon: checkedIcon,
    className: className,
    disabled: disabled,
    height: height,
    onChange: onChange,
    uncheckedIcon: uncheckedIcon,
    width: width
  });
}

Switch.propTypes = {
  checked: _propTypes.default.bool,
  checkedText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  height: _propTypes.default.number,
  name: _propTypes.default.string,
  uncheckedText: _propTypes.default.string,
  width: _propTypes.default.number,
  onChange: _propTypes.default.func
};
var _default = Switch;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTd2l0Y2giLCJuYW1lIiwiY2hlY2tlZCIsImNoZWNrZWRUZXh0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhlaWdodCIsInVuY2hlY2tlZFRleHQiLCJ3aWR0aCIsImNoZWNrZWRJY29uIiwidW5jaGVja2VkSWNvbiIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxNQUFULE9BU0c7QUFBQSxNQVJEQyxJQVFDLFFBUkRBLElBUUM7QUFBQSwwQkFQREMsT0FPQztBQUFBLE1BUERBLE9BT0MsNkJBUFMsS0FPVDtBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLDJCQUxEQyxRQUtDO0FBQUEsTUFMREEsUUFLQyw4QkFMVSxLQUtWO0FBQUEsTUFKREMsUUFJQyxRQUpEQSxRQUlDO0FBQUEseUJBSERDLE1BR0M7QUFBQSxNQUhEQSxNQUdDLDRCQUhRLEVBR1I7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSx3QkFEREMsS0FDQztBQUFBLE1BRERBLEtBQ0MsMkJBRE8sRUFDUDs7QUFBQSw4QkFDc0MscUNBQXNCO0FBQzNETCxJQUFBQSxXQUFXLEVBQVhBLFdBRDJEO0FBRTNESSxJQUFBQSxhQUFhLEVBQWJBLGFBRjJEO0FBRzNEQyxJQUFBQSxLQUFLLEVBQUxBLEtBSDJEO0FBSTNETixJQUFBQSxPQUFPLEVBQVBBO0FBSjJELEdBQXRCLENBRHRDO0FBQUEsTUFDT08sV0FEUCx5QkFDT0EsV0FEUDtBQUFBLE1BQ29CQyxhQURwQix5QkFDb0JBLGFBRHBCOztBQU9ELE1BQU1DLFNBQVMsR0FBRyw4QkFBZTtBQUFFRixJQUFBQSxXQUFXLEVBQVhBLFdBQUY7QUFBZUMsSUFBQUEsYUFBYSxFQUFiQSxhQUFmO0FBQThCUixJQUFBQSxPQUFPLEVBQVBBO0FBQTlCLEdBQWYsQ0FBbEI7QUFFQSxTQUNFLDZCQUFDLG9CQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVELElBRFI7QUFFRSxJQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLElBQUEsV0FBVyxFQUFFTyxXQUhmO0FBSUUsSUFBQSxTQUFTLEVBQUVFLFNBSmI7QUFLRSxJQUFBLFFBQVEsRUFBRVAsUUFMWjtBQU1FLElBQUEsTUFBTSxFQUFFRSxNQU5WO0FBT0UsSUFBQSxRQUFRLEVBQUVELFFBUFo7QUFRRSxJQUFBLGFBQWEsRUFBRUssYUFSakI7QUFTRSxJQUFBLEtBQUssRUFBRUY7QUFUVCxJQURGO0FBYUQ7O0FBRURSLE1BQU0sQ0FBQ1ksU0FBUCxHQUFtQjtBQUNqQlYsRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUMsSUFERjtBQUVqQlgsRUFBQUEsV0FBVyxFQUFFVSxtQkFBVUUsTUFGTjtBQUdqQlgsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUMsSUFISDtBQUlqQlIsRUFBQUEsTUFBTSxFQUFFTyxtQkFBVUcsTUFKRDtBQUtqQmYsRUFBQUEsSUFBSSxFQUFFWSxtQkFBVUUsTUFMQztBQU1qQlIsRUFBQUEsYUFBYSxFQUFFTSxtQkFBVUUsTUFOUjtBQU9qQlAsRUFBQUEsS0FBSyxFQUFFSyxtQkFBVUcsTUFQQTtBQVFqQlgsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUk7QUFSSCxDQUFuQjtlQVdlakIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFN3aXRjaCBmcm9tICdyZWFjdC1zd2l0Y2gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBidWlsZEN1c3RvbUNoZWNrUHJvcHMsIGJ1aWxkQ2xhc3NOYW1lIH0gZnJvbSAnLi9idWlsZGVycyc7XHJcblxyXG5mdW5jdGlvbiBTd2l0Y2goe1xyXG4gIG5hbWUsXHJcbiAgY2hlY2tlZCA9IGZhbHNlLFxyXG4gIGNoZWNrZWRUZXh0LFxyXG4gIGRpc2FibGVkID0gZmFsc2UsXHJcbiAgb25DaGFuZ2UsXHJcbiAgaGVpZ2h0ID0gMjAsXHJcbiAgdW5jaGVja2VkVGV4dCxcclxuICB3aWR0aCA9IDQwXHJcbn0pIHtcclxuICBjb25zdCB7IGNoZWNrZWRJY29uLCB1bmNoZWNrZWRJY29uIH0gPSBidWlsZEN1c3RvbUNoZWNrUHJvcHMoe1xyXG4gICAgY2hlY2tlZFRleHQsXHJcbiAgICB1bmNoZWNrZWRUZXh0LFxyXG4gICAgd2lkdGgsXHJcbiAgICBjaGVja2VkXHJcbiAgfSk7XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gYnVpbGRDbGFzc05hbWUoeyBjaGVja2VkSWNvbiwgdW5jaGVja2VkSWNvbiwgY2hlY2tlZCB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdFN3aXRjaFxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICBjaGVja2VkSWNvbj17Y2hlY2tlZEljb259XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIHVuY2hlY2tlZEljb249e3VuY2hlY2tlZEljb259XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuU3dpdGNoLnByb3BUeXBlcyA9IHtcclxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGVja2VkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdW5jaGVja2VkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcclxuIl19