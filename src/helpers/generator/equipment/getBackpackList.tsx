import otgList from '@/json/generator/equipment/backpack.json';

const data: Record<string, any> = { 'off-the-grid': otgList };

export function getBackpackList(game: string): any {
  return data[game] || {};
}
