// bootstrap
import { Container } from "react-bootstrap";
// components
import ForestUserControls from "./controls/ForestUserControls";
import ForestListItem from "./ForestListItem";

const ForestList = () => {
  // temporary placeholder items until we actually have some mock data
  const placeholderItems = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Container>
      <ForestUserControls />
      {placeholderItems.map((item) => {
        return <ForestListItem />;
      })}
    </Container>
  );
};

export default ForestList;
