// --- React ---
import { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponDisplayClient from '@/components/info/WeaponDisplayClient';

export const metadata: Metadata = {
  title: 'Weapon',
  description: 'View information and all available attachments for the weapon in Off The Grid.',
};

export default function WeaponsInfoPage() {
  return (
    <PageLayout headerShowBadge={true}>
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
