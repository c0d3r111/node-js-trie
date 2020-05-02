function Trie() { 
  this.data    = Object.create(null);
  this.data._s = 0;
}

Trie.prototype.add    = function(_word, value = 1) {
  let word = _word.slice().toLowerCase().replace(/[^a-z]/g, '');
  let last = this.data;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    last[char] = last[char] || Object.create(null);
    last       = last[char];
  }

  if (!last._) {
    last._ = value;
    this.data._s += 1;
  }

  return;
};
Trie.prototype.has    = function(_word) {
  let word = _word.slice().toLowerCase().replace(/[^a-z]/g, '');
  let last = this.data;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (!last[char]) return false;

    last = last[char];    
  }

  return last._ ? true : false;
};
Trie.prototype.del    = function(_word) {
  let word = _word.slice().toLowerCase().replace(/[^a-z]/g, '');
  let last = this.data;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (!last[char]) return;

    last = last[char];    
  }

  if (last._) {
    delete last._;
    this.data._s -= 1;
  }

  return;
};
Trie.prototype.export = function() {
  return JSON.stringify(this.data);
};
Trie.prototype.import = function(data) {
  try {
    if (typeof data === 'object') {
      this.data = data;
    }
    else {
      this.data = JSON.parse(data);
    }
  }
  catch(err) {
    this.data = this.data || Object.create(null);
  }
};

module.exports = Trie;