type Recipe = { [key: string]: number };
type Ingradients = { [key: string]: number };

export const cakes = (recipe: Recipe, available: Ingradients): number => {
    const maxByGradient = Object.keys(recipe).map((key) => {
        const availableAmount = available[key] || 0;
        const requiredAmount = recipe[key];
        return Math.floor(availableAmount / requiredAmount);
    });
    return Math.min(...maxByGradient);
};
