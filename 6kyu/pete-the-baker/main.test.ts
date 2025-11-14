import { cakes } from './main';

describe('cake', () => {
    test('test 1', () => {
        let recipe = { flour: 500, sugar: 200, eggs: 1 };
        let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
        expect(cakes(recipe, available)).toBe(2);
    });

    test('test 2', () => {
        let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
        let available = { sugar: 500, flour: 2000, milk: 2000 };
        expect(cakes(recipe, available)).toBe(0);
    });

    // Edge cases
    test('should return 0 when no ingredients available', () => {
        let recipe = { flour: 500, sugar: 200, eggs: 1 };
        let available = {};
        expect(cakes(recipe, available)).toBe(0);
    });

    test('should return 0 when some required ingredients are missing', () => {
        let recipe = { flour: 500, sugar: 200, eggs: 1, butter: 100 };
        let available = { flour: 1000, sugar: 1000, eggs: 5 };
        expect(cakes(recipe, available)).toBe(0);
    });

    test('should handle exact ingredient quantities', () => {
        let recipe = { flour: 500, sugar: 200, eggs: 1 };
        let available = { flour: 500, sugar: 200, eggs: 1 };
        expect(cakes(recipe, available)).toBe(1);
    });

    test('should handle single ingredient recipe', () => {
        let recipe = { flour: 100 };
        let available = { flour: 500 };
        expect(cakes(recipe, available)).toBe(5);
    });

    test('should handle many ingredients', () => {
        let recipe = { flour: 100, sugar: 50, eggs: 2, milk: 100, oil: 25, salt: 1, baking_powder: 1 };
        let available = { flour: 500, sugar: 250, eggs: 10, milk: 500, oil: 125, salt: 5, baking_powder: 5 };
        expect(cakes(recipe, available)).toBe(5);
    });

    test('should be limited by the ingredient with least availability', () => {
        let recipe = { flour: 100, sugar: 100 };
        let available = { flour: 1000, sugar: 200 };
        expect(cakes(recipe, available)).toBe(2);
    });

    test('should return 0 when recipe requires more than available', () => {
        let recipe = { flour: 1000, sugar: 500 };
        let available = { flour: 500, sugar: 300 };
        expect(cakes(recipe, available)).toBe(0);
    });

    test('should handle large numbers', () => {
        let recipe = { flour: 1000, sugar: 500 };
        let available = { flour: 1000000, sugar: 500000 };
        expect(cakes(recipe, available)).toBe(1000);
    });

    test('should handle zero in available ingredients', () => {
        let recipe = { flour: 100, sugar: 100 };
        let available = { flour: 0, sugar: 500 };
        expect(cakes(recipe, available)).toBe(0);
    });

    test('should handle extra available ingredients not in recipe', () => {
        let recipe = { flour: 100 };
        let available = { flour: 500, sugar: 1000, eggs: 50, milk: 200 };
        expect(cakes(recipe, available)).toBe(5);
    });
});
