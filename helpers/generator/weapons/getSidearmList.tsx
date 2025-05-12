import otgList from '@/json/generator/weapons/sidearm.json';

const data: Record<string, any> = { 'off-the-grid': otgList };

export function getSidearmList(game: string): any {
  return data[game] || {};
}
