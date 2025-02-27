import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WhereWeDroppin from "@/components/WhereWeDroppin";
//json
import mapInfo from "@/json/where-we-droppin/extraction-royale.json";

export default function WhereWeDroppinExtractionRoyale() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Off The Grid Extraction Royale - Where We Droppin?</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your Off The Grid gameplay! Randomly roll where you should land in off the grid extraction royale."
        />
        <meta
          name="keywords"
          content="off the grid, random class generator, rcg, multiplayer, off the grid random class generator"
        />
      </Head>
      <Header navLinks={navLinks} showBadge={true} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center my-3">
              Extraction Royale
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Where We Droppin?
            </h2>

            <WhereWeDroppin
              map="Extraction Royale"
              button_key="extraction-royale"
              ga_label="ExtractionRoyale"
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
