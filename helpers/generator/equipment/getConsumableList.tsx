import otgList from "@/json/generator/equipment/consumable.json";

const data: Record<string, any> = {
    "off-the-grid": otgList,
};

export function getConsumableList(game: string): any {
    return data[game] || {};
}
