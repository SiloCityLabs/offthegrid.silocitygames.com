import { useEffect, useState } from "react";
//Components
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes-react19";
import { LoadingLetters } from "@/components/_silabs/LoadingLetters";
//Utils
import { sendEvent } from "@/utils/gtag";

interface WhereWeDroppinProps {
    map: string;
    ga_label: string;
    button_key: string;
    mapInfo: string[];
}

function WhereWeDroppin({ map, button_key, ga_label, mapInfo }: WhereWeDroppinProps) {
    const ga_button_id = `${button_key}WhereWeDroppin_rollSpot`;
    const ga_label_id = `${ga_label}_OtgWhereWeDroppin`;
    const [isLoading, setIsLoading] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinResult, setSpinResult] = useState("????");
    const segColors = [
        "#DC3545",
        "#000000",
    ];

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const onFinished = (winner: string) => {
        setSpinResult("");
        setIsSpinning(true);
        // sendEvent("button_click", {
        //     button_id: ga_button_id,
        //     label: ga_label_id,
        //     category: "OtgWhereWeDroppin",
        // });

        setTimeout(() => {
            setSpinResult(winner);
            setIsSpinning(false);
        }, 500);

    };

    const handleClick = async () => {
        setSpinResult("");
        setIsSpinning(true);
        // sendEvent("button_click", {
        //     button_id: ga_button_id,
        //     label: ga_label_id,
        //     category: "OtgWhereWeDroppin",
        // });

        setTimeout(() => {
            setSpinResult(
                mapInfo[Math.floor(Math.random() * mapInfo.length)]
            );
            setIsSpinning(false);
        }, 1000);

    };

    return (
        <>
            <Container id="where-we-droppin" className='shadow-lg p-3 bg-body rounded'>
                <Row className="justify-content-md-center">
                    {isLoading && (
                        <>
                            <Row className="mb-3">
                                <Col sm className="text-center mb-4 mb-md-0">
                                    <span className="fw-bolder fs-5">Map:</span> <br />
                                    <span className="text-muted fs-6">
                                        {map}
                                    </span>
                                </Col>
                                <Col sm className="text-center">
                                    <span className="fw-bolder fs-5">Winner:</span> <br />
                                    {!isSpinning ? (
                                        <span className="text-muted fs-6">
                                            <LoadingLetters
                                                text={spinResult}
                                                loadingDuration={5000}
                                                interval={100}
                                                className="loading-text"
                                            />
                                        </span>
                                    ) : (
                                        <Spinner animation="border" />
                                    )}
                                </Col>
                            </Row>
                            <Col
                                lg={12}
                                className="d-flex justify-content-center d-none d-md-flex"
                            >
                                <WheelComponent
                                    segments={mapInfo}
                                    segColors={segColors}
                                    winningSegment="random"
                                    onFinished={(winner) => onFinished(winner)}
                                    primaryColor="black"
                                    contrastColor="white"
                                    buttonText="Spin"
                                    isOnlyOnce={false}
                                    size={300}
                                    upDuration={200}
                                    downDuration={600}
                                    randomWinningSegment={true}
                                />
                            </Col>
                            <Col xs md="8" lg="6" className="text-center mt-5 mt-md-0">
                                <div className="d-flex justify-content-center">
                                    <Button
                                        variant="success"
                                        className="w-50 me-2 d-block d-md-none"
                                        disabled={isSpinning}
                                        onClick={isSpinning ? undefined : handleClick}
                                    >
                                        {isSpinning ? 'Choosing Spot...' : 'Randomize Spot'}
                                    </Button>
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default WhereWeDroppin;