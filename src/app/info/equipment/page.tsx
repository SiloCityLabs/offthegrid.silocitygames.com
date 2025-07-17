// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Equipment',
  description:
    'Access comprehensive Off The Grid equipment details. Explore a wide range of tactical gear, including armor, helmets, and utility items like grenades and medical kits, to gain a crucial advantage in the field.',
  keywords: [
    'Off The Grid',
    'equipment',
    'tactical gear',
    'armor',
    'helmets',
    'utility items',
    'grenades',
    'medical kits',
    'consumables',
    'loadout information',
    'game guide',
    'operative customization',
  ],
});

export default function EquipmentInfoPage() {
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
              Equipment
            </h2>

            <EquipmentList game='off-the-grid' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
