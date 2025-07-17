// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ChangelogTabs from '@/components/changelog/ChangelogTabs';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Changelog',
  description:
    'Stay updated with the latest enhancements to the Off The Grid Field Kit! Discover new features, essential bug fixes, and performance improvements to optimize your loadout generation experience.',
});

export default function ChangelogPage() {
  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
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
