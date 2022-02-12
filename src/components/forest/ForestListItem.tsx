import { useMutation, useQueryClient } from "react-query";
// services
import TreeService from "../../services/treeService/TreeService";
// bootstrap
import { Button, Card, Col, Row } from "react-bootstrap";

const ForestListItem = (props: {
  id: number;
  name: string;
  meaning: string;
}) => {
  const { id, name, meaning } = props;

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(TreeService.deleteTree, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("fetchTrees");
    },
  });

  if (isLoading) {
    return <p>Deleting...</p>;
  }

  return (
    <Card style={{ padding: "10px", marginBottom: "10px" }}>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Row>
          <Col>
            <Card.Text>
              {meaning}, {id}
            </Card.Text>
          </Col>
          <Col>
            <Button onClick={() => mutate(id)}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ForestListItem;
