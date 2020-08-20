const { timeStamp } = require("console");
const { getFromUrl } = require("./makeText");
const { getFromFile } = require("./makeText");
const { MarkovMachine } = require("./markov");

// describe('make text', () => {

// test get from URL
    // test('getFromUrl', () => {
    //     expect.hasAssertions()
    //     prepareState(state => {
    //         expect(validateState()).toBeTruthy()
    //     })
    //     return waitOnState
    // })

    // test('getFromUrl', () => {
    //     // let res;
    //     expect.assertions()
    //     getFromUrl = (data) => {
    //         axios.get(data);
    //         expect(data).toBeTruthy();
    //     }
    //     res = await axios.get(data);
    // })

    // test('getFromUrl', () => {
    //    res = await axios.get(path);
    //     expect(axios.get(path)).toHaveReturned(res);


// test get from file   
    test('getFromFile', () => {
        expect.assertions()
        readFromFile = (data) => {
            expect(data).toBeTruthy
        }
    })

    test('checkType', () => {
        let url = 'http://www.gutenberg.org/files/11/11-0.txt'
        let path = process.argv[3];
        expect(path).toBeTruthy;
    })

    test("checkType", () => {
        let file = "eggs.txt";
        let path = process.argv[3];
        readFromFile();
        expect(path).toBeTruthy;
    });

// })