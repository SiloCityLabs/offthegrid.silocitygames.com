// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import BodyList from '@/components/info/BodyList';

export const metadata: Metadata = {
  title: 'Body Augments',
  description: 'View all body augments in Off The Grid.',
};

export default function BodyInfoPage() {
  return (
    <PageLayout headerShowBadge={true}>
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
