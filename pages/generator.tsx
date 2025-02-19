import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import OffTheGridLoadout from "@/components/generators/OffTheGridLoadout";

export default function OffTheGridGenerator() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Loadout Info", href: "/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Off The Grid Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your Off The Grid gameplay! Generate unique random loadouts for Off The Grid. Discover new weapons, arms, legs, consumables and backpack combinations."
        />
        <meta name="keywords" content="off the grid, random class generator, rcg, multiplayer, off the grid random class generator" />
      </Head>
      <Header navLinks={navLinks} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-3">
              Off The Grid
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Class Generator
            </h2>

            <OffTheGridLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
