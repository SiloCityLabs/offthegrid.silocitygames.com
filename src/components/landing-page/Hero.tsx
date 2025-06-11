import { Button, Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container className='text-center py-5'>
      <h1 className='display-4 fw-bold'>Master the Grid: Your Ultimate Off The Grid Toolkit</h1>
      <p className='lead'>
        Tired of the same old loadouts? Can&apos;t decide where to drop? The Off The Grid Field Kit
        provides you with random loadout generators, strategic drop point selectors, and an in-depth
        info hub to give you the edge you need to dominate the competition.
      </p>
      <Button variant='otg' size='lg' href='#tools'>
        Explore the Tools
      </Button>
    </Container>
  );
};

export default Hero;
