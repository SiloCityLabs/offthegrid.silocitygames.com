// --- Next ---
import Link from 'next/link';
// --- Components ---
import { Article, WithContext } from 'schema-dts';
import { StructuredData } from '@silocitypages/utils';
// --- Data ---
import data from '@/data/changelog/2025.json';
// --- Styling ---
import styles from './Changelog.module.css';

function Changelog2025() {
  const articleSchema = (entry: (typeof data)[0]): WithContext<Article> => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    // Uses the correct property names from your JSON
    headline: `${entry.Type}: ${entry.Link.Text || 'Update'}`,
    author: { '@type': 'Organization', name: 'Silo City Games' },
    datePublished: entry.Date,
    description: entry.Changes,
  });

  return (
    <>
      <div className={styles.timeline}>
        {data.map((entry, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${styles[entry.Type?.toLowerCase()]}`}>
            <StructuredData data={articleSchema(entry)} />
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
