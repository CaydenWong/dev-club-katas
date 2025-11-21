import { numberOfBeams } from './main';

describe("Sample tests", () => {
    test('test case 1' , () => {
        const bank = ["011001","000000","010100","001000"];
        expect(numberOfBeams(bank)).toBe(8);     
    });

    test('test case 2' , () => {
        const bank = ["000","111","000"];
        expect(numberOfBeams(bank)).toBe(0);
    });

     // Additional tests
    test('empty bank should return 0', () => {
        expect(numberOfBeams([])).toBe(0);
    });

    test('all zero rows produce 0 beams', () => {
        const bank = ["0000","0000","0000"];
        expect(numberOfBeams(bank)).toBe(0);
    });

    test('single active row produces 0', () => {
        const bank = ["000","111","000","000"];
        expect(numberOfBeams(bank)).toBe(0);
    });

    test('multiple active rows with gaps', () => {
        const bank = ["1","0","1","1"];
        // active rows counts: 1,1,1 -> beams = 1*1 + 1*1 = 2
        expect(numberOfBeams(bank)).toBe(2);
    });

    test('consecutive active rows all contribute', () => {
        const bank = ["101","111","010"];
        // counts: 2,3,1 => beams = 2*3 + 3*1 = 6 + 3 = 9
        expect(numberOfBeams(bank)).toBe(9);
    });

    test('equal-sized active rows', () => {
        const bank = ["111","111","111"];
        // counts: 3,3,3 => 3*3 + 3*3 = 9 + 9 = 18
        expect(numberOfBeams(bank)).toBe(18);
    });

    test('zeros interleaved with actives', () => {
        const bank = ["0000","0010","0000","1100","0000","1000"];
        // counts: 0,1,0,2,0,1 => beams: 1*2 + 2*1 = 2 + 2 = 4
        expect(numberOfBeams(bank)).toBe(4);
    });

    test('single row with many devices produces 0', () => {
        const bank = ["1101"];
        expect(numberOfBeams(bank)).toBe(0);
    });
});