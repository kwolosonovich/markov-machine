const { timeStamp } = require("console")
const { MarkovMachine } = require("./markov")

describe("class MarkovMachine", () => {
  // beforeEach(() => {
  //   mm = new MarkovMachine("the cat in");
  // });

  test("make chains", () => {
    let mm = new MarkovMachine("the cat in");

    expect(mm.chains).toEqual({
      the: ["cat"],
      cat: ["in"],
      in: [null],
    });
  });

  test('get random', () => {
    let mm = new MarkovMachine('the cat');
    expect(["the", "cat"]).toContain(mm.random(["the", "cat"]));    
  });

  test('make text', () => {
    let text = []
    text.push(new MarkovMachine("the", "cat"));
    expect(text.length).toBe(1)
  })
});