// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import BodyList from '@/components/info/BodyList';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Body Augments',
  description:
    "Explore comprehensive details on Off The Grid body augments. Discover how different body types and cyberlimbs impact your operative's health, stamina, and abilities, allowing for optimal character customization.",
  keywords: [
    'Off The Grid',
    'body augments',
    'cyberlimbs',
    'character bodies',
    'body types',
    'operative stats',
    'health',
    'stamina',
    'abilities',
    'game information',
    'loadout customization',
    'Off The Grid guide',
  ],
});

export default function BodyInfoPage() {
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
              Body
            </h2>

            <BodyList game='off-the-grid' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
