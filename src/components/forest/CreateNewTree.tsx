import React from "react";
// bootstrap
import { Form, FormControl, Alert, Button } from "react-bootstrap";

// form component to create a new tree
const CreateNewTree = () => {
  const [showInfo, setShowInfo] = React.useState(true);

  return (
    <>
      {showInfo && (
        <Alert variant="secondary" className="sm-margin-top">
          <Alert.Heading>How It Works...</Alert.Heading>
          <p>
            The tree you are planting symbolizes the effort you are putting into
            growing better habits. Whether you are struggling with addiction,
            mental or physical health issues, or anything else you are actively
            working towards overcoming. Each day your tree will grow as you too
            grow as the best version of yourself.
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowInfo(false)} variant="outline-dark">
              Hide...
            </Button>
          </div>
        </Alert>
      )}
      <h2 className="sm-margin-y">Create a New Tree</h2>
      <Form className="sm-margin-y">
        <Form.Group controlId="formTreeName">
          <Form.Label>Name Your Tree</Form.Label>
          <Form.Control type="text" placeholder="Name Me..." />
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateNewTree;
