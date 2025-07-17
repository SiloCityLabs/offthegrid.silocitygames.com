// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Weapons',
  description:
    'Explore the complete arsenal of Off The Grid weapons. Dive into detailed information on assault rifles, sniper rifles, sidearms, and more, including their stats, available attachments, and customization options to optimize your combat strategy.',
  keywords: [
    'Off The Grid',
    'weapons',
    'firearms',
    'arsenal',
    'weapon stats',
    'attachments',
    'weapon customization',
    'assault rifles',
    'sniper rifles',
    'sidearms',
    'SMGs',
    'shotguns',
    'weapon list',
    'weapon database',
    'game guide',
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
          <Col>
            <h2 className='text-center mt-3'>
              Off The Grid
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Weapons
            </h2>

            <WeaponList game='off-the-grid' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
