import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SclPlaceholder from "@/components/_silabs/SclPlaceholder";
import ClassName from "@/components/ClassName";
import SimpleGeneratorView from "@/components/generators/SimpleGeneratorView";
//Helpers
import { scrollToTop } from "@/helpers/scrollToTop";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
// import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
// import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//Utils
import { sendEvent } from "@/utils/gtag";
//json
import defaultData from "@/json/otg/default-generator-info.json";

const defaultWeapon = { name: "", type: "", game: "", no_attach: false, cost: 0 };

function OffTheGridLoadout() {
    const [isLoading, setIsLoading] = useState(true);
    const [isGenerating, setIsGenerating] = useState(true);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        fetchLoadoutData(setData);
        setIsGenerating(false);
        setIsLoading(false);
    }, []);

    const handleClick = async () => {
        setIsGenerating(true);

        setTimeout(() => {
            fetchLoadoutData(setData);
            setIsGenerating(false);
            scrollToTop();
        }, 1000);
    };

    const { deliveryCost, randClassName, weapons, body, equipment } = data;

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <>
            <Container id="random-class" className="shadow-lg p-3 bg-body rounded">
                <ClassName isGenerating={isGenerating} value={randClassName} />
                <h4 className="text-center mb-3">Delivery Cost: {deliveryCost}</h4>
                <hr />
                <Row className="justify-content-md-center">
                    <Col sm className="text-center mb-3 mb-md-0">
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Primary"
                            value={
                                !weapons.primary.weapon.name
                                    ? "None"
                                    : `${weapons.primary.weapon.rarity}: ${weapons.primary.weapon.name}`
                            }
                        />
                        <br />
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Primary Attachments"
                            value={
                                !weapons.primary.attachments
                                    ? "No Attachments"
                                    : weapons.primary.attachments
                            }
                        />
                    </Col>
                    <Col sm className="text-center mb-3 mb-md-0">
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Secondary"
                            value={
                                !weapons.secondary.weapon.name
                                    ? "None"
                                    : `${weapons.secondary.weapon.rarity}: ${weapons.secondary.weapon.name}`
                            }
                        />
                        <br />
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Secondary Attachments"
                            value={
                                !weapons.secondary.attachments
                                    ? "No Attachments"
                                    : weapons.secondary.attachments
                            }
                        />
                    </Col>
                    <Col sm className="text-center mb-3 mb-md-0">
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Sidearm"
                            value={
                                !weapons.sidearm.weapon.name
                                    ? "None"
                                    : `${weapons.sidearm.weapon.rarity}: ${weapons.sidearm.weapon.name}`
                            }
                        />
                        <br />
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Sidearm Attachments"
                            value={
                                !weapons.sidearm.attachments
                                    ? "No Attachments"
                                    : weapons.sidearm.attachments
                            }
                        />
                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-md-center">
                    {/* <Col sm className="text-center mb-3 mb-md-0">
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Tactical"
                            value={equipment.tactical.name}
                        />
                    </Col>
                    <Col sm className="text-center mb-3 mb-md-0">
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Lethal"
                            value={equipment.lethal.name}
                        />
                    </Col>
                    <Col sm className="text-center">
                        <SimpleGeneratorView
                            isGenerating={isGenerating}
                            title="Perks"
                            value={perks}
                        />
                    </Col> */}
                </Row>
                <Row id="button-row">
                    <Col className="text-center">
                        <Button
                            variant="info"
                            disabled={isGenerating}
                            onClick={isGenerating ? undefined : handleClick}
                        >
                            {isGenerating ? "Generating Loadout..." : "Generate Loadout"}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

async function fetchLoadoutData(setData) {
    sendEvent("button_click", {
        button_id: "otg_fetchLoadoutData",
        label: "OffTheGrid",
        category: "OTG_Loadouts",
    });

    try {
        console.clear();
        const game = "off-the-grid";
        let deliveryCost = 500;
        const randClassName = fetchClassName();
        const primaryWeapon = Math.random() < 0.5 ? fetchWeapon("primary", game) : defaultWeapon;
        const primAttachCount = 1;
        const secAttachCount = 1;
        const sideAttachCount = 1;

        let weapons = {
            primary: {
                weapon: primaryWeapon,
                attachments: "",
            },
            secondary: {
                weapon: Math.random() < 0.5 ? fetchWeapon("primary", game, primaryWeapon.name) : defaultWeapon,
                attachments: "",
            },
            sidearm: {
                weapon: Math.random() < 0.5 ? fetchWeapon("sidearm", game) : defaultWeapon,
                attachments: "",
            },
        };
        //Update DeliveryCost with weapons
        deliveryCost += weapons.primary.weapon.cost;
        deliveryCost += weapons.secondary.weapon.cost;
        deliveryCost += weapons.sidearm.weapon.cost;

        console.log("weapons", weapons);

        // //Get Primary Attachments
        // if (!weapons.primary.weapon?.no_attach) {
        //     weapons.primary.attachments = Object.values(fetchAttachments(weapons.primary.weapon, primAttachCount)).join(", ")
        // }

        // //Get Secondary Attachments
        // if (!weapons.secondary.weapon?.no_attach) {
        //     weapons.secondary.attachments = Object.values(fetchAttachments(weapons.secondary.weapon, secAttachCount)).join(", ")
        // }

        // //Get Sidearm Attachments
        // if (!weapons.sidearm.weapon?.no_attach) {
        //     weapons.sidearm.attachments = Object.values(fetchAttachments(weapons.sidearm.weapon, sideAttachCount)).join(", ")
        // }

        let body = {};
        let equipment = {};

        setData({ ...defaultData, deliveryCost, randClassName, weapons });
    } catch (error: any) {
        console.error(error.message); // Handle errors centrally
    }
}

export default OffTheGridLoadout;
