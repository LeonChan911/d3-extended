const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');


tape('hide - hide element', test => {
  const document = jsdom.jsdom('<body><div class="test-class"></div></body>');
  const testDiv = d3.select(document).select('div').hide();

  test.equal(testDiv.node().style.display, 'none');
  test.end();
});
