import { Container } from 'react-bootstrap';
import Link from 'next/link';

const WhatsNew = () => {
  return (
    <Container className='py-5 bg-light'>
      <h2 className='text-center mb-4'>Latest Intel</h2>
      <div className='text-center'>
        <p>
          <strong>May 12, 2025:</strong> The Field Kit has been upgraded to the latest version of
          Silo City Pages, bringing performance and stability improvements across the board.
        </p>
        <p>
          <strong>February 20, 2025:</strong> The Random Loadout Generator is now online! Start
          creating unique and challenging loadouts today.
        </p>
        <Link href='/changelog'>View Full Changelog</Link>
      </div>
    </Container>
  );
};

export default WhatsNew;
