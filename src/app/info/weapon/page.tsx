// --- React ---
import { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponDisplayClient from '@/components/info/WeaponDisplayClient';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Weapon',
  description:
    'Get in-depth details on a specific Off The Grid weapon. Explore its comprehensive stats, available attachments, and customization options to master your loadout and combat effectiveness.',
  keywords: [
    'Off The Grid weapon',
    'weapon information',
    'weapon details',
    'weapon attachments',
    'weapon stats',
    'weapon customization',
    'firearm guide',
    'game weapon info',
    'weapon loadout',
  ],
});

export default function WeaponsInfoPage() {
  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
      <Container className='main-content mb-4'>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={'off-the-grid'} />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
