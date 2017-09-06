class Node {
  constructor(letter = null) {
    this.letter = letter;
    this.children = {};
    this.completeWord = false;
  }

}
export default Node;
