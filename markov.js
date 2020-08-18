/** Textual markov chain generator */

const { ENGINE_METHOD_PKEY_METHS } = require("constants");


class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = [this.words[i + 1] || null];

      if (chains[word] !== undefined) {
        chains[word].push(nextWord);
      } else {
        chains[word] = nextWord;
      }
    }

    this.chains = chains;
  }

  /** return random text from chains */

  random = (arr) => {
    // console.log(arr)
    return(arr[Math.floor(Math.random() * arr.length)]);
  };

  makeText(numWords = 100) {
    let keys = (Object.keys(this.chains));
    let key = this.random(keys)
    let text = []

    while (text.length < numWords && key !== null) {
      text.push(key);
      key = mm.random(Object.keys(this.chains));
    }
    console.log(text.join(" "))
    return text.join(" ");
  }
}

let mm = new MarkovMachine("the cat in the hat");

mm.makeText();

