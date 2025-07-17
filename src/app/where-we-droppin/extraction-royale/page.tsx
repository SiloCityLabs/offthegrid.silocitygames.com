// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WhereWeDroppin from '@/components/WhereWeDroppin';
// --- Data ---
import mapInfo from '@/data/where-we-droppin/extraction-royale.json';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Extraction Royale - Where We Droppin?',
  description:
    'Enhance your Off The Grid Extraction Royale matches! Use our random drop generator to discover unique landing spots and strategize your next move, ensuring fresh and unpredictable gameplay every time.',
  keywords: [
    'Off The Grid',
    'Extraction Royale',
    'random drop',
    'landing spots',
    'where to drop',
    'map randomizer',
    'drop generator',
    'battle royale',
    'game strategy',
    'tactical drops',
    'randomizer tool',
  ],
});

export default function InfoPage() {
  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
      <Container className='main-content mt-3'>
        <Row>
          <Col>
            <h2 className='text-center my-3'>
              Extraction Royale
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Where We Droppin?
            </h2>

            <WhereWeDroppin
              map='Extraction Royale'
              button_key='extraction-royale'
              ga_label='ExtractionRoyale'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
