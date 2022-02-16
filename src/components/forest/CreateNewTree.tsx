import React from "react";
import { useMutation } from "react-query";
// services
import TreeService from "../../services/treeService/TreeService";
// bootstrap
import { Form, FloatingLabel, Alert, Button } from "react-bootstrap";

// form component to create a new tree
const CreateNewTree = () => {
  const [showInfo, setShowInfo] = React.useState(true);
  const [tree, setTree] = React.useState({
    name: "",
    meaning: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTree({
      ...tree,
      [e.target.name]: e.target.value,
    });
  };

  const { isLoading, mutate } = useMutation(TreeService.plant, {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {showInfo && (
        <Alert variant="secondary" className="sm-margin-top">
          <Alert.Heading>How It Works...</Alert.Heading>
          <p>
            The tree you are planting symbolizes the effort you are putting into
            growing better habits. No matter your purpose, your tree will grow
            each day with you as you achieve your goals.
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowInfo(false)} variant="outline-dark">
              Hide...
            </Button>
          </div>
        </Alert>
      )}
      <h2 className="sm-margin-y title">Plant a New Tree</h2>
      <Form className="sm-margin-y" onSubmit={mutate}>
        <FloatingLabel
          controlId="formTreeName"
          label="Name your tree."
          className="md-margin-bottom"
        >
          <Form.Control
            type="text"
            placeholder="Tree Name"
            name="name"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="formTreePurpose"
          label="What does this tree mean to you?"
          className="md-margin-bottom"
        >
          <Form.Control
            type="text"
            placeholder="Purpose"
            name="meaning"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </FloatingLabel>
        <Button variant="success" type="submit" className="sm-margin-y">
          Finish Planting Tree
        </Button>
      </Form>
    </>
  );
};

export default CreateNewTree;
