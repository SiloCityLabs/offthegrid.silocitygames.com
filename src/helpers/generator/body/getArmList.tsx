// --- Data ---
import otgList from '@/json/generator/body/arm.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

const data: Record<string, GeneratorItem[]> = { 'off-the-grid': otgList };

export function getArmList(game: string): GeneratorItem[] {
  return data[game] || {};
}
