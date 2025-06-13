// --- Data ---
import otgList from '@/data/generator/weapons/primary.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getPrimaryList(game: string): GeneratorItem[] {
  return data[game] || [];
}
