import { Card, Button } from "react-bootstrap";
//Styles
import styles from "@/public/styles/components/GeneratorCard.module.css";
//Types
import { CardProps } from "@/types/GeneratorCard";

function GeneratorCard(props: CardProps) {
  const btn2IsVisible: boolean = props.link2 ? true : false;

  return (
    <Card
      style={{ width: "18rem" }}
      className={`mx-auto h-100 d-flex flex-column ${styles.card}`}
    >
      {/* <Card.Img variant="top" src="https://placehold.co/100x100" /> */}
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className={styles.cardText}>{props.text}</Card.Text>
        <div className="d-grid gap-2 mt-auto">
          <Button
            variant={props.variant}
            href={props.link}
            size="sm"
            disabled={props.disabled}
          >
            {props.btn1Text ? props.btn1Text : "Generator"}
          </Button>
          {btn2IsVisible && (
            <Button
              variant={props.variant}
              href={props.link2}
              size="sm"
              disabled={props.disabled2}
            >
              {props.btn2Text ? props.btn2Text : "Generator"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default GeneratorCard;