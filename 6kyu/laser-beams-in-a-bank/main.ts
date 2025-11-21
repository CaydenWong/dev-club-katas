type Device = 0 | 1;
type Floor = Device[];
type Bank = Floor[];
type BankBluePrint = string[];

export const numberOfBeams = (bankBluePrint: BankBluePrint): number => {
    const bank = buildBank(bankBluePrint);
    return produceBeams(bank);
};

export const produceBeams = (bank : Bank) : number => {
    const m = bank.length;
    const n = bank?.[0].length;

    if (m == 0 || n == 0) return 0;

    let beamCount = 0;
    let emittingRow = 0;

    while(emittingRow < m - 1) {
        const emittingFloor = bank[emittingRow];
        const devicesOnEmittingFloor = getDeviceCount(emittingFloor);
        for (let i = emittingRow + 1; i < m ; i++) {
            emittingRow++;
            const receivingFloor = bank[i];
            const devicesOnReceivingFloor = getDeviceCount(receivingFloor);
            if (devicesOnReceivingFloor == 0) continue;
            beamCount += devicesOnEmittingFloor * devicesOnReceivingFloor;
            break;
        }
    }
    return beamCount;
}

export const getDeviceCount = (floor: Floor) : number =>
    floor.reduce<number>((sum, v) => sum + v, 0);

export const buildBank = (bankBluePrint: BankBluePrint) : Bank => bankBluePrint.map(buildFloorBluePrint);

export const buildFloorBluePrint = (floorBluePrint: string) : Floor => floorBluePrint.split('').map(x => x=='1' ? 1 : 0);
    
