// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ChangelogTabs from '@/components/changelog/ChangelogTabs';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    "Stay up-to-date on the latest features, bug fixes, and improvements to our off the grid class generator. See what's new and how we're making your loadout experience even better.",
};

export default function ChangelogPage() {
  return (
    <PageLayout headerShowBadge={true}>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <ChangelogTabs />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
