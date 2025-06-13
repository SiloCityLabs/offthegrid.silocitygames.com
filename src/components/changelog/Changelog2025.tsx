// --- React ---
import { Row, Col } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Data ---
import data from '@/data/changelog/2025.json';

function Changelog2025() {
  return (
    <>
      <Row>
        <Col>
          {data.map((entry, index) => (
            <p key={index}>
              <strong>{entry.Date}:</strong>{' '}
              {entry.Link && entry.Link.Url && entry.Link.Text && (
                <>
                  <Link href={entry.Link.Url}>{entry.Link.Text}:</Link>{' '}
                </>
              )}
              {entry.Changes}
            </p>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default Changelog2025;
