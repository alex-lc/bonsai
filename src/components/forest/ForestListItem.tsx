// bootstrap
import { Card } from "react-bootstrap";

const ForestListItem = (props: { name: string; meaning: string }) => {
  const { name, meaning } = props;

  return (
    <Card style={{ padding: "10px", marginBottom: "10px" }}>
      <Card.Title>{name}</Card.Title>
      <Card.Body>{meaning}</Card.Body>
    </Card>
  );
};

export default ForestListItem;
