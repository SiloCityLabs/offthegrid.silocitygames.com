// --- Data ---
import otgList from '@/data/generator/body/legs.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getLegsList(game: string): GeneratorItem[] {
  return data[game] || {};
}
