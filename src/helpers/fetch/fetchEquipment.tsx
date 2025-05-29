// --- Helpers ---
import { randomListItem, mergeObjectsWithRekey } from '@silocitypages/utils';
import { getBackpackList } from '@/helpers/generator/equipment/getBackpackList';
import { getConsumableList } from '@/helpers/generator/equipment/getConsumableList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const equipmentListGetters: Record<string, (game: string) => any> = {
  backpack: getBackpackList,
  consumable: getConsumableList,
  all: (game: string) => mergeObjectsWithRekey(getBackpackList(game), getConsumableList(game)),
};

export function fetchEquipment(type: string = '', game: string): GeneratorItem {
  const getEquipmentList = equipmentListGetters[type];

  if (getEquipmentList) {
    const data: GeneratorItem = randomListItem(getEquipmentList(game));

    if (data.name === 'Armor Kit Gen I') {
      const count = Math.floor(Math.random() * 3) + 1;
      const name = `Armor Kit Gen I x${count}`;
      const cost = (data?.cost ?? 0) * count;

      return { ...data, name: name, cost: cost };
    }

    return data;
  } else {
    return {} as GeneratorItem;
  }
}
