'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getWeapon } from '@/helpers/info/getWeapon';
// --- Data ---
import primaryRarity from '@/data/generator/raritys/weapons/primary.json';
import sidearmRarity from '@/data/generator/raritys/weapons/sidearm.json';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'type', 'game', 'rarity', 'cost', 'no_attach', 'no_attach_info'];

export default function WeaponList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon(game);
    // Format data
    for (const key in dataList) {
      const item = dataList[key];

      if (!tmp_types.includes(item.type)) {
        tmp_types.push(item.type);
      }

      if (item.rarity !== 'all') {
        continue;
      }

      const rarity = item.type === 'sidearm' ? sidearmRarity : primaryRarity;

      const rarityNames = rarity.map((rarity) => rarity.name);
      const rarityCost = rarity.map((rarity) => rarity.cost);

      // Join the names with commas
      item.rarity = rarityNames.join(', ');
      item.cost = rarityCost.join(', ');
    }

    setTypes(tmp_types);
    setData(dataList);
    setIsLoading(false);
  }, [game]);

  return (
    <>
      {!isLoading && <InfoList data={data} dataKeys={dataKeys} types={types} url='/info/weapon' />}
    </>
  );
}
