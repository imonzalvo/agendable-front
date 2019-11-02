const escape = require('shell-quote').quote;

function listQuote(filenames) {
  return filenames.map(filename => `${filename}`);
}

function listEscape(filenames) {
  return filenames.map(filename => escape([filename]));
}

module.exports = {
  '**/*.{js,ts,tsx}': filenames => [
    `eslint --fix ${listQuote(filenames).join(' ')}`,
    `prettier --write ${listQuote(listEscape(filenames)).join(' ')}`,
    `git add ${listQuote(filenames).join(' ')}`,
  ],
};
