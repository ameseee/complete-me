import { assert, expect } from 'chai';
import Trie from '../scripts/Trie';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('POPULATE', () => {

  it.skip('should import words from the dictionary', () => {
    let completion = new Trie();

    completion.populate(dictionary);
    assert.equal(completion.count, 235886);
  });

});

describe('INSERT', () => {

  let completion;

  beforeEach( () => {
    completion = new Trie();
  });

  it('should insert a letter', () => {
    completion.insert('m');
    assert.equal(completion.root.children.m.letter, 'm');
  });

  it('should insert a word', () => {
    completion.insert('mac');
    assert.equal(completion.root.children.m.letter, 'm');
    assert.equal(completion.root.children.m.
                                 children.a.letter, 'a');
    assert.equal(completion.root.children.m.
                                 children.a.
                                 children.c.letter, 'c');
    assert.equal(completion.root.children.m.
                                 children.a.
                                 children.c.isCompleteWord, true);
  });

  it('should increase count when a word is inserted', () => {
    let completion = new Trie;

    assert.equal(completion.count, 0);
    completion.insert('pizza');
    assert.equal(completion.count, 1);
    completion.insert('mac-n-cheese');
    assert.equal(completion.count, 2);
  });

  it('should recognize prefixes that are also complete words', () => {
    let completion = new Trie;

    completion.insert('cheeses');
    assert.equal(completion.root.children.c
                                .children.h
                                .children.e
                                .children.e
                                .children.s
                                .children.e
                                .children.s.isCompleteWord, true);

    assert.equal(completion.root.children.c
                                .children.h
                                .children.e.isCompleteWord, false);

    completion.insert('cheese');
    assert.equal(completion.root.children.c
                                .children.h
                                .children.e
                                .children.e
                                .children.s
                                .children.e.isCompleteWord, true);
  });

  it.skip('should XYZ when you try to insert a word that already exists', () => {
    let completion = new Trie();

    completion.insert('macaroni');
    assert.equal(completion.count, 1);
    completion.insert('macaroni');
    assert.equal(completion.count, 1);

  });

});

describe('SUGGEST', () => {

  it('should suggest a word', () => {
    let completion = new Trie();

    completion.insert('climb');
    completion.insert('clam');
    completion.insert('climber');
    completion.insert('clip');
    completion.insert('clinic');
    completion.insert('carry');

    assert.deepEqual(completion.suggest('cli'),
    [ 'climb', 'climber', 'clip', 'clinic' ] );
  });

  it('should not return anything when they enter a prefix that does not exist', () => {
    let completion = new Trie();

    completion.insert('mango');
    completion.insert('coconut');
    completion.insert('almonds');
    completion.insert('chips');

    let newSnack = completion.suggest('ca');

    assert.deepEqual(newSnack, []);
  });

  it.skip('should suggest a word - with entire dictionary', () => {
    let completion = new Trie();
    let suggestPiz = completion.suggest("piz");

    completion.populate(dictionary);
    assert.deepEqual(suggestPiz,
                     ["pize", "pizza", "pizzeria", "pizzicato", "pizzle"]);
    completion.select('pizzeria');
    completion.suggest("piz");
    assert.deepEqual(suggestPiz,
                     ["pizzeria", "pize", "pizza", "pizzicato", "pizzle"]);
  });

  it('should not be case sensitive', () => {
    let completion = new Trie();

    completion.insert('macaroni');
    completion.insert('macaroon');

    assert.deepEqual(completion.suggest('MaC'),
    [ 'macaroni', 'macaroon'] );
  });

});


describe('SELECT', () => {

  it('prioritize words that have already been selected', () => {
    let completion = new Trie();

    completion.populate(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);

    assert.deepEqual(completion.suggest('piz'), ['pize', 'pizza', 'pizzeria',
      'pizzicato', 'pizzle']);
    completion.select('pizzeria');
    assert.deepEqual(completion.suggest('piz'), ['pizzeria', 'pize', 'pizza',
      'pizzicato', 'pizzle']);

  });

});
