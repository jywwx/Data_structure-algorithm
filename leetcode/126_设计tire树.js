/**
 * 设计字典树
 *  Tire(发音类似‘Try’) 或者说是前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构
 * 有相当多的应用情景，例如自动补充万和拼写检查。
 *
 * Tire() 初始化前缀树对象。
 * void insert(String word) 向前缀数中插入字符串word。
 * boolean search(String word) 如果字符串word 在前缀树中，返回true(即，在检索之前已经插入)；否则，返回false
 * boolean steatWith(String prefix) 如果之前已经插入的字符串word的前缀之一为prefix，返回true；否则返回false。
 *
 */

var Trie = function () {
  this.children = {};
};
Trie.prototype.insert = function (word) {
  let { children } = this;
  for (let ch of word) {
    if (!children[ch]) {
      children[ch] = {};
    }
    children = children[ch];
  }
  children.end = true;
};

Trie.prototype.search = function (word) {
  const ret = this.startWith(word);
  return ret && ret.end;
};

Trie.prototype.startWith = function (prefix) {
  let { children } = this;
  for (let ch of prefix) {
    if (!children[ch]) {
      return false;
    }
    children = children[ch];
  }
  return children;
};

const trie = new Tire();
trie.insert("apple");
