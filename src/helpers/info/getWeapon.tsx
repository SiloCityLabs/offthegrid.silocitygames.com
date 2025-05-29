// --- Helpers ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
import { getPrimaryList } from '@/helpers/generator/weapons/getPrimaryList';
import { getSidearmList } from '@/helpers/generator/weapons/getSidearmList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function getWeapon(
  game: string = 'all',
  value: string = ''
): GeneratorItem | Record<string, GeneratorItem> {
  const data = mergeObjectsWithRekey(getPrimaryList(game), getSidearmList(game)) as Record<
    string,
    GeneratorItem
  >;

  if (value) {
    // Check if value is not empty
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const weapon = data[key];
        if (weapon.name === value) {
          return weapon as GeneratorItem;
        }
      }
    }
    //Return empty object if no match is found
    return { name: '', type: '', game: '', rarity: '', cost: 0 } as GeneratorItem;
  }

  return data;
}
