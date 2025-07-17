// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link'; // Import Link for internal navigation
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGun, faRobot, faBox, faHeart } from '@fortawesome/free-solid-svg-icons'; // Added faHeart icon
// --- Utils ---
import { generateGithubLink } from '@silocitypages/utils';
import { generateMetadata } from '@/utils/metadata'; // Assuming this utility is used for metadata

// --- Styles ---
import styles from './About.module.css'; // Import the new module CSS

export const metadata: Metadata = generateMetadata({ title: 'About' });

export default function AboutPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Off The Grid Field Kit';

  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    { template: 'feature-request-template.md', labels: 'feature' }
  );

  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
      <Container className={`main-content mt-3 mb-3 ${styles.aboutContainer}`}>
        <Row className={`shadow-lg p-3 bg-body rounded ${styles.aboutSection}`}>
          <Col lg={12} className='text-center'>
            <h1 className={`fw-bold mb-4 ${styles.mainHeading}`}>About {appName}</h1>
            <p className={`lead ${styles.introText}`}>
              Welcome, Zero. Dive into the covert war with the{' '}
              <strong className={styles.appNameHighlight}>{appName}</strong>, your essential
              companion for the world of <em>Off The Grid</em>. Created to challenge your tactical
              adaptability, our site offers a robust generator for creating unique and unpredictable
              loadouts. Get a full deployment kit, from high-tech{' '}
              <FontAwesomeIcon icon={faGun} className={styles.iconSpacer} />
              <strong className={styles.categoryHighlight}> weapons</strong>, to mission-critical{' '}
              <FontAwesomeIcon icon={faRobot} className={styles.iconSpacer} />
              <strong className={styles.categoryHighlight}>cyberlimbs</strong> and essential{' '}
              <FontAwesomeIcon icon={faBox} className={styles.iconSpacer} />
              <strong className={styles.categoryHighlight}>equipment</strong>. Built as a{' '}
              <strong className={styles.openSourceHighlight}>fully open-source project</strong>, the{' '}
              <strong className={styles.appNameHighlight}>{appName}</strong> is dedicated to keeping
              your operations fresh and exciting, <em>one random deployment at a time</em>.
            </p>
          </Col>

          <hr className={styles.sectionDivider} />

          <Col lg={6} className={styles.techStackCol}>
            <h3 className={styles.subHeading}>Tech used to build this site</h3>
            <ul className={styles.techList}>
              <li>
                <a
                  href='https://github.com/SiloCityLabs/SiloCityPages'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.techLink}>
                  SiloCityPages
                </a>
                {' - '} A framework by SiloCityLabs leveraging Bootstrap, React, and Next.js for
                efficient static site development. Deploy seamlessly to GitHub Pages.
              </li>
              <li>
                <a
                  href='https://pages.github.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.techLink}>
                  GitHub Pages
                </a>
              </li>
              <li>
                <a
                  href='https://nextjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.techLink}>
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href='https://react-bootstrap.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.techLink}>
                  React Bootstrap
                </a>
              </li>
              <li>
                <a
                  href='https://git-scm.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.techLink}>
                  Git
                </a>
                {' - '} Version control software
              </li>
            </ul>
          </Col>

          <Col lg={6} className={styles.contactCol}>
            <h3 className={styles.subHeading}>Contact Us</h3>
            <p className={styles.contactText}>
              Have you found a bug, an error, or have a cool feature we should add to the site?
              Create a ticket on our Github{' '}
              <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.githubLink}>
                here
              </a>{' '}
              and we will look into it!
            </p>
          </Col>

          <hr className={styles.sectionDivider} />

          <Col lg={12} className='text-center mt-3'>
            <h3 className={styles.subHeading}>Created By</h3>
            <p className={styles.createdByText}>
              The <strong className={styles.appNameHighlight}>{appName}</strong> is made with{' '}
              <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} /> in collaboration with:
            </p>
            <ul className={`list-unstyled ${styles.creatorList}`}>
              <li>
                <Link
                  href='https://onebuffalolabs.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.creatorLink}>
                  OneBuffaloLabs
                </Link>
              </li>
              <li>
                <Link
                  href='https://silocitygames.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.creatorLink}>
                  SiloCityGames
                </Link>
              </li>
              <li>
                <Link
                  href='https://silocitylabs.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.creatorLink}>
                  SiloCityLabs
                </Link>
              </li>
            </ul>
            <p className={styles.disclaimerText}>
              <small>
                This is a fan-made project and is not officially affiliated with Gunzilla Games or
                the &quot;Off The Grid&quot; game.
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
