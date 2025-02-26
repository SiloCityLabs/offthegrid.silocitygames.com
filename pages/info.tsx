import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import SclCard from "@/components/_silabs/SclCard";

export default function OffTheGridInfo() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Generator", href: "/generator" },
        { label: "Changelog", href: "/changelog" },
    ];

    const infoCards = [
        {
            title: "Body",
            text: "",
            link: "/info/body",
        },
        {
            title: "Equipment",
            text: "",
            link: "/info/equipment",
        },
        {
            title: "Weapons",
            text: "",
            link: "/info/weapons",
        }
    ];

    return (
        <>
            <Head>
                <title>Off The Grid Loadout Information</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Loadout Information for Off The Grid. Checkout all the weapons, arms, legs, consumables and backpack combinations."
                />
                <meta name="keywords" content="off the grid, random class generator, rcg, multiplayer, off the grid random class generator" />
            </Head>
            <Header isBeta={true} navLinks={navLinks} />
            <Container className="information">
                <h2 className="text-center mt-3">
                    Off The Grid
                    <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                    <br className="d-block d-sm-none" />
                    Loadout Information
                </h2>
                <Row>
                    {infoCards.map((card, index) => (
                        <Col key={index} xl={3} lg={4} md={6} className="text-center mb-4">
                            <SclCard
                                title={card.title}
                                text={card.text}
                                variant="danger"
                                buttons={[
                                    {
                                        "link": card.link,
                                        "disabled": false,
                                        "btnText": "View"
                                    }
                                ]}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
