// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

export const metadata: Metadata = {
  title: 'Equipment',
  description: 'View all equipment in Off The Grid.',
};

export default function EquipmentInfoPage() {
  return (
    <PageLayout headerShowBadge={true}>
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
