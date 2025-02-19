import otgList from "@/json/generator/body/legs.json";

const data: Record<string, any> = {
    "off-the-grid": otgList,
};

export function getLegsList(game: string): any {
    return data[game] || {};
}
