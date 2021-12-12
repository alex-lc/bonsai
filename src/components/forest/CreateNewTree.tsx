import React from "react";
// bootstrap
import { Form, FloatingLabel, Alert, Button } from "react-bootstrap";

// form component to create a new tree
const CreateNewTree = () => {
  const [showInfo, setShowInfo] = React.useState(true);
  const [tree, setTree] = React.useState({
    name: "",
    purpose: "",
  });

  // const handleInputChange = (e) => {
  //   setTree({
  //     ...tree,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
      <h2 className="sm-margin-y title">Create a New Tree</h2>
      <Form className="sm-margin-y">
        <FloatingLabel
          controlId="formTreeName"
          label="Tree Name"
          className="md-margin-bottom"
        >
          <Form.Control type="text" placeholder="Tree Name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="formTreePurpose"
          label="What Habit Is This Tree For?"
          className="md-margin-bottom"
        >
          <Form.Control type="text" placeholder="Purpose" />
        </FloatingLabel>
        <Button variant="success" type="submit" className="sm-margin-top">
          Finish Planting Tree
        </Button>
      </Form>
    </>
  );
};

export default CreateNewTree;
