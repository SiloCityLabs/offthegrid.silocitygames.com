// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import OffTheGridLoadout from '@/components/generators/OffTheGridLoadout';

export const metadata: Metadata = {
  title: 'Random Class Generator',
  description:
    'Spice up your Off The Grid gameplay! Generate unique random loadouts for Off The Grid. Discover new weapons, arms, legs, consumables and backpack combinations.',
};

export default function GeneratorPage() {
  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
      <Container className='main-content mb-5'>
        <Row>
          <Col>
            <h2 className='text-center mt-3'>
              Off The Grid
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Random Class Generator
            </h2>

            <OffTheGridLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
