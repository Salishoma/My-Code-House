/*
In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

LeetCode: 648. Replace Words
*/

const replaceWords = (dict, sentence) => {
  const wordTree = {};
  dict.forEach(word => writeWord(wordTree, word));
  return sentence.split(' ').map(word => getRoot(wordTree, word)).join(' ');
};

const writeWord = (node, word) => {
  for (const l of word) {
    node = node[l] = node[l] || {};
  }
  node.terminal = true;
}

const getRoot = (node, word, i = 0) => {
  if (node.terminal) return word.slice(0, i);
  if (node[word[i]]) return getRoot(node[word[i]], word, i + 1);
  return word;
}
replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")