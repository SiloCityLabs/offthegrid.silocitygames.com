import { getArmList } from "@/helpers/generator/body/getArmList";
import { getLegsList } from "@/helpers/generator/body/getLegsList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { mergeObjectsWithRekey } from "@/helpers/_silabs/mergeObjectsWithRekey";
//Types
import { GeneratorItem } from "@/types/Generator";
//json
import raritys from "@/json/generator/raritys/body.json";

const bodyListGetters: Record<string, (game: string) => any> = {
  arm: getArmList,
  legs: getLegsList,
  all: (game: string) =>
    mergeObjectsWithRekey(getArmList(game), getLegsList(game)),
};

export function fetchBody(type: string = "", game: string): GeneratorItem {
  const getBodyList = bodyListGetters[type];
  const randomRarity = raritys[Math.floor(Math.random() * raritys.length)];

  if (getBodyList) {
    let data: GeneratorItem = randomListItem(getBodyList(game));

    const rarity = data.rarity === "all" ? randomRarity.name : data.rarity;
    const cost = !data.cost ? randomRarity.cost : data.cost;

    return { ...data, rarity: rarity, cost: cost };
  } else {
    return {} as GeneratorItem;
  }
}
