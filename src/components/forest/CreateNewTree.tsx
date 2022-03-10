import React, { useState } from "react";
import { useMutation } from "react-query";
// services
import TreeService from "../../services/treeService/TreeService";
// react-router-dom
import { useNavigate } from "react-router-dom";
// bootstrap
import { Form, FloatingLabel, Alert, Button, Modal } from "react-bootstrap";

// form component to create a new tree
const CreateNewTree = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(true);
  const [tree, setTree] = useState({
    name: "",
    meaning: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTree({
      ...tree,
      [e.target.name]: e.target.value,
    });
  };

  const { isLoading, mutate } = useMutation(TreeService.plant, {
    onSuccess: (res) => {
      handleShow();
      setTimeout(() => {
        handleClose();
        navigate("/dashboard/forest");
      }, 2000);
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>You successfully planted your tree!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateNewTree;
