// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponDisplayClient from '@/components/info/WeaponDisplayClient';

export const metadata: Metadata = {
  title: 'Weapons',
  description: 'View all weapons in Off The Grid.',
};

export default function WeaponsInfoPage() {
  return (
    <PageLayout headerShowBadge={true}>
      <Container className='main-content mb-4'>
        <Row>
          <Col>
            <WeaponDisplayClient game='off-the-grid' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
