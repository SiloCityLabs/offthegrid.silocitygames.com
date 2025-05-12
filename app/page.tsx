// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import { SclCard } from '@silocitypages/ui-core';
// --- Data ---
import generatorList from '@/json/index/generator-list.json';

export default function HomePage() {
  return (
    <PageLayout headerShowBadge={true}>
      <Container className='main-content mt-3'>
        <Row>
          {generatorList.map((card, index) => (
            <Col key={index} xl={3} lg={4} md={6} className='text-center mb-4'>
              <SclCard
                title={card.title}
                text={card.text}
                variant={card.variant}
                buttons={card.buttons}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  );
}
