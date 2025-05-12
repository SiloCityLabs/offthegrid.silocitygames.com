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
    <PageLayout headerShowBadge={true}>
      <Container className='main-content mt-3'>
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
