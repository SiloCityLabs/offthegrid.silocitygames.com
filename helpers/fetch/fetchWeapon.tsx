// --- Helpers ---
import { randomListItem, mergeObjectsWithRekey } from '@silocitypages/utils';
import { getPrimaryList } from '@/helpers/generator/weapons/getPrimaryList';
import { getSidearmList } from '@/helpers/generator/weapons/getSidearmList';
// --- Types ---
import { Weapon } from '@/types/Generator';
// --- Data ---
import primaryRaritys from '@/json/generator/raritys/weapons/primary.json';
import sidearmRaritys from '@/json/generator/raritys/weapons/sidearm.json';

const weaponListGetters: Record<string, (game: string) => any> = {
  primary: getPrimaryList,
  sidearm: getSidearmList,
  all: (game: string) => mergeObjectsWithRekey(getPrimaryList(game), getSidearmList(game)),
};

const rarityListGetters: Record<string, any> = { primary: primaryRaritys, sidearm: sidearmRaritys };

export function fetchWeapon(
  type: string = '',
  game: string,
  excludeWeapon: string = '',
  needsAttachments: boolean = false
): Weapon {
  const getWeaponList = weaponListGetters[type];
  const raritys = rarityListGetters[type];
  const randomRarity = raritys[Math.floor(Math.random() * raritys.length)];
  let rollAgain = false;

  if (getWeaponList) {
    let data: Weapon;

    do {
      rollAgain = false;
      data = randomListItem(getWeaponList(game));

      //Roll a weapon that has attachments\
      if (needsAttachments && data.no_attach) {
        rollAgain = true;
      }
    } while (data.name === excludeWeapon || rollAgain);

    return { ...data, rarity: randomRarity.name, cost: randomRarity.cost };
  } else {
    return {} as Weapon;
  }
}
