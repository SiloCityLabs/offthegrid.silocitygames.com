// --- React ---
import { Row, Col } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';

function Changelog2025() {
  return (
    <>
      <Row>
        <Col>
          <p>
            5/12/2025: Our site is now using the latest version of{' '}
            <a href='https://github.com/SiloCityLabs/SiloCityPages'>Silo City Pages</a>!!
          </p>
          <p>
            2/20/2025: <Link href='generator'>Off The Grid:</Link> Generator is now available!
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Changelog2025;
