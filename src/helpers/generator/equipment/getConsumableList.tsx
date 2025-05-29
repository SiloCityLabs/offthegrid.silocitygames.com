// --- Data ---
import otgList from '@/json/generator/equipment/consumable.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getConsumableList(game: string): GeneratorItem[] {
  return data[game] || {};
}
