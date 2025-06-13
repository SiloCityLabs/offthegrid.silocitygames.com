// --- Helpers ---
import { randomListItem } from '@silocitypages/utils';
import { getArmList } from '@/helpers/generator/body/getArmList';
import { getLegsList } from '@/helpers/generator/body/getLegsList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';
// --- Data ---
import raritys from '@/data/generator/raritys/body.json';

const bodyListGetters: Record<string, (game: string) => GeneratorItem[]> = {
  arm: getArmList,
  legs: getLegsList,
  all: (game: string) => [...getArmList(game), ...getLegsList(game)],
};

export function fetchBody(type: string = '', game: string): GeneratorItem {
  const getBodyList = bodyListGetters[type];
  const randomRarity = raritys[Math.floor(Math.random() * raritys.length)];

  if (getBodyList) {
    const data: GeneratorItem = randomListItem(getBodyList(game));

    const rarity = data.rarity === 'all' ? randomRarity.name : data.rarity;
    const cost = !data.cost ? randomRarity.cost : data.cost;

    return { ...data, rarity: rarity, cost: cost };
  } else {
    return {} as GeneratorItem;
  }
}
