// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import { SclCard } from '@silocitypages/ui-core';

export const metadata: Metadata = {
  title: 'Off The Grid Loadout Information',
  description:
    'Loadout Information for Off The Grid. Checkout all the weapons, arms, legs, consumables and backpack combinations.',
};

const infoCards = [
  { title: 'Body', text: '', link: '/info/body' },
  { title: 'Equipment', text: '', link: '/info/equipment' },
  { title: 'Weapons', text: '', link: '/info/weapons' },
];

export default function InfoPage() {
  return (
    <PageLayout headerShowBadge={true}>
      <Container className='main-content mt-3'>
        <h2 className='text-center mt-3'>
          Off The Grid
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Loadout Information
        </h2>
        <Row>
          {infoCards.map((card, index) => (
            <Col key={index} xl={3} lg={4} md={6} className='text-center mb-4'>
              <SclCard
                title={card.title}
                text={card.text}
                variant='danger'
                buttons={[{ link: card.link, disabled: false, btnText: 'View' }]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  );
}
