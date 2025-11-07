type Address = {
    houseNumber: string;
    streetAndTown: string;
    zipCode: string;
}

export const travel = (addressList: string, zipCode: string): string => {
    const addressesDictionary = buildDictionary(addressList);
    const addresses = addressesDictionary[zipCode] || [];
    return formatOutput(addresses);
}

export const parseAddressLine = (line: string) : Address | undefined => {
    const matched = line.match(/^(\d+) (.+) ([A-Z]{2} \d{5})$/);
    if (matched?.length != 4) return undefined;
    return {
        houseNumber: matched[1],
        streetAndTown: matched[2],
        zipCode: matched[3] 
    };
}  

export const buildDictionary = (addressData: string): Record<string, Address[]> => {
    const addressLines = addressData.split(',');
    return addressLines.reduce<Record<string, Address[]>>((prev, line) => {
        const address = parseAddressLine(line);
        if (address) {
            const { zipCode } = address;         
            if (!prev[zipCode]) prev[zipCode] = [];
            prev[zipCode].push(address);
        }
        return prev; 
    }, {})
}

export const formatOutput = (addresses: Address[]) => {
    const details = addresses.reduce<[string, string[], string[]]>((prev, {zipCode, houseNumber, streetAndTown}) => 
        [zipCode, [...prev[1], houseNumber], [...prev[2], streetAndTown]]
    , ["", [], []]);
    return `${details[0]}:${details[2].join(',')}/${details[1].join(',')}`;
}


