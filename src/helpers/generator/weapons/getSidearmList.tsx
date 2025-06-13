// --- Data ---
import otgList from '@/data/generator/weapons/sidearm.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getSidearmList(game: string): GeneratorItem[] {
  return data[game] || [];
}
