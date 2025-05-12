import { mergeObjectsWithRekey } from '@/helpers/_silabs/mergeObjectsWithRekey';
import { getBackpackList } from '@/helpers/generator/equipment/getBackpackList';
import { getConsumableList } from '@/helpers/generator/equipment/getConsumableList';
import { GeneratorItem } from '@/types/Generator';

export function getEquipment(
  game: string = 'all',
  value: string = ''
): GeneratorItem | Record<string, GeneratorItem> {
  const data = mergeObjectsWithRekey(getBackpackList(game), getConsumableList(game)) as Record<
    string,
    GeneratorItem
  >;

  return data;
}
