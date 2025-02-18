import otgList from "@/json/generator/weapons/primary.json";

const data: Record<string, any> = {
    "off-the-grid": otgList,
};

export function getPrimaryList(game: string): any {
    return data[game] || {};
}
