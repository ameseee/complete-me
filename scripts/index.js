import Trie from '../scripts/Trie';

export default Trie;

// import Trie from './Trie.js';
// import words from './words.json';
//
// const completion = new Trie();

// const $input = $('#input-field');
// const $suggestions = $('#suggestions');
//
// $(document).ready(function() {
//   populate();
//   $input.focus();
// });
//
// $input.on('input', function() {
//   if ($input.val() === '') {
//     $suggestions.empty();
//   } else {
//     $suggestions.empty();
//     filterList();
//   }
// });
//
// $suggestions.on('click', 'li', function(e) {
//   select(e);
//   $input.focus();
// })
//
// function populate() {
//   completion.populate(words);
// }
//
// function filter() {
//   let string = $input.val();
//   $('li').remove();
//   let suggestions = completion.suggest(string);
//   for (let i = 0; i < 10 && suggestions.length; i++) {
//     if (suggestions[i] !== undefined) {
//       $suggestions.append(`<li>${suggestions[i]}</li>`)
//     }
//   }
// }
//
// function select(e) {
//   let selected = e.target.innerHTML.toLowerCase();
//   completion.select(selected);
//   filter();
//   $input.val(selected);
//   $suggestions.empty();
// }
