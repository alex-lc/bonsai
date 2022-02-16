import { useState, useEffect } from "react";
import { useQuery } from "react-query";
// bootstrap
import { Container } from "react-bootstrap";
// components
import ForestUserControls from "./controls/ForestUserControls";
import ForestListItem from "./ForestListItem";
// services
import TreeService from "../../services/treeService/TreeService";

const ForestList = () => {
  const { isLoading, isError, data } = useQuery(
    "fetchTrees",
    TreeService.fetchTrees
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <Container>
      <ForestUserControls />
      {data &&
        data.data.map(
          (
            item: { id: number; name: string; meaning: string },
            idx: number
          ) => {
            return (
              <ForestListItem
                id={item.id}
                name={item.name}
                meaning={item.meaning}
                key={idx}
              />
            );
          }
        )}
    </Container>
  );
};

export default ForestList;
