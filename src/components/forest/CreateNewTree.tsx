import React from "react";
// bootstrap
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

// form component to create a new tree
const CreateNewTree = () => {
  const [showInfo, setShowInfo] = React.useState(true);

  return (
    <>
      {showInfo && (
        <Alert variant="info">
          <Alert.Heading>How It Works...</Alert.Heading>
          <p>
            The tree you are planting symbolizes the effort you are putting into
            growing better habits. Whether you are struggling with addiction,
            mental or physical health issues, or anything else you are actively
            working towards overcoming. Each day your tree will grow as you too
            grow as the best version of yourself.
          </p>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => setShowInfo(false)}
              variant="outline-success"
            >
              Hide...
            </Button>
          </div>
        </Alert>
      )}
      <h2>Create a New Tree</h2>
    </>
  );
};

export default CreateNewTree;
