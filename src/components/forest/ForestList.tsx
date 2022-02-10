// react
import axios from "axios";
import React, { useState } from "react";
// bootstrap
import { Container } from "react-bootstrap";
// components
import ForestUserControls from "./controls/ForestUserControls";
import ForestListItem from "./ForestListItem";

const ForestList = () => {
  // temporary placeholder items until we actually have some mock data
  const placeholderItems = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [trees, setTrees] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/api/trees")
      .then((res) => {
        console.log(res);
        setTrees(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <Container>
      {console.log("OUR TREES STATE: ", trees)}
      <ForestUserControls />
      {placeholderItems.map((item, idx) => {
        return <ForestListItem key={idx} />;
      })}
    </Container>
  );
};

export default ForestList;
