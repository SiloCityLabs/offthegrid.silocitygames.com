// --- Data ---
import otgList from '@/json/generator/equipment/backpack.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getBackpackList(game: string): GeneratorItem[] {
  return data[game] || {};
}
