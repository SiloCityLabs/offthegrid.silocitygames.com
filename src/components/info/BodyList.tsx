'use client';

// --- React ---
import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getBody } from '@/helpers/info/getBody';
// --- Data ---
import bodyRarity from '@/data/generator/raritys/body.json';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'type', 'rarity', 'cost'];

export default function EquipmentList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getBody(game);
    //Format data
    for (const key in dataList) {
      const item = dataList[key];

      if (item.rarity !== 'all') {
        continue;
      }

      const rarityNames = bodyRarity.map((rarity) => rarity.name);
      const rarityCost = bodyRarity.map((rarity) => rarity.cost);

      // Join the names with commas
      item.rarity = rarityNames.join(', ');
      item.cost = rarityCost.join(', ');
    }

    setData(dataList);

    setIsLoading(false);
  }, [game]);

  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
