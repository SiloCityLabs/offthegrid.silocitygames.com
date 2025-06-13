'use client';

// --- React ---
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
// --- Components ---
import Changelog2025 from '@/components/changelog/Changelog2025';

export default function ChangelogTabs() {
  const [key, setKey] = useState<string>('2025');

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k ?? '2025')} className='mb-3'>
      <Tab eventKey='2025' title='2025'>
        <Changelog2025 />
      </Tab>
    </Tabs>
  );
}
