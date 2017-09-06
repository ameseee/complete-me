import Node from './Node';

class Trie {
  constructor() {
    this.head = new Node;
    this.count = 0;
  }

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    })
  }

  insert(data) {
    let splitData = [...data.toLowerCase()];
    let currentNode = this.head;

    splitData.forEach((letter, i, array) => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];

      if (i === array.length - 1) {
        currentNode.completeWord = true;
      }
    })

    this.count++;
  }

  countWords() {
    return this.count;
  }

  suggest() {

  }

  select() {

  }

}

export default Trie;
