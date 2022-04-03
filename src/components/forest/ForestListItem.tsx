import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
// services
import TreeService from "../../services/treeService/TreeService";
import { DataUtils } from "../../services/utils/dataUtils";
// bootstrap
import { Button, Card, Col, Row, Modal } from "react-bootstrap";

const ForestListItem = (props: {
  id: number;
  lastPlanted: string;
  name: string;
  meaning: string;
}) => {
  const { id, name, meaning, lastPlanted } = props;
  const [date, setDate] = useState<string | undefined>();
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState<string | undefined>();
  const [daysGrowing, setDaysGrowing] = useState<number | undefined>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setDate(DataUtils.convertDate(lastPlanted));
    setStage(TreeService.calculatePhase(lastPlanted));
    setDaysGrowing(DataUtils.calculateNumDays(lastPlanted));
    console.log("Current Stage: " + TreeService.calculatePhase(lastPlanted));
  }, [lastPlanted]);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(TreeService.deleteTree, {
    onSuccess: (res) => {
      handleShow();
      queryClient.invalidateQueries("fetchUserTrees");
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
            <Card.Text>
              Current Stage: {stage}
            </Card.Text>
            <Card.Text>
              Your tree has been growing for {daysGrowing} {daysGrowing !== undefined && daysGrowing > 1 ? 'days' : 'day'}
            </Card.Text>
            <Card.Subtitle>planted on {date}</Card.Subtitle>
          </Col>
          <Col>
            <Button
              onClick={(e) => {
                e.preventDefault();
                mutate(id);
              }}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Succesfully deleted {name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ForestListItem;
