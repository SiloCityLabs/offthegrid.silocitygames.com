//Types
import { Weapon } from '@/types/Generator';

const attachmentGetters: Record<string, (type: string, gun: string, count: number) => any> = {};

export function fetchAttachments(weapon: Weapon, count: number = 1): any {
  if (weapon?.no_attach_info) {
    return [`No attachment info. Randomly select ${count}.`];
  }

  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const getAttachments = attachmentGetters[weapon.game];

  if (getAttachments) {
    return getAttachments(weapon.type, gun, count);
  } else {
    return {};
  }
}
