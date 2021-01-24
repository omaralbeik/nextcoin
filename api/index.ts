export interface Rate {
    "15m": number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
}

export interface Rates {
    [currency: string]: Rate;
}

export async function fetchRates(): Promise<Rates> {
    const response = await fetch("https://blockchain.info/ticker");
    return await response.json();
}