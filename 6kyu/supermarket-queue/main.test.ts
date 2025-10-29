import { queueTime, getNextAvailableTill } from './main';

describe("Sample tests", () => {
    test('no customer' , () => {
        expect(queueTime([], 1)).toBe(0);
        expect(queueTime([], 2)).toBe(0);
        expect(queueTime([], 5)).toBe(0);
    });

    test('no till' , () => {
        expect(queueTime([2], 0)).toBeUndefined();
        expect(queueTime([5,3,4], 0)).toBeUndefined();
    });

    test("only 1 till" , () => {
        expect(queueTime([1,2,3,4], 1)).toBe(10);
        expect(queueTime([5,3,4], 1)).toBe(12);        
    });

    test("multiple tills", () => {
        expect(queueTime([2,2,3,3,4,4], 2)).toBe(9);
        expect(queueTime([1,2,3,4,5], 100)).toBe(5); 
        expect(queueTime([10,2,3,3], 2)).toBe(10);
        expect(queueTime([2,3,10,2], 2)).toBe(12);
        expect(queueTime(new Array(100).fill(5), 4)).toBe(125);
    });
});

describe("Unit test for getNextAvailableTill", () => {
    test("no till available", () => {
        expect(getNextAvailableTill([])).toBe(-1);
    })

    test("expected first till provided multiple tills have the same till time", () => {
        expect(getNextAvailableTill([2,2,3,3,4,4])).toBe(0);
        expect(getNextAvailableTill([4,4,3,3,2,2])).toBe(4);
        expect(getNextAvailableTill([4,2,0,4,0,2])).toBe(2);
    })

    test("one/mutiples tills", () => {
        expect(getNextAvailableTill([1])).toBe(0); 
        expect(getNextAvailableTill([1,2,3,4,5])).toBe(0); 
        expect(getNextAvailableTill([5,4,3,2,1])).toBe(4);
        expect(getNextAvailableTill([4,5,1,3,2])).toBe(2);
    })
})