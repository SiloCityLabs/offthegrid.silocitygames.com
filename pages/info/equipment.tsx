import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getEquipment } from "@/helpers/info/getEquipment";

export default function OffTheGridEquipment() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Generator", href: "/generator" },
    { label: "Loadout Info", href: "/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "type", "rarity", "cost"];

  useEffect(() => {
    const dataList = getEquipment("off-the-grid");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Off The Grid Equipment</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all equipment in Off The Grid."
        />
        <meta
          name="keywords"
          content="off the grid, random class generator, rcg, multiplayer, off the grid random class generator"
        />
      </Head>
      <Header showBadge={true} navLinks={navLinks} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-3">
              Off The Grid
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Equipment
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
