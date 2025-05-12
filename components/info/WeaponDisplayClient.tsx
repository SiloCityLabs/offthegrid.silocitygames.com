'use client';

// --- React ---
import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
// --- Next ---
import { useRouter, useSearchParams } from 'next/navigation';
// --- Components ---
import WeaponInfo from '@/components/info/WeaponInfo';
// --- Helpers ---
import { capitalizeFirstLetter } from '@silocitypages/utils';

// Define props for the component
interface WeaponDisplayClientProps {
  game: string;
}

export default function WeaponDisplayClient({ game }: WeaponDisplayClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<string | null>(null);

  const displayGameName = capitalizeFirstLetter(game, '-');

  useEffect(() => {
    const valueParam = searchParams?.get('value') ?? '';

    if (valueParam === null) {
      router.replace('/404');
      return;
    }

    setValue(valueParam);
    setIsLoading(false);
  }, [searchParams, router]);

  return (
    <Col>
      <h2 className='text-center my-4'>
        {displayGameName}
        <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
        <br className='d-block d-sm-none' />
        Weapon - {value ? value : 'Loading...'}
      </h2>

      {!isLoading && value && <WeaponInfo value={value} game={game} />}
      {isLoading && <p className='text-center'>Loading weapon data...</p>}
    </Col>
  );
}
