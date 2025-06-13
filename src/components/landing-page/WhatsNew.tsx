// --- React ---
import { Container } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Data ---
import data from '@/data/changelog/2025.json';

const WhatsNew = () => {
  return (
    <Container className='py-5'>
      <h2 className='text-center mb-4'>Latest Intel</h2>
      <div className='text-center'>
        {data.slice(0, 2).map((entry, index) => (
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
        <Link href='/changelog' className='text-otg text-decoration-none'>
          View Full Changelog
        </Link>
      </div>
    </Container>
  );
};

export default WhatsNew;
