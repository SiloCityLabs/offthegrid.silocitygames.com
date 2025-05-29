export type GeneratorItem = {
  name: string;
  type: string;
  rarity: string;
  cost: number;
  game: string;
};

export type Weapon = {
  name: string;
  type: string;
  rarity: string;
  cost: number;
  game: string;
  no_attach?: boolean;
  no_attach_info?: boolean;
};
