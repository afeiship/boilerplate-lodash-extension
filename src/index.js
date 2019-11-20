(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('lodash')))
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global._ = factory(_));
})(this, function(_) {
  // YOUR CODES
  return _;
});
