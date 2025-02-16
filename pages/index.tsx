import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
//json
import generatorList from "@/json/index/generator-list.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Off The Grid Random Class Generators</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Your hub for all off the grid random class generators past, present and future."
        />
        <meta name="keywords" content="off the grid" />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content mt-3">
          <Row>
            {generatorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <GeneratorCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  btn1Text={card.btn1Text}
                  link={card.link}
                  disabled={card.disabled}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
