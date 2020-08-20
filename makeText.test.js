const { timeStamp } = require("console");
const { getFromUrl } = require("./makeText");
const { getFromFile } = require("./makeText");
const { MarkovMachine } = require("./markov");

describe('make text', () => {


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

})