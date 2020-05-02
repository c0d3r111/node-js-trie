function Trie() { 
  this.data    = Object.create(null);
  this.data._s = 0;
}

Trie.prototype.add    = function(word) {
  let last = this.data;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    last[char] = last[char] || Object.create(null);
    last       = last[char];
  }

  if (!last._) {
    last._        = null;
    this.data._s += 1;
  }

  return;
};
Trie.prototype.has    = function(word) {
  let last = this.data;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (!last[char]) return false;

    last = last[char];    
  }

  return "_" in last;
};
Trie.prototype.del    = function(word) {
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
