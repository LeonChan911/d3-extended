const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');

tape('hasclass - element has certain class', test => {
  const document = jsdom.jsdom('<body><div class="test-class"></div></body>');
  const testDiv = d3.select(document).select('div');

  test.ok(testDiv.hasClass('test-class'));
  test.end();
});
