import { Button, Container } from 'react-bootstrap';

const Community = () => {
  return (
    <Container className='text-center py-5'>
      <h2>Become a Part of the Field Kit</h2>
      <p>
        The Off The Grid Field Kit is a community-driven project, and we need your help to make it
        better. Whether you&apos;ve found a bug, have an idea for a new tool, or want to contribute
        to the code, your input is invaluable.
      </p>
      <Button
        variant='outline-otg'
        className='me-2'
        href='https://github.com/silo-city/offthegrid.silocitygames.com/issues/new?template=bug_report.md'
        target='_blank'>
        Report a Bug
      </Button>
      <Button
        variant='outline-otg'
        className='me-2'
        href='https://github.com/silo-city/offthegrid.silocitygames.com/issues/new?template=feature-request-template.md'
        target='_blank'>
        Request a Feature
      </Button>
      <Button variant='outline-otg' href='/feedback'>
        Give General Feedback
      </Button>
    </Container>
  );
};

export default Community;
