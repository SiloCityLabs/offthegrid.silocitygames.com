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

export const metadata: Metadata = {
  title: 'Extraction Royale - Where We Droppin?',
  description:
    'Spice up your Off The Grid gameplay! Randomly roll where you should land in off the grid extraction royale.',
};

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
