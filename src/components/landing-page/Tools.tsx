import { Row, Col, Container } from 'react-bootstrap';
// --- Components ---
import { SclCard } from '@silocitypages/ui-core';
// --- Data ---
import tools from '@/data/index/generator-list.json';

const Tools = () => {
  return (
    <Container id='tools' className='py-5'>
      <h2 className='text-center mb-4'>Tools at Your Disposal</h2>
      <Row>
        {tools.map((tool, index) => (
          <Col md={4} key={`tool-${index}`} className='mb-4'>
            <SclCard
              title={tool.name}
              text={tool.description}
              variant={tool.variant}
              buttons={tool.buttons}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Tools;
