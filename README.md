# node-js-trie
Trie data structure

# Usage

```javascript

const Trie  = require('trie');
const trie  = new Trie();
const words = ["apples", "oranges", "cats", "dogs"];

for (let word of words) {
  void trie.add(word);
}

void console.log(trie.has("apples"); // true
void console.log(trie.has("apple");  // false
void console.log(trie.size());      // 4

```
