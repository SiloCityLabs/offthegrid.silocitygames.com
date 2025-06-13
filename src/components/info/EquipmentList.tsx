'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getEquipment } from '@/helpers/info/getEquipment';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'type', 'rarity', 'cost'];

export default function EquipmentList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getEquipment(game);
    setData(dataList);

    setIsLoading(false);
  }, [game]);
  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
