import { assert } from 'chai';
import Trie from '../scripts/Trie';
import fs from 'fs';

describe('INSERT', () => {

  let completion;

  beforeEach( () => {
    completion = new Trie();
  });

  it('should insert a letter', () => {
    completion.insert('m');
    assert.equal(completion.head.children.m.letter, 'm');
  });

  it('should insert a word', () => {
    completion.insert('mac');
    assert.equal(completion.head.children.m.letter, 'm');
    assert.equal(completion.head.children.m.
                                 children.a.letter, 'a');
    assert.equal(completion.head.children.m.
                                 children.a.
                                 children.c.letter, 'c');
    assert.equal(completion.head.children.m.
                                 children.a.
                                 children.c.completeWord, true);
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
    assert.equal(completion.head.children.c
                                .children.h
                                .children.e
                                .children.e
                                .children.s
                                .children.e
                                .children.s.completeWord, true);

    assert.equal(completion.head.children.c
                                .children.h
                                .children.e.completeWord, false);

    completion.insert('cheese');
    assert.equal(completion.head.children.c
                                .children.h
                                .children.e
                                .children.e
                                .children.s
                                .children.e.completeWord, true);
  });

});

describe('COUNTWORDS', () => {

  it('should increment counter', () => {
    let completion = new Trie();

    assert.equal(completion.count, 0);
    completion.insert('pizza');
    assert.equal(completion.count, 1);
    completion.insert('mac-n-cheese');
    assert.equal(completion.count, 2);
  });

});

describe('SUGGEST', () => {

  it.skip('should return an array of suggested words based on input', () => {
    let completion = new Trie();

  });

});


describe('SELECT', () => {

  it.skip('prioritize words that have already been selected', () => {
    let completion = new Trie();

  });

});

describe('POPULATE', () => {

  it('should import words from the dictionary', () => {
    let completion = new Trie();
    const text = "/usr/share/dict/words";
    let dictionary = fs.readFileSync(text).toString().trim().split('\n');

    completion.populate(dictionary);
    assert.equal(completion.count, 235886);

  });

});
