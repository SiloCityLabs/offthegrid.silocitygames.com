// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import OffTheGridLoadout from '@/components/generators/OffTheGridLoadout';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Random Class Generator',
  description:
    'Spice up your Off The Grid gameplay! Generate unique random loadouts, discovering new combinations of weapons, arms, legs, consumables, and backpacks for your ultimate tactical experience.',
  keywords: [
    'Off The Grid',
    'random loadout generator',
    'class generator',
    'weapon generator',
    'cyberlimb generator',
    'equipment generator',
    'random class',
    'loadout builder',
    'game tools',
    'tactical gear',
    'weapons',
    'arms',
    'legs',
    'consumables',
    'backpacks',
  ],
});

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
