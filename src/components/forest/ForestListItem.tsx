import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
// services
import TreeService from "../../services/treeService/TreeService";
import { DataUtils } from "../../services/utils/dataUtils";
// bootstrap
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
// styles
import styled from "styled-components";

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
            <Card.Text>Current Stage: {stage}</Card.Text>
            <Card.Text>
              Your tree has been growing for {daysGrowing}{" "}
              {daysGrowing !== undefined && daysGrowing > 1 ? "days" : "day"}
            </Card.Text>
          </Col>
          <Row>
            <Footer>
              <Metadata>
                <Card.Text>Planted on: {date}</Card.Text>
              </Metadata>

              <Controls>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Implement replant functionality.");
                  }}
                >
                  Replant
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    mutate(id);
                  }}
                >
                  Delete
                </Button>
              </Controls>
            </Footer>
          </Row>
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

const Footer = styled.div`
  padding: 0.2rem 1rem;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.3rem;
`;

const Metadata = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Controls = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
