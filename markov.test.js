const { timeStamp } = require("console")
const { MarkovMachine } = require("./markov")

let mm = null

describe("class MarkovMachine", () => {
  beforeEach(() => {
    mm = new MarkovMachine("the cat in");
  });

  test("make chains", () => {
        mm = new MarkovMachine("the cat in");

    expect(mm.chains).toEqual({
      the: ["cat"],
      cat: ["in"],
      in: ["the"],
    });
  });

  test('get random', () => {
    //   const expected = ['the', 'cat']
    //   let keyArr = []
    //   keyArr.push(mm.random)
    //   expect(keyArr).toEqual(expect.arrayContaining(expected))

    // expect([mm.randomKey]).toEqual(expect.arrayContaining(expected)); 
    // const expected = 'the cat in the hat'
    // console.log(expected)
    // console.log(mm.random)
    // expect(mm.randomKey).toEqual(expect.stringContaining(expected))   
    // expect(expected).toEqual(expect.stringContaining(mm.randomKey)); 
    expect([the, cat]).toContain(MarovMachine.random([the, cat]));   
    // expect([the, cat]).toContain(mm.random([the, cat]));   
       
  });

  test('')

});