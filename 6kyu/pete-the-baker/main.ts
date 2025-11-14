type Recipe = { [key: string]: number };
type Ingradients = { [key: string]: number };

export const cakes = (recipe: Recipe, available: Ingradients): number => {
    const cakesByGradient = Object.keys(recipe).map((key) => 
        maxUnitsFromResource(recipe[key], available[key])
    );
    return Math.min(...cakesByGradient);
};

export const maxUnitsFromResource = (requiredAmount: number, availableAmount: number): number => {
    if (!availableAmount) return 0;
    return Math.floor(availableAmount / requiredAmount);
}