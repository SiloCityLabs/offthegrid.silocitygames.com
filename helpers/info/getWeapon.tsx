import { mergeObjectsWithRekey } from "@/helpers/_silabs/mergeObjectsWithRekey";
import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSidearmList } from "@/helpers/generator/weapons/getSidearmList";
import { Weapon } from "@/types/Generator";

export function getWeapon(
  game: string = "all",
  value: string = ""
): Weapon | Record<string, Weapon> {
  const data = mergeObjectsWithRekey(
    getPrimaryList(game),
    getSidearmList(game)
  ) as Record<string, Weapon>;

  return data;
}
