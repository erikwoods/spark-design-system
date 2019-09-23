import sinon from 'sinon';

var matchMediaStub = sinon.stub();

matchMediaStub.returns({
  matches: false,
  addListener: function() {},
  removeListener: function() {},
});

if (window) {
  window.matchMedia = window.matchMedia || matchMediaStub;
}
