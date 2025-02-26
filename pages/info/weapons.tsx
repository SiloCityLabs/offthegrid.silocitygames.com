import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
//json
import primaryRarity from "@/json/generator/raritys/weapons/primary.json";
import sidearmRarity from "@/json/generator/raritys/weapons/sidearm.json";

export default function OffTheGridWeapons() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Generator", href: "/generator" },
    { label: "Loadout Info", href: "/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [types, setTypes] = useState<string[]>([]);
  const dataKeys = ["name", "type", "rarity", "cost", "no_attach_info"];

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon("off-the-grid");
    //Format data
    for (const key in dataList) {
      const item = dataList[key];

      if (!tmp_types.includes(item.type)) {
        tmp_types.push(item.type);
      }

      if (item.rarity !== "all") {
        continue;
      }

      const rarity = item.type === "sidearm" ? sidearmRarity : primaryRarity;

      const rarityNames = rarity.map((rarity) => rarity.name);
      const rarityCost = rarity.map((rarity) => rarity.cost);

      // Join the names with commas
      item.rarity = rarityNames.join(", ");
      item.cost = rarityCost.join(", ");
    }

    setTypes(tmp_types);
    setData(dataList);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Off The Grid Weapons</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="View all weapons in Off The Grid." />
        <meta
          name="keywords"
          content="off the grid, random class generator, rcg, multiplayer, off the grid random class generator"
        />
      </Head>
      <Header isBeta={true} navLinks={navLinks} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-3">
              Off The Grid
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapons
            </h2>

            {!isLoading && (
              <InfoList
                data={data}
                dataKeys={dataKeys}
                types={types}
                url="/info/weapon"
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
