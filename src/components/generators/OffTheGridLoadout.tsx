'use client';

// --- React ---
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'; // Import Card
import Link from 'next/link'; // Assuming you use Next.js for the Link component
// --- Components ---
import ClassName from '@/components/ClassName';
// --- Helpers ---
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchBody } from '@/helpers/fetch/fetchBody';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
import { generateGithubLink } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/data/otg/default-generator-info.json';

// --- Constants ---
const defaultWeapon = { name: '', type: '', rarity: '', game: '', no_attach: false, cost: 0 };
const defaultItem = { name: '', type: '', game: '', cost: 0 };

// Helper to render styled rarity text
const RarityText = ({ rarity, children }) => {
  const rarityColors = {
    Epic: '#8a2be2', // Purple
    Rare: '#0070dd', // Blue
    Uncommon: '#28a745', // Green
    Common: '#6c757d', // Grey
  };
  const color = rarityColors[rarity] || 'inherit';

  return <span style={{ color, fontWeight: 'bold' }}>{children}</span>;
};

function OffTheGridLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      await fetchLoadoutData(setData);
      setIsGenerating(false);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);
    setTimeout(async () => {
      await fetchLoadoutData(setData);
      setIsGenerating(false);
      scrollToTop();
    }, 1000);
  };

  // --- Generate the GitHub link for contributions ---
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    {
      title: `[OffTheGrid] - Suggest Weapon Attachments`,
      labels: 'enhancement',
      template: 'manage-weapon-attachments-template.md',
    }
  );

  const { deliveryCost, randClassName, weapons, body, equipment } = data;

  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  // --- REFACTORED JSX STRUCTURE ---
  return (
    <>
      <Container id='random-class' className='shadow-lg p-3 p-md-4 bg-body rounded'>
        <ClassName isGenerating={isGenerating} value={randClassName} />

        {/* --- Section 1: Weapons --- */}
        <h4 className='text-center text-muted mb-3'>Weapons</h4>
        <Row>
          {['primary', 'secondary', 'sidearm'].map((type) => {
            const weaponData = weapons[type];
            return (
              <Col md={4} key={type} className='mb-3'>
                <Card className='h-100 text-center'>
                  <Card.Header as='h5' className='text-capitalize'>
                    {type}
                  </Card.Header>
                  <Card.Body>
                    {weaponData.weapon.name ? (
                      <>
                        <Card.Title>
                          <RarityText rarity={weaponData.weapon.rarity}>
                            {weaponData.weapon.rarity}
                          </RarityText>
                          {`: ${weaponData.weapon.name}`}
                        </Card.Title>
                        <Card.Text className='text-muted'>
                          <strong>Attachments:</strong>
                          <br />
                          {weaponData.attachments || 'No Attachments'}
                        </Card.Text>
                      </>
                    ) : (
                      <Card.Text>None</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <hr />

        {/* --- Section 2: Body & Equipment --- */}
        <h4 className='text-center text-muted mb-3'>Body & Equipment</h4>
        <Row>
          {/* Body Parts */}
          <Col md={6} className='mb-3'>
            <Card className='h-100'>
              <Card.Body className='d-flex justify-content-around text-center'>
                <div>
                  <h5>Left Arm</h5>
                  <p>
                    {body.left_arm.name ? `${body.left_arm.rarity}: ${body.left_arm.name}` : 'None'}
                  </p>
                </div>
                <div>
                  <h5>Legs</h5>
                  <p>{body.legs.name ? `${body.legs.rarity}: ${body.legs.name}` : 'None'}</p>
                </div>
                <div>
                  <h5>Right Arm</h5>
                  <p>
                    {body.right_arm.name
                      ? `${body.right_arm.rarity}: ${body.right_arm.name}`
                      : 'None'}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Equipment */}
          <Col md={6} className='mb-3'>
            <Card className='h-100'>
              <Card.Body className='d-flex justify-content-around text-center'>
                <div>
                  <h5>Backpack</h5>
                  <p>
                    {equipment.backpack.name
                      ? `${equipment.backpack.rarity}: ${equipment.backpack.name}`
                      : 'None'}
                  </p>
                </div>
                <div>
                  <h5>Consumable</h5>
                  <p>{equipment.consumable.name ? `${equipment.consumable.name}` : 'None'}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr />

        {/* --- Section 3: Cost and Generation Button --- */}
        <Row className='justify-content-center align-items-center mb-3'>
          <Col xs={12} className='text-center'>
            <h5>Total Delivery Cost: {deliveryCost || '0'}</h5>
          </Col>
        </Row>
        <Row id='button-row' className='justify-content-center'>
          <Col xs='auto' className='text-center'>
            <Button
              variant='otg'
              size='lg' // Made button larger for emphasis
              disabled={isGenerating}
              onClick={isGenerating ? undefined : handleClick}>
              {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
            </Button>
          </Col>
        </Row>

        <Row className='justify-content-center mt-4'>
          <Col xs='auto' className='text-center'>
            <p>
              We don&apos;t have all attachment info yet.
              <Link
                href={githubLink}
                target='_blank'
                className='ms-1 text-otg text-decoration-none'>
                Help us by suggesting attachments!
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

async function fetchLoadoutData(setData) {
  sendEvent('button_click', {
    button_id: 'otg_fetchLoadoutData',
    label: 'OffTheGrid',
    category: 'OTG_Loadouts',
  });

  try {
    console.clear();
    const game = 'off-the-grid';
    let deliveryCost = 500;
    const randClassName = fetchClassName();
    const primaryWeapon = Math.random() < 0.5 ? fetchWeapon('primary', game) : defaultWeapon;
    const primAttachCount = Math.floor(Math.random() * 3);
    const secAttachCount = Math.floor(Math.random() * 3);
    const sideAttachCount = Math.floor(Math.random() * 3);

    const weapons = {
      primary: { weapon: primaryWeapon, attachments: '' },
      secondary: {
        weapon:
          Math.random() < 0.5 ? fetchWeapon('primary', game, primaryWeapon.name) : defaultWeapon,
        attachments: '',
      },
      sidearm: {
        weapon: Math.random() < 0.5 ? fetchWeapon('sidearm', game) : defaultWeapon,
        attachments: '',
      },
    };
    //Update DeliveryCost with weapons
    deliveryCost += weapons?.primary.weapon.cost || 0;
    deliveryCost += weapons?.secondary.weapon.cost || 0;
    deliveryCost += weapons?.sidearm.weapon.cost || 0;

    // Get Primary Attachments
    if (weapons.primary.weapon && !weapons.primary.weapon?.no_attach && primAttachCount > 0) {
      weapons.primary.attachments = Object.values(
        fetchAttachments(weapons.primary.weapon, primAttachCount)
      ).join(', ');
    }

    // Get Secondary Attachments
    if (weapons.secondary.weapon && !weapons.secondary.weapon?.no_attach && secAttachCount > 0) {
      weapons.secondary.attachments = Object.values(
        fetchAttachments(weapons.secondary.weapon, secAttachCount)
      ).join(', ');
    }

    // Get Sidearm Attachments
    if (weapons.sidearm.weapon && !weapons.sidearm.weapon?.no_attach && sideAttachCount > 0) {
      weapons.sidearm.attachments = Object.values(
        fetchAttachments(weapons.sidearm.weapon, sideAttachCount)
      ).join(', ');
    }

    const body = {
      left_arm: Math.random() < 0.5 ? fetchBody('arm', game) : defaultItem,
      legs: Math.random() < 0.5 ? fetchBody('legs', game) : defaultItem,
      right_arm: Math.random() < 0.5 ? fetchBody('arm', game) : defaultItem,
    };
    //Update DeliveryCost with body
    deliveryCost += body?.left_arm.cost || 0;
    deliveryCost += body?.legs.cost || 0;
    deliveryCost += body?.right_arm.cost || 0;

    const equipment = {
      backpack: Math.random() < 0.5 ? fetchEquipment('backpack', game) : defaultItem,
      consumable: Math.random() < 0.5 ? fetchEquipment('consumable', game) : defaultItem,
    };
    deliveryCost += equipment?.backpack.cost || 0;
    deliveryCost += equipment?.consumable.cost || 0;

    setData({ ...defaultData, deliveryCost, randClassName, weapons, body, equipment });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}

export default OffTheGridLoadout;
