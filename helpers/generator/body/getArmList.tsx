import otgList from "@/json/generator/body/arm.json";

const data: Record<string, any> = {
    "off-the-grid": otgList,
};

export function getArmList(game: string): any {
    return data[game] || {};
}
