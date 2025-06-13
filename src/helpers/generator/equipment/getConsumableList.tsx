// --- Data ---
import otgList from '@/data/generator/equipment/consumable.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getConsumableList(game: string): GeneratorItem[] {
  return data[game] || {};
}
