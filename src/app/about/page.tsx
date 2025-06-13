// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGun, faRobot, faBox } from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateGithubLink } from '@silocitypages/utils';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  // Updated App Name for consistency
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Off The Grid Field Kit';

  // This link generation remains the same, as it pulls from your project's environment variables
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    { template: 'feature-request-template.md', labels: 'feature' }
  );

  return (
    <PageLayout>
      <Container className='main-content mt-3 mb-3'>
        <Row className='shadow-lg mt-3 p-3 bg-body rounded'>
          <h2 className='fw-bold mb-3 text-center'>About {appName}</h2>
          <Col lg={8}>
            <p className='lead fs-6 lh-lg text-center'>
              Welcome, Zero. Dive into the covert war with the <strong>{appName}</strong>, your
              essential companion for the world of <em>Off The Grid</em>. Created to challenge your
              tactical adaptability, our site offers a robust generator for creating unique and
              unpredictable loadouts. Get a full deployment kit, from high-tech{' '}
              <FontAwesomeIcon icon={faGun} className='icon-spacer' size='sm' />
              <strong> weapons</strong>, to mission-critical{' '}
              <FontAwesomeIcon icon={faRobot} className='icon-spacer' />
              <strong> cyberlimbs</strong> and essential{' '}
              <FontAwesomeIcon icon={faBox} className='icon-spacer' />
              <strong> equipment</strong>. Built as a <strong>fully open-source project</strong>,
              the <strong>{appName}</strong> is dedicated to keeping your operations fresh and
              exciting, <em>one random deployment at a time</em>.
            </p>

            {/* This section remains largely the same as the tech stack is likely identical */}
            <h4>Tech used to build this site</h4>
            <div>
              <ul>
                <li>
                  <a
                    href='https://github.com/SiloCityLabs/SiloCityPages'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-otg'>
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
                    className='text-otg'>
                    GitHub Pages
                  </a>
                </li>
                <li>
                  <a
                    href='https://nextjs.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-otg'>
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    href='https://react-bootstrap.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-otg'>
                    React Bootstrap
                  </a>
                </li>
                <li>
                  <a
                    href='https://git-scm.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-otg'>
                    Git
                  </a>
                  {' - '} Version control software
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <h4>Contact Us</h4>
            <p>
              Have you found a bug, an error, or have a cool feature we should add to the site?
              Create a ticket on our Github{' '}
              <a href={githubLink} target='_blank' rel='noopener noreferrer' className='text-otg'>
                here
              </a>{' '}
              and we will look into it!
            </p>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
