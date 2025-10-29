export const queueTime = (customerTimes: number[], tillCount: number): number|undefined => {
    if (!tillCount) return undefined; // return undefined if there's no till

    const tillTimes = Array(tillCount).fill(0);

    customerTimes.forEach(customerTime => {
        const nextTill = getNextAvailableTill(tillTimes);
        tillTimes[nextTill] += customerTime;
    });

    return Math.max(...tillTimes);
};

export const getNextAvailableTill = (tillTimes: number[]) => {
    const min = Math.min(...tillTimes);
    return tillTimes.indexOf(min);
}