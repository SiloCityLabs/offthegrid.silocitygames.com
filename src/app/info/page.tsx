// --- React ---
import { Container, Row, Col, Badge } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link';
// --- Layout ---
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Loadout Information',
  description:
    'Explore all the loadout options in Off The Grid. Delve into character bodies, tactical equipment, and an extensive arsenal of weapons to customize your operative.',
};

const infoCards = [
  {
    title: 'Body',
    text: 'Customize your operative’s physical core. This includes selecting different body types, which can influence health, stamina, and cosmetic appearance.',
    link: '/info/body',
    badge: 'Core Stats',
  },
  {
    title: 'Equipment',
    text: 'Gear up with tactical items. Browse through a range of armor, helmets, and utility items like grenades and medical kits to gain an edge in the field.',
    link: '/info/equipment',
    badge: 'Tactical Gear',
  },
  {
    title: 'Weapons',
    text: 'Choose your firearm. From assault rifles to sniper rifles and sidearms, explore the stats, attachments, and customization options for each weapon.',
    link: '/info/weapons',
    badge: 'Arsenal',
  },
];

export default function InfoPage() {
  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
      <Container className='main-content mt-3'>
        <div className='text-center my-4'>
          <h1 className='display-4'>Loadout Information</h1>
          <p className='lead text-muted'>
            Configure your operative by exploring all available Body, Equipment, and Weapon options.
          </p>
        </div>
        <Row className='justify-content-center'>
          {infoCards.map((card, index) => (
            <Col key={index} lg={4} md={6} className='mb-4'>
              <div className='card h-100 shadow-sm border-0 otg-card'>
                <div className='card-body text-center d-flex flex-column'>
                  <h3 className='card-title h4'>{card.title}</h3>
                  <h5>
                    <Badge pill bg='otg' text='white' className='mb-3'>
                      {card.badge}
                    </Badge>
                  </h5>
                  <p className='card-text text-start flex-grow-1'>{card.text}</p>
                  <Link href={card.link} className='btn btn-outline-otg'>
                    View {card.title}
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  );
}
