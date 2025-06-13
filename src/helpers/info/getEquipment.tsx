// --- Helpers ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
import { getBackpackList } from '@/helpers/generator/equipment/getBackpackList';
import { getConsumableList } from '@/helpers/generator/equipment/getConsumableList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function getEquipment(game: string = 'all'): GeneratorItem | Record<string, GeneratorItem> {
  const data = mergeObjectsWithRekey(getBackpackList(game), getConsumableList(game)) as Record<
    string,
    GeneratorItem
  >;

  return data;
}
