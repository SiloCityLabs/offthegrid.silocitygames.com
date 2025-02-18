export type GeneratorItem = {
  name: string;
  type: string;
  rarity: string;
  cost: number;
};

export type Weapon = {
  name: string;
  type: string;
  rarity: string;
  cost: number;
  no_attach?: boolean;
  no_attach_info?: boolean;
};
