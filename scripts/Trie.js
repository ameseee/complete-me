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
    let suggestions = [];
    let maxWords = 10;

    //check that they entered something!
    if (typeof input !== 'string' || input === '') {
      return 'Input a string';
    }

    //get currentNode somehow

    if (!currentNode) {
      return 'No suggestions available';
    }

    if (currentNode = completeWord) {
      //push that input into suggestions array//do something to slice 0-10 before returning that array
    }
    //don't let it suggest more than 10 words
    //put matches into an array
  }

  select() {

  }

}

export default Trie;
