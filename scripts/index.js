// import Trie from './Trie.js';
// import words from './words.json';
//
// const completion = new Trie();
//
// $(document).ready(function() {
//   populate();
//   $('#input-field').focus();
// });
//
// $('#input-field').on('input', function() {
//   if ($('#input-field').val() === '') {
//     $('#suggestions').empty();
//   } else {
//     $('#suggestions').empty();
//     filterList();
//   }
// });
//
// $('#suggestions').on('click', 'li', function(e) {
//   select(e);
//   $('#input-field').focus();
// })
//
// function populate() {
//   completion.populate(words);
// }
//
// function filter() {
//   let string = $('#input-field').val();
//   $('li').remove();
//   let suggestions = completion.suggest(string);
//   for (let i = 0; i < 10 && suggestions.length; i++) {
//     if (suggestions[i] !== undefined) {
//       $('#suggestions').append(`<li>${suggestions[i]}</li>`)
//     }
//   }
// }
//
// function select(e) {
//   let selected = e.target.innerHTML.toLowerCase();
//   completion.select(selected);
//   filter();
//   $('#input-field').val(selected);
//   $('#suggestions').empty();
// }
