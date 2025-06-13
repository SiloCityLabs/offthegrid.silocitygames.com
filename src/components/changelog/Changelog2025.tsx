// --- Next ---
import Link from 'next/link';
// --- Data ---
import data from '@/data/changelog/2025.json';
// --- Styling ---
import styles from './Changelog.module.css';

function Changelog2025() {
  return (
    <>
      <div className={styles.timeline}>
        {data.map((entry, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${styles[entry.Type?.toLowerCase()]}`}>
            <div className={styles.timelineContent}>
              <p className={styles.date}>{entry.Date}</p>
              <h5>{entry.Type}</h5>
              <p>
                {entry.Link?.Url && entry.Link?.Text && (
                  <>
                    <Link href={entry.Link.Url} className='text-otg text-decoration-none'>
                      {entry.Link.Text}
                    </Link>{' '}
                  </>
                )}
                {entry.Changes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Changelog2025;
